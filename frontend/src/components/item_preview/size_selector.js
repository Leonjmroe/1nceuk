import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function SizeSelector(props) {

    const location = useLocation()

    const [size_small, set_size_small] = useState(css.size_element)
    const [size_medium, set_size_medium] = useState(css.size_element)
    const [size_large, set_size_large] = useState(css.size_element)
    const [size_extra_large, set_size_extra_large] = useState(css.size_element)
    const [style_switch, set_style_switch] = useState(css.size_cont)

    useEffect(() => {
      stock_check()
      if( props.type == "computer" ) {
        set_style_switch(css.size_cont)
      } else {
        set_style_switch(css.size_cont_mobile)
      }
    }, []);

    const stock_check = () => {
      if(location.state.item.qty_small == 0) {
        set_size_small(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_small(css.size_element)
      }
      if(location.state.item.qty_medium == 0) {
        set_size_medium(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_medium(css.size_element)
      }
      if(location.state.item.qty_large == 0) {
        set_size_large(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_large(css.size_element)
      }
      if(location.state.item.qty_extra_large == 0) {
        set_size_extra_large(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_extra_large(css.size_element)
      }
    }

    const size_select = (size, qty) => {
      if(size == "S" && qty != 0) {
        stock_check()
        set_size_small(`${css.size_element} ${css.size_select}`)
      }else if(size == "M" && qty != 0) {
        stock_check()
        set_size_medium(`${css.size_element} ${css.size_select}`)
      }else if(size == "L" && qty != 0) {
        stock_check()
        set_size_large(`${css.size_element} ${css.size_select}`)
      }else if (size == "XL" && qty != 0){
        stock_check()
        set_size_extra_large(`${css.size_element} ${css.size_select}`)
      }
    } 

   return (
    <div className={style_switch}>
      <div className={css.size_element_cont}>
        <div className={size_small} onClick={() => { size_select('S', location.state.item.qty_small) }}>S</div>
      </div>   
      <div className={css.size_element_cont}>                                            
        <div className={size_medium} onClick={() => { size_select('M', location.state.item.qty_medium) }}>M</div>
      </div>     
      <div className={css.size_element_cont}>                                             
        <div className={size_large} onClick={() => { size_select('L', location.state.item.qty_large) }}>L</div>
      </div>    
      <div className={css.size_element_cont}>                                               
        <div className={size_extra_large} onClick={() => { size_select('XL', location.state.item.qty_extra_large) }}>XL</div>
      </div>                                                  
    </div>
  );
}