import css from './checkout.module.css';
import { useContext, useEffect, useState } from "react";
import { StateContext } from '../state_management/context.js'
import ItemTile from './../store/itemTile.js';

export default function Preview() {

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

  const image_slice = (image) => {
      const idx = image.lastIndexOf('.')
      const img_type = image.slice(idx, image.length)
      const img = (image.slice(0, (idx - 8)) + img_type)
      return img 
   }

   const createItems = items.map((item) => (
      <ItemTile key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} 
                category={item.category} colour={item.colour} image1={item.image1} 
                image2={item.image2} image3={item.image3} size={item.size}
                mode="checkout" />
      )
   );

  return (
    <div className={css.checkout_container}>
      <div className={css.checkout_cont}>
        <div className={css.checkout_title}>Checkout</div>
        <div className={css.checkout_preview_cont}>{createItems}</div>
      </div>
    </div>
  ); 
}

