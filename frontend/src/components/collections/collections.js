import css from './collections.module.css';
import css_store from '../store/store.module.css';
import ItemTile from '../store/itemTile.js'
import { getItems } from '../store_admin/admin_actions.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export function Collection2023() {

  const location = useLocation()
  const [items, setItems] = useState([])

   useEffect(() => {
      pullItems()
   }, []);

   const pullItems = (x) => {
      getItems().then((data) => {
         const items = []
         const category_filter = data.map((item) => {
            if( item.label == '2022 Collection' ){
               items.push(item)
            }
         })
         setItems(items)
      })
   }

   const createItems = items.map((item) => {
    if (item.qty_small > 0 || item.qty_medium > 0 || item.qty_large > 0 || item.qty_extra_large > 0) {
      return (
        <ItemTile
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          category={item.category}
          colour={item.colour}
          image1={item.image1}
          image2={item.image2}
          image3={item.image3}
          qty_small={item.qty_small}
          qty_medium={item.qty_medium}
          qty_large={item.qty_large}
          qty_extra_large={item.qty_extra_large}
          mode="store"
          inventory="yes"
        />
      );
    }
  });

  return (
    <div className={css.collection_2022_container}>
      <div className={css.collection_2022_cont}>
        <div className={css.collection_2022_title}>2022 Collection</div>
        <div className={css_store.store_item_cont}>
          {createItems}
        </div>
      </div>
    </div>
  );
}


export function Collection2024() {

  const location = useLocation()
  const [items, setItems] = useState([])

   useEffect(() => {
      pullItems()
   }, []);

   const pullItems = (x) => {
      getItems().then((data) => {
         const items = []
         const category_filter = data.map((item) => {
            if( item.label == '2023 Collection' ){
               items.push(item)
            }
         })
         setItems(items)
      })
   }

   const createItems = items.map((item) => {
    if (item.qty_small > 0 || item.qty_medium > 0 || item.qty_large > 0 || item.qty_extra_large > 0) {
      return (
        <ItemTile
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          category={item.category}
          colour={item.colour}
          image1={item.image1}
          image2={item.image2}
          image3={item.image3}
          qty_small={item.qty_small}
          qty_medium={item.qty_medium}
          qty_large={item.qty_large}
          qty_extra_large={item.qty_extra_large}
          mode="store"
          inventory="yes"
        />
      );
    }
  });

  return (
    <div className={css.collection_2023_container}>
      <div className={css.collection_2023_cont}>
        <div className={css.collection_2023_title}>2023 Collection</div>
        <div className={css_store.store_item_cont}>
          {createItems}
        </div>
      </div>
    </div>
  );
}

