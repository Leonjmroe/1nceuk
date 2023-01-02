import ItemTile from './itemTile.js'
import css from './tile.module.css';
import { getItems } from '../store_admin/admin_actions.js';
import { useState, useEffect, useHistory } from 'react';
import { useLocation } from 'react-router-dom';


export default function Store() {

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

   const image_slice = (image) => {
      const idx = image.lastIndexOf('.')
      const img_type = image.slice(idx, image.length)
      const img = (image.slice(0, (idx - 8)) + img_type)
      return img 
   }

   const createItems = items.map((item) => (
      <ItemTile key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} category={item.category} 
                size={item.size} colour={item.colour} quantity={item.quantity} image1={image_slice(item.image1)}
                image2={image_slice(item.image2)} image3={image_slice(item.image3)} mode="store" />
      )
   );


   return (
    <div className={css.storeCont}>
        {createItems}
    </div>
  );
}

