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
   const [category, setCategory] = useState('')
   const [size, setSize] = useState('')
   const [colour, setColour] = useState('')
   const [quantity, setQuantity] = useState('')
   const [image1, setImage1] = useState('')
   const [image2, setImage2] = useState('')
   const [image3, setImage3] = useState('')

   const titleInput = event => { setTitle(event.target.value) }
   const descriptionInput = event => { setDescription(event.target.value) }
   const priceInput = event => { setPrice(event.target.value) }
   const categoryInput = event => { setCategory(event.target.value) }
   const sizeInput = event => { setSize(event.target.value) }
   const colourInput = event => { setColour(event.target.value) }
   const quantityInput = event => { setQuantity(event.target.value) }
   const image1Input = event => { setImage1(URL.createObjectURL(event.target.files[0]))}
   const image2Input = event => { setImage2(URL.createObjectURL(event.target.files[0]))}
   const image3Input = event => { setImage3(URL.createObjectURL(event.target.files[0]))}

   const addItem = () => {
      if (title && description && price && size && colour && quantity && image1 && image2 && image3) {
         const item = {
            'title': title,
            'description': description,
            'price': price,
            'category': category,
            'size': size,
            'colour': colour,
            'quantity': quantity,
            'image1': image1,
            'image2': image2,
            'image3': image3 }
         items.push(item)
         setCategory('') 
         setTitle('') 
         setDescription('')
         setPrice('')
         setSize('')
         setColour('')
         setQuantity('')
         setImage1('')
         setImage2('')
         setImage3('')
         console.log(item)
      }
   }
 
   return (
    <div className="storeAdminCont">
      <div className="addItemCont">
         <input className="itemTitle" placeholder="title" type="text" value={title} onChange={titleInput} />
         <textarea className="itemDescription" placeholder="description" value={description} onChange={descriptionInput} type="text" />
         <input className="itemPrice" type="number" placeholder="price (£)" value={price} onChange={priceInput} />
         <select className="itemCategory" value={category} onChange={categoryInput}>
            <option value="" disabled selected>select category</option>
            <option className="sizeOption">hats</option>
            <option className="sizeOption">hoodies</option>
            <option className="sizeOption">jackets</option>
            <option className="sizeOption">joggers</option>
            <option className="sizeOption">shorts</option>
            <option className="sizeOption">t-shirts</option>
            <option className="sizeOption">jumpers</option>
            <option className="sizeOption">accessories</option>
         </select>
         <select className="itemSize" value={size} onChange={sizeInput}>
            <option value="" disabled selected>select size</option>
            <option className="sizeOption">small</option>
            <option className="sizeOption">medium</option>
            <option className="sizeOption">large</option>
            <option className="sizeOption">extra large</option>
         </select>
         <select className="itemColour" value={colour} onChange={colourInput}>
            <option value="" disabled selected>select colour</option>
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
         <input className="imageUpload" type="file" onChange={image1Input} />
         <input className="imageUpload" type="file" onChange={image2Input} />
         <input className="imageUpload" type="file" onChange={image3Input} />
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