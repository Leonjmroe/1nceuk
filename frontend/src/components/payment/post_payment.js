import css from './payment.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from "react";
import { StateContext } from '../state_management/context.js'
import axios from "axios";
import { addItem, getItems, editItem, deleteItem, decrementItem } from '../store_admin/admin_actions.js';


export default function Success(props) {

  const navigate = useNavigate();
  const [state, dispatch] = useContext(StateContext)
  const { stripePromise } = props;
  const [ successSwitch, setSuccessSwitch ] = useState(css.payment_success_cont);
  const [ noSuccessSwitch, setNoSuccessSwitch ] = useState(css.payment_no_success_cont);
  const [ errorMessage, setErrorMessage ] = useState();
  const [ items, set_items ] = useState([])


  const getData = key => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  const price_count = () => {
    var counter = 0
    items.map((item) => ( 
      counter = counter + item.price 
    )) 
    return ('£' + counter)
  }

  useEffect(() => {
    if (!stripePromise) return;
    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      if(error) {
        const item_data = getData('basket');
        set_items(item_data)
        setErrorMessage(error)
        setNoSuccessSwitch(`${css.payment_no_success_cont} ${css.display_cont}`)
      } else {
        setSuccessSwitch(`${css.payment_success_cont} ${css.display_cont}`)
        dispatch({ type: 'reset_basket' })
        window.localStorage.setItem('basket', JSON.stringify([]));
        // shipping_handling_email( paymentIntent.receipt_email, paymentIntent.amount, paymentIntent.description,
        //                          paymentIntent.id )
        get_items_to_remove(paymentIntent.description)
      }
    });
  }, [stripePromise]);


  const shipping_handling_email = async ( email, amount, description, id ) => {
    const response = await axios.post('/api/mail/payment_confirmation/', 
                    { 'subject': 'You have a new 1nce purchase!',
                      'recipient': '1nceuk.clothing@gmail.com',
                      'message': 'Customer Email: ' + email + '; Sale amount: £' + (amount/100) + '; Items: ' + description
                                  + '; Stripe-Payment-ID: ' + id })}
                                
  const get_items_to_remove = (items_string) => {
    var items = items_string.split('] ')
    items = items.slice(0, items.length - 1)
    const id_list = []
    const size_list = []
    const items_id = items.map((item) => {
      const id = item.split(';')[0].split(' ')[1]
      const size = item.split(';')[4].split(' ')[2]
      id_list.push(Number(id))
      size_list.push(size)
    })
    remove_from_store(id_list, size_list)
  }

  const remove_from_store = (id_list, size_list) => {
      getItems().then((data) => {
        const items = []
        const item = data.map((item) => {
          const id = item.id
            if( id_list.includes(id) ) {
              const idx = id_list.indexOf(id)
              const size = size_list[idx]
              const inventory = item.qty_small + item.qty_medium + item.qty_large + item.qty_extra_large
              if( inventory > 1 ) {
                let size_field
                switch (size) {
                  case 'S':
                    size_field = 'qty_small'
                    break
                  case 'M':
                    size_field = 'qty_medium'
                    break
                  case 'L':
                    size_field = 'qty_large'
                    break
                  case 'XL':
                    size_field = 'qty_extra_large'
                    break
                }
                console.log(id, size_field)
                decrementItem(id, size_field)
              }else {
                deleteItem(id, 0)
              }
            }
         })
      })
  }

  return (
    <div className={css.payment_success_container}>
      <div className={successSwitch}>
        <div className={css.success_title}>Your Purchase was Successful</div>
        <div className={css.success_text}>Your item will be shipped shortly. Thank you for shopping with 1nce!</div>
        <img className={css.success_image}></img>
        <div className={css.redirect_button} onClick={()=> navigate('/')}>Home</div>
       </div>
      <div className={noSuccessSwitch}>
        <div className={css.no_success_title}>There was a problem with your purchase..</div>
        <div className={css.no_success_text}>Purchase error: {errorMessage}</div>
        <div className={css.retry_button} onClick={()=> navigate('/checkout', 
                        {state: {payment: price_count()}} )}>Retry</div>
      </div>
     </div>
  );
};
