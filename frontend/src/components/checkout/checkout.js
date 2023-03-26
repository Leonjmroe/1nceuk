import css from './checkout.module.css';
import Countries from './countries.js';
import { useContext, useEffect, useState } from "react";
import { StateContext } from '../state_management/context.js'
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';


export default function Preview() {

  const location = useLocation()
  const [state, dispatch] = useContext(StateContext)
  const [items, set_items] = useState([])
  const [payment, set_payment] = useState()

  const getData = key => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  useEffect(() => {
    const item_data = getData('basket');
    if( item_data != null ) {
      dispatch({ type: 'set_basket', payload: item_data })
      set_items(item_data)
      set_payment(location.state.payment)
    }
  }, []);

  
  const addressAPI = event => { 

    var requestOptions = {
      method: 'GET',
    };
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${event.target.value}&apiKey=bf1de4840f1e4e868aed2942d329321b`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const summary_title  = () => {
    const output = ('Total: ' + payment + ' (' + items.length + ' Items)')
    return output
  }


  return (
    <div className={css.checkout_container}>
      <div className={css.checkout_cont}>
        <div className={css.checkout_title}>Checkout</div>
        <div className={css.checkout_preview_cont}>
          <div className={css.summary_cont}>  
            <div className={css.summary_title}>{summary_title()}</div>
            </div>
          <div className={css.details_cont}>
            <input className={css.first_name} type="text" placeholder="First Name"></input>
            <input className={css.last_name} type="text" placeholder="Last Name"></input>
            <input className={css.email} type="text" placeholder="Email"></input>
            <input className={css.phone_number} type="text" placeholder="Phone Number"></input>
          </div>
          <div className={css.address_cont}>
            <input className={css.address_line_1} onChange={addressAPI} type="text" placeholder="Address Line 1"></input>
            <input className={css.address_line_2} type="text" placeholder="Address Line 2"></input>
            <input className={css.address_line_3} type="text" placeholder="Address Line 3"></input>
            <input className={css.address_city} type="text" placeholder="City/Locality"></input>
            <input className={css.address_area} type="text" placeholder="State/Province"></input>
            <input className={css.address_postcode} type="text" placeholder="Postal Code"></input>
            <Countries />
          </div>
          <div className={css.payment_button}>Payment</div>
        </div>
      </div>
    </div>
  ); 
}

