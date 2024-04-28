import css from './basket.module.css';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../state_management/context.js'
import BasketTile from './basket_tile.js';

export default function Basket() {

  const navigate = useNavigate()
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
  }, []);

  const roundNumber = (value, decimals) => {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

  const createItems = items.map((item) => (
    <BasketTile key={item.id} id={item.id} title={item.title} description={item.description} price={roundNumber(item.price, 2)} 
                category={item.category} colour={item.colour} image1={item.image1} 
                image2={item.image2} image3={item.image3} size={item.size}
                mode="basket" />
      )
   );

  const price_count = () => {
    var counter = 0
    items.map((item) => ( 
      counter = counter + item.price 
    )) 
    return ('£' + roundNumber(counter, 2))
  }

  return (
    <div className={css.basket_container}>
      <div className={css.basket_cont}>
        <div className={css.basket_title}>Basket</div>
        <div className={css.basket_content_cont}>
          <div className={css.basket_item_cont}>{createItems}</div>
          <div className={css.summary_cont}>
            <div className={css.summary_title}>Summary</div>
            <div className={css.summary_price}>{price_count()}</div>
            <div className={css.checkout_button} onClick={()=> navigate('/checkout', 
                            {state: {payment: price_count()}} )}>Checkout</div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

