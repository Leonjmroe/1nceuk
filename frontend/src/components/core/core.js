import css from './core.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { StateContext } from '../state_management/context.js'


export function Navbar(item) {

  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useContext(StateContext)

  const getData = key => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  useEffect(() => {
    const items = getData('basket');
    if( items != null ) {
      dispatch({ type: 'set_basket', payload: items })
    }
  }, []);

return (
<div className={css.navbar}>
  <div className={css.navbar_flex_item}>
    <div className={css.logo1nce} onClick={()=> navigate('/')}/>
  </div>
  <div className={css.navbar_flex_item}>
    <div className={css.storeTitle} onClick={()=> navigate('/store_selection')}>Shop Now</div>
  </div>
  <div className={css.navbar_flex_item}>
    <div className={css.basketCont}>  
      <div className={css.shopCounter}>{state.count}</div>
      <div className={css.shopBtn} onClick={()=> navigate('/basket')}/>
    </div>
  </div>
</div>
)}


export function Footer() {

return (
  <div className={css.footer}>
  	<div className={css.footerBox}>
		  <div className={`${css.icon} ${css.icon1}`}/>
		  <div className={css.iconTxt}>Instagram</div>
  	</div>
  	<div className={css.footerBox}>
  	  <div className={`${css.icon} ${css.icon2}`}/>
	  	<div className={css.iconTxt}>Depop</div>
  	</div>
  	<div className={css.footerBox}>
  	  <div className={`${css.icon} ${css.icon3}`}/>
	  	<div className={css.iconTxt}>Email</div>
  	</div>
  </div>
)}


export function Underbar() {

return (
  <div className={css.underbar}/>
)}

export function UnderbarHeader() {

return (
  <div className={css.underbar_header}/>
)}

export function UnderbarFooter() {

return (
  <div className={css.underbar_footer}/>
)}

