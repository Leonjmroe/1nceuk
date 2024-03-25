import ItemTile from './itemTile.js'
import css from './store.module.css';
import { getItems } from '../store_admin/admin_actions.js';
import { useState, useEffect, useHistory } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export function Store({defaultCategory}) {

  const location = useLocation()
  const category = location.state?.category || defaultCategory;
  const [items, setItems] = useState([])

   useEffect(() => {
      pullItems()
   }, []);


   const pullItems = () => {
    getItems().then((data) => {
      let filteredItems;
      if (!location.state?.category) {
        filteredItems = data.filter(item => item.featured_checked);
      } else {
        filteredItems = data.filter(item => item.category === category);
      }
      setItems(filteredItems);
    });
  };



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
          sale={item.sale}
          label={item.label}
          qty_small={item.qty_small}
          qty_medium={item.qty_medium}
          qty_large={item.qty_large}
          qty_extra_large={item.qty_extra_large}
          featured_checked={item.featured_checked}
          mode="store"
          inventory="yes"
        />
      );
    }
  });


   const capitalise = () => {
     const category = location.state?.category || defaultCategory;
     if (!category) return ''; 
     return category.charAt(0).toUpperCase() + category.slice(1);
   }

   return (
     <div className={css.store_container}>
       {location.state?.category && <div className={css.category_title}>{capitalise()}</div>}
       <div className={css.store_item_cont}>
         {createItems}
       </div>
     </div>
   )
}


export function StoreSelect() {

   const navigate = useNavigate();

   return (
      <div className={css.container}>
         <div className={css.store_category_cont}>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'hats'} })}>Hats</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'hoodies'} })}>Hoodies</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'jackets'} })}>Jackets</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'joggers'} })}>Joggers</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'shorts'} })}>Shorts</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 't-shirts'} })}>T-Shirts</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'jumpers'} })}>Jumpers</div>
            <div className={css.store_category} onClick={()=> navigate('/store', {state: {category: 'accessories'} })}>Accessories</div>
         </div>
         <div className={css.featured_item_title}>Featured Items</div>
         <div className={css.featured_items_cont}>
            <Store defaultCategory='featured'/>
         </div>
      </div>
  );
}


