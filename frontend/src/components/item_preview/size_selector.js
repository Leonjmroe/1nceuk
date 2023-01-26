import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function SizeSelector(props) {

    const location = useLocation()

    const [size_small, set_size_small] = useState(css.size_element)
    const [size_medium, set_size_medium] = useState(css.size_element)
    const [size_large, set_size_large] = useState(css.size_element)
    const [size_extra_large, set_size_extra_large] = useState(css.size_element)
    const [cont_style_switch, set_cont_style_switch] = useState(css.size_cont)
    const [element_style_switch, set_element_style_switch] = useState(css.size_element)

    useEffect(() => {
      console.log(props.type)
      device_check()
      stock_check()
    }, []);

    const device_check = () => {
      if( props.type == "computer" ) {
        set_cont_style_switch(css.size_cont)
        set_element_style_switch(css.size_element)
      } else {
        set_cont_style_switch(css.size_cont_mobile)
        set_element_style_switch(css.size_element_mobile)
      }
    }

    const stock_check = () => {
      device_check()
      if(location.state.item.qty_small == 0) {
        set_size_small(`${element_style_switch} ${css.no_stock}`)
      }else {
        set_size_small(element_style_switch)
      }
      if(location.state.item.qty_medium == 0) {
        set_size_medium(`${element_style_switch} ${css.no_stock}`)
      }else {
        set_size_medium(element_style_switch)
      }
      if(location.state.item.qty_large == 0) {
        set_size_large(`${element_style_switch} ${css.no_stock}`)
      }else {
        set_size_large(element_style_switch)
      }
      if(location.state.item.qty_extra_large == 0) {
        set_size_extra_large(`${element_style_switch} ${css.no_stock}`)
      }else {
        set_size_extra_large(element_style_switch)
      }
    }

    const size_select = (size, qty) => {
      if(size == "S" && qty != 0) {
        stock_check()
        set_size_small(`${element_style_switch} ${css.size_select}`)
        console.log(size_small)
      }else if(size == "M" && qty != 0) {
        stock_check()
        set_size_medium(`${element_style_switch} ${css.size_select}`)
      }else if(size == "L" && qty != 0) {
        stock_check()
        set_size_large(`${element_style_switch} ${css.size_select}`)
      }else if (size == "XL" && qty != 0){
        stock_check()
        set_size_extra_large(`${element_style_switch} ${css.size_select}`)
      }
    } 

   return (
    <div className={cont_style_switch}>
      <div className={size_small} onClick={() => { size_select('S', location.state.item.qty_small) }}>S</div>                                           
      <div className={size_medium} onClick={() => { size_select('M', location.state.item.qty_medium) }}>M</div>                                             
      <div className={size_large} onClick={() => { size_select('L', location.state.item.qty_large) }}>L</div>                                            
      <div className={size_extra_large} onClick={() => { size_select('XL', location.state.item.qty_extra_large) }}>XL</div>                                                
    </div>
  );
}
