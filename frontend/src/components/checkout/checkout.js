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
      </div>
    </div>
  ); 
}

