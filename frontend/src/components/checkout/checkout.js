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
        <div className={css.checkout_preview_cont}>{location.state.payment}</div>

{/*
        <div class="container">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
  <div class="form">
    
  <div class="fields fields--2">
    <label class="field">
      <span class="field__label" for="firstname">First name</span>
      <input class="field__input" type="text" id="firstname" value="John" />
    </label>
    <label class="field">
      <span class="field__label" for="lastname">Last name</span>
      <input class="field__input" type="text" id="lastname" value="Doe" />
    </label>
  </div>
  <label class="field">
    <span class="field__label" for="address">Address</span>
    <input class="field__input" type="text" id="address" />
  </label>
  <label class="field">
    <span class="field__label" for="country">Country</span>
    <select class="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">United States</option>
    </select>
  </label>
  <div class="fields fields--3">
    <label class="field">
      <span class="field__label" for="zipcode">Zip code</span>
      <input class="field__input" type="text" id="zipcode" />
    </label>
    <label class="field">
      <span class="field__label" for="city">City</span>
      <input class="field__input" type="text" id="city" />
    </label>
    <label class="field">
      <span class="field__label" for="state">State</span>
      <select class="field__input" id="state">
        <option value=""></option>
      </select>
    </label>
  </div>
  </div>
  <hr>
  <button class="button">Continue</button>
</div>*/}


      </div>
    </div>
  ); 
}

