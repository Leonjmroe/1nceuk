import ItemTile from './itemTile.js'
import css from './store.module.css';
import { getItems } from '../store_admin/admin_actions.js';
import { useState, useEffect, useHistory } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export function Store() {

  const location = useLocation()
  const [items, setItems] = useState([])

   useEffect(() => {
      pullItems()
   }, []);

   const pullItems = (x) => {
      getItems().then((data) => {
         const items = []
         const category_filter = data.map((item) => {
            if( item.category == location.state.catagory ){
               items.push(item)
            }
         })
         setItems(items)
      })
   }

   const createItems = items.map((item) => (
      <ItemTile key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} 
                category={item.category} colour={item.colour} image1={item.image1} 
                image2={item.image2} image3={item.image3} qty_small={item.qty_small} 
                qty_medium={item.qty_medium} qty_large={item.qty_large} qty_extra_large={item.qty_extra_large} 
                mode="store" />
      )
   );

   const capitalise = () => {
      const catagory = location.state.catagory
      const first_letter = catagory[0].toUpperCase()
      const remaining = catagory.slice(1,catagory.length)
      const capitalisation = first_letter + remaining
      return capitalisation
   }

   return (
    <div className={css.store_container}>
      <div className={css.category_title}>{capitalise()}</div>
      <div className={css.store_item_cont}>
        {createItems}
      </div>
    </div>
  );
}



export function StoreSelect() {

   const navigate = useNavigate();

   return (
    <div className={css.store_select_container}>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Hats</div>
         <div className={`${css.sqrImage} ${css.img4}`} onClick={()=> navigate('/store', {state: {catagory: 'hats'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Hoodies</div>
         <div className={`${css.sqrImage} ${css.img1}`} onClick={()=> navigate('/store', {state: {catagory: 'hoodies'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Jackets</div>
         <div className={`${css.sqrImage} ${css.img2}`} onClick={()=> navigate('/store', {state: {catagory: 'jackets'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Joggers</div>
         <div className={`${css.sqrImage} ${css.img3}`} onClick={()=> navigate('/store', {state: {catagory: 'joggers'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Shorts</div>
         <div className={`${css.sqrImage} ${css.img3}`} onClick={()=> navigate('/store', {state: {catagory: 'shorts'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>T-Shirts</div>
         <div className={`${css.sqrImage} ${css.img2}`} onClick={()=> navigate('/store', {state: {catagory: 't-shirts'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Jumpers</div>
         <div className={`${css.sqrImage} ${css.img1}`} onClick={()=> navigate('/store', {state: {catagory: 'jumpers'} })} />
       </div>
       <div className={css.item_select_container}>
         <div className={css.sqrText}>Accessories</div>
         <div className={`${css.sqrImage} ${css.img4}`} onClick={()=> navigate('/store', {state: {catagory: 'accessories'} })} />
       </div>
    </div>
  );
}


