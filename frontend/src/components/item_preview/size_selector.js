import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function SizeSelector(props) {

    const location = useLocation()

    const [count_small, set_count_small] = useState(location.state.item.qty_small)
    const [count_medium, set_count_medium] = useState(location.state.item.qty_medium)
    const [count_large, set_count_large] = useState(location.state.item.qty_large)
    const [count_extra_large, set_count_extra_large] = useState(location.state.item.qty_extra_large)

    const [size_small, set_size_small] = useState(css.size_element)
    const [size_medium, set_size_medium] = useState(css.size_element)
    const [size_large, set_size_large] = useState(css.size_element)
    const [size_extra_large, set_size_extra_large] = useState(css.size_element)

    useEffect(() => {
      const items = getData('basket')
      stock_revise(items)
      stock_check()
      pass_on_selction()
    }, [props]);

    const getData = (key) => {
      return JSON.parse(window.localStorage.getItem(key));
    };

    const stock_revise = (items) => {
      items.map((item) => {
        if(item.parent_id == props.parent_id) {
          console.log(item)
        }
      })
    }

    const stock_check = () => {
      if(count_small == 0) {
        set_size_small(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_small(css.size_element)
      }
      if(count_medium == 0) {
        set_size_medium(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_medium(css.size_element)
      }
      if(count_large == 0) {
        set_size_large(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_large(css.size_element)
      }
      if(count_extra_large == 0) {
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
          set_count_small(count_small - 1)
          set_size_small(`${css.size_element} ${css.size_select}`)
        }else if(size == 'M' && qty != 0) {
          set_count_medium(count_medium - 1)
          set_size_medium(`${css.size_element} ${css.size_select}`)
        }else if(size == 'L' && qty != 0) {
          set_count_large(count_large- 1)
          set_size_large(`${css.size_element} ${css.size_select}`)
        }else if (size == 'XL' && qty != 0){
          set_count_extra_large(count_extra_large - 1)
          set_size_extra_large(`${css.size_element} ${css.size_select}`)
        }
      }
    } 

   return (
    <div className={css.size_cont}>
      <div className={size_small} onClick={() => { size_select('S', count_small) }}>S</div>                                           
      <div className={size_medium} onClick={() => { size_select('M', count_medium) }}>M</div>                                             
      <div className={size_large} onClick={() => { size_select('L', count_large) }}>L</div>                                            
      <div className={size_extra_large} onClick={() => { size_select('XL', count_extra_large) }}>XL</div>                                                
    </div>
  );
}
