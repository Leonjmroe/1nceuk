import css from './basket.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { StateContext } from '../state_management/context.js'


export default function BasketTile(props) {

  const navigate = useNavigate(props);
  const [state, dispatch] = useContext(StateContext)
  const [basket_button_toggle, set_basket_button_toggle] = useState(css.display_none)

  const removeFromBasket = (item) => {
    for (let i = 0; i < state.count; i++) {
      const items = state.items
      const item_id = items[i].id
      if(item_id == props.id) {
        items.splice(i, 1)
        saveData('basket', items);
        dispatch({ type: 'remove_from_basket', payload: items })
        break
      }
    }
  }

  const saveData = (key, data) => {
      window.localStorage.setItem(key, JSON.stringify(data));
    };

  return (
    <div className={css.basket_tile}>
      <div className={css.basket_image_cont}>
        <img className={css.basket_image} src={props.image1}/>
        <div className={css.price_mobile}>{"£" + props.price}</div>
      </div>
      <div className={css.basket_info_cont}> 
        <div className={css.title}>{props.title}</div>
        <div className={css.description}>{props.description}</div>
        <div className={css.size_colour}>Size: {props.size}  |  Colour: {props.colour}</div>
      </div>
      <div className={css.price_cont}>
        <div className={css.basket_deleteTile} onClick={() => removeFromBasket(props)}/>
        <div className={css.price}>{"£" + props.price}</div>
      </div>
    </div>
  );
}

