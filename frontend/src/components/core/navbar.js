import css from './core.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Header(item) {

  const navigate = useNavigate();

return (
<div className={css.header}>
  <div className={css.logo1nce} onClick={()=> navigate('/')}/>
  <div className={css.storeTitle} onClick={()=> navigate('/store_selection')}>Shop Now</div>
  <div className={css.basketCont}>  
    <div className={css.shopCounter}>1</div>
    <div className={css.shopBtn} onClick={()=> navigate('/checkout')}/>
  </div>
</div>
)}
