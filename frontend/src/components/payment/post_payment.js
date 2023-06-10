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
        shipping_handling_email( paymentIntent.receipt_email, paymentIntent.amount, paymentIntent.description,
                                 paymentIntent.id )
        remove_items(paymentIntent.description)
      }
    });
  }, [stripePromise]);


  const shipping_handling_email = async ( email, amount, description, id ) => {
    const response = await axios.post('/api/mail/send_email/', 
                    { 'subject': 'You have a new 1nce purchase!',
                      'recipient': '1nceuk.clothing@gmail.com',
                      'message': 'Customer Email: ' + email + '; Sale amount: £' + (amount/100) + '; Items: ' + description
                                  + '; Stripe-Payment-ID: ' + id })}
               

  const remove_items = (items_string) => {
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
    const unique_item_obj = []
    const unique_ids = [...new Set(id_list)];
    unique_ids.map((item_id) => {
      const size_obj = { 'S': 0,
                         'M': 0,
                         'L': 0,
                         'XL': 0 }
      const item_obj = [item_id, size_obj]
      unique_item_obj.push(item_obj)
    })
    let count = 0 
    id_list.map((list_id) => {
      unique_item_obj.map((obj_id) => {
        if( obj_id[0] == list_id) {
          const size = size_list[count]
          switch (size) {
            case 'S':
              obj_id[1]['S'] = obj_id[1]['S'] + 1
              break
            case 'M':
              obj_id[1]['M'] = obj_id[1]['M'] + 1
              break
            case 'L':
              obj_id[1]['L'] = obj_id[1]['L'] + 1
              break
            case 'XL':
              obj_id[1]['XL'] = obj_id[1]['XL'] + 1
              break
          }
          count += 1
        }
      })
    })
    unique_item_obj.map((obj_id) => {
      decrementItem(obj_id[0], obj_id[1]['S'], obj_id[1]['M'], obj_id[1]['L'], obj_id[1]['XL'])
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
