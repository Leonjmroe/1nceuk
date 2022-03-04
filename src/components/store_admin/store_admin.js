import './store_admin.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function StoreAdmin() {

   const location = useLocation()
   console.log(location.state.token)

   const [title, setTitle] = useState()
   const [description, setDescription] = useState()
   const [price, setPrice] = useState()

   const titleInput = event => { setTitle(event.target.value) }
   const descriptionInput = event => { setDescription(event.target.value) }
   const priceInput = event => { setPrice(event.target.value) }

   const items = []
   const addItem = () => {
      const item = {
         'title': title,
         'description': description,
         'price': price,    
      }
      items.push(item)
  }

   return (
    <div className="storeAdminCont">
      <div className="addItemCont">
         <input className="itemTitle" placeholder="title" type="text" onChange={titleInput} />
         <input className="itemDescription" placeholder="description" onChange={descriptionInput} type="text" />
         <input className="itemPrice" type="text" placeholder="price" onChange={priceInput} />
         <div className="addItem" onClick={addItem}>Add Item</div>
      </div>
      <div className="deleteItemCont">
         {/*{items.map( item => (
           <ItemTile key={item.id} datakey={item.id} image={item.image} text={item.text} price={item.price} />
         ))}*/}
      </div>
    </div>
  );
}

