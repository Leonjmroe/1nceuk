import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function SizeSelector(props) {

    const location = useLocation()

    const [size_small, set_size_small] = useState(css.size_element)
    const [size_medium, set_size_medium] = useState(css.size_element)
    const [size_large, set_size_large] = useState(css.size_element)
    const [size_extra_large, set_size_extra_large] = useState(css.size_element)

    useEffect(() => {
      stock_check()
      pass_on_selction()
    }, [props]);

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

    const pass_on_selction = () => {
      if(props.pass_selection != null) {
        const size = props.pass_selection
        if(size == 'S') {
          set_size_small(`${css.size_element} ${css.size_select}`)
        }else if(size == 'M') {
          set_size_medium(`${css.size_element} ${css.size_select}`)
        }else if(size == 'L') {
          set_size_large(`${css.size_element} ${css.size_select}`)
        }else if (size == 'XL'){
          set_size_extra_large(`${css.size_element} ${css.size_select}`)
        }
      } else {
        stock_check()
      }
    }

    const size_select = (size, qty) => {
      if(qty != 0) {
        stock_check()
        props.size_select(size)
        if(size == 'S' && qty != 0) {
          set_size_small(`${css.size_element} ${css.size_select}`)
        }else if(size == 'M' && qty != 0) {
          set_size_medium(`${css.size_element} ${css.size_select}`)
        }else if(size == 'L' && qty != 0) {
          set_size_large(`${css.size_element} ${css.size_select}`)
        }else if (size == 'XL' && qty != 0){
          set_size_extra_large(`${css.size_element} ${css.size_select}`)
        }
      }
    } 

   return (
    <div className={css.size_cont}>
      <div className={size_small} onClick={() => { size_select('S', location.state.item.qty_small) }}>S</div>                                           
      <div className={size_medium} onClick={() => { size_select('M', location.state.item.qty_medium) }}>M</div>                                             
      <div className={size_large} onClick={() => { size_select('L', location.state.item.qty_large) }}>L</div>                                            
      <div className={size_extra_large} onClick={() => { size_select('XL', location.state.item.qty_extra_large) }}>XL</div>                                                
    </div>
  );
}
