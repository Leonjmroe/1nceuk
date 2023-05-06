import css from './payment.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from "react";
import { StateContext } from '../state_management/context.js'


export default function Success() {

  const navigate = useNavigate();
  const [state, dispatch] = useContext(StateContext)

  useEffect(() => {
    dispatch({ type: 'reset_basket' })
    window.localStorage.setItem('basket', JSON.stringify([]));
  }, []);

  return (
    <div className={css.payment_success_container}>
      <div className={css.payment_success_cont}>
        <div className={css.success_title}>Your Purchase was Successful</div>
        <div className={css.success_text}>Your item will be shipped shortly. Thank you for shopping with 1nce!</div>
        <img className={css.success_image}></img>
        <div className={css.redirect_button} onClick={()=> navigate('/')}>Home</div>
       </div>
     </div>
  );
};
