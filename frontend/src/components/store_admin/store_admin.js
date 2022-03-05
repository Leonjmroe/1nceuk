import './store_admin.css';
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function StoreAdmin() {

   const location = useLocation()
   //console.log(location.state.token)
   const [items, setItems] = useState([]);

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [price, setPrice] = useState('')
   const [size, setSize] = useState('')
   const [colour, setColour] = useState('')
   const [quantity, setQuantity] = useState('')

   const titleInput = event => { setTitle(event.target.value) }
   const descriptionInput = event => { setDescription(event.target.value) }
   const priceInput = event => { setPrice(event.target.value) }
   const sizeInput = event => { setSize(event.target.value) }
   const colourInput = event => { setColour(event.target.value) }
   const quantityInput = event => { setQuantity(event.target.value) }


   const addItem = () => {
      if (title && description && price ) {
         const item = {
            'title': title,
            'description': description,
            'price': price,    
            }
         items.push(item)
         setTitle('') 
         setDescription('')
         setPrice('')
      }
   }
 
   return (
    <div className="storeAdminCont">
      <div className="addItemCont">
         <input className="itemTitle" placeholder="title" type="text" value={title} onChange={titleInput} />
         <textarea className="itemDescription" placeholder="description" value={description} onChange={descriptionInput} type="text" />
         <input className="itemPrice" type="number" placeholder="price (£)" value={price} onChange={priceInput} />
         <select className="itemSize" placeholder="size" value={size} onChange={sizeInput}>
            <option className="sizeOption">small</option>
            <option className="sizeOption">medium</option>
            <option className="sizeOption">large</option>
            <option className="sizeOption">extra large</option>
         </select>
         <select className="itemColour" placeholder="colour" value={colour} onChange={colourInput}>
            <option className="sizeOption">red</option>
            <option className="sizeOption">green</option>
            <option className="sizeOption">dark blue</option>
            <option className="sizeOption">light blue</option>
            <option className="sizeOption">green</option>
            <option className="sizeOption">purple</option>
            <option className="sizeOption">pink</option>
            <option className="sizeOption">grey</option>
            <option className="sizeOption">black</option>
            <option className="sizeOption">orange</option>
            <option className="sizeOption">white</option>
            <option className="sizeOption">brown</option>
            <option className="sizeOption">yellow</option>
            <option className="sizeOption">cream</option>
            <option className="sizeOption">burgundy</option>
            <option className="sizeOption">beige</option>
         </select>
         <input className="itemQuantity" type="number" placeholder="quantity" value={quantity} onChange={quantityInput} />
         <input className="imageUpload" type="file" />
         <input className="imageUpload" type="file" />
         <input className="imageUpload" type="file" />
         <div className="addItem" onClick={addItem}>Add Item</div>
      </div>
      <div className="deleteItemCont">
         {items.map( item => (
           <ItemTile key={item.id} datakey={item.id} title={item.title} description={item.description} price={item.price} />
         ))}
      </div>
    </div>
  );
}
