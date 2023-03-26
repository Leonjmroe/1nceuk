import css from './checkout.module.css';
import { useContext, useEffect, useState } from "react";
import { StateContext } from '../state_management/context.js'
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';


export default function Preview() {

  const location = useLocation()
  const [state, dispatch] = useContext(StateContext)
  const [items, set_items] = useState([])

  const getData = key => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  useEffect(() => {
    const item_data = getData('basket');
    if( item_data != null ) {
      dispatch({ type: 'set_basket', payload: item_data })
      set_items(item_data)
    }
    console.log(item_data, location.state)
  }, []);


  return (
    <div className={css.checkout_container}>
      <div className={css.checkout_cont}>
        <div className={css.checkout_title}>Checkout</div>
        <div className={css.checkout_preview_cont}>
          <div className={css.details_cont}>
            <input className={css.first_name} type="text" placeholder="First Name"></input>
            <input className={css.last_name} type="text" placeholder="Last Name"></input>
            <input className={css.email} type="text" placeholder="Email"></input>
            <input className={css.phone_number} type="text" placeholder="Phone Number"></input>
          </div>
          <div className={css.address_cont}>
            <input className={css.address_line_1} type="text" placeholder="Address Line 1"></input>
            <input className={css.address_line_2} type="text" placeholder="Address Line 2"></input>
            <input className={css.address_line_3} type="text" placeholder="Address Line 3"></input>
            <input className={css.address_city} type="text" placeholder="City/Locality"></input>
            <input className={css.address_area} type="text" placeholder="State/Province"></input>
            <input className={css.address_postcode} type="text" placeholder="Postal Code"></input>
            <input className={css.address_country} type="dropdown" placeholder="Country"></input>
          </div>
          <div className={css.payment_button}>Payment</div>
        </div>
      </div>
    </div>
  ); 
}

