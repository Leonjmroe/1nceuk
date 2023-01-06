import css from './store_admin.module.css';
import { addItem, getItems, editItem, deleteItem  } from './admin_actions.js';
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';


export default function StoreAdmin() {

   const location = useLocation()

   const [addEditDelText, setaddEditDelText] = useState('Add Item')
   const [addEditDelClass, setaddEditDelClass] = useState(css.addItem)

   const [imageUpload1, setImageUpload1] = useState(css.imageUpload1)
   const [newImageUpload1, setNewImageUpload1] = useState(`${css.newImageUpload1} ${css.newImgUploadToggle1}`)
   const [imageUpload2, setImageUpload2] = useState(css.imageUpload2)
   const [newImageUpload2, setNewImageUpload2] = useState(`${css.newImageUpload2} ${css.newImgUploadToggle2}`)
   const [imageUpload3, setImageUpload3] = useState(css.imageUpload3)
   const [newImageUpload3, setNewImageUpload3] = useState(`${css.newImageUpload3} ${css.newImgUploadToggle3}`)

   const [items, setItems] = useState([])

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
   const image1Input = event => { setImage1(URL.createObjectURL(event.target.files[0])) }
   const image2Input = event => { setImage2(URL.createObjectURL(event.target.files[0])) }
   const image3Input = event => { setImage3(URL.createObjectURL(event.target.files[0])) }


   useEffect(() => {
      if (location.state.editSwitch != null) {
         if ( location.state.editSwitch === 1 ) {
            populateFields()
            setaddEditDelText('Edit Item')
            setaddEditDelClass(css.editItem)
         } else if( location.state.delSwitch === 1 ){
            populateFields()
            setaddEditDelText('Delete Item')
            setaddEditDelClass(css.delItem)
         }
         setImageUpload1(`${css.imageUpload1} ${css.imgUploadToggle1}`)
         setNewImageUpload1(css.newImageUpload1)
         setImageUpload2(`${css.imageUpload2} ${css.imgUploadToggle2}`)
         setNewImageUpload2(css.newImageUpload2)
         setImageUpload3(`${css.imageUpload3} ${css.imgUploadToggle3}`)
         setNewImageUpload3(css.newImageUpload3)
      }
  }, [location.state]);


   useEffect(() => {
      pullItems()
      resetFields()
   }, []);


   const pullItems = (x) => {
      getItems(location.state.token).then((data) => {
         setItems(data)
         console.log(data)
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
                image2={image_slice(item.image2)} image3={image_slice(item.image3)} mode="admin" />
      )
   );


   const formSubmit = event => { 
      event.preventDefault();
      if (title && description && price && size && colour && quantity && image1 && image2 && image3) {
         const e = event.target
         const item = new FormData(e)  
         if (addEditDelText === 'Delete Item') {
            deleteItem(item, location.state.item.id) 
         }else if ( addEditDelText === 'Edit Item' ) {
            item.set('title', title)
            item.set('description', description)
            item.set('category', category)
            item.set('price', price)
            item.set('colour', colour)
            item.set('quantity', quantity)
            item.set('size', size)
            const image1_blob_test = image1.slice(0, 5)
            const image2_blob_test = image2.slice(0, 5)
            const image3_blob_test = image3.slice(0, 5)
            if( image1_blob_test !== 'blob:' ){
               console.log(1)
               get_blob(item, image1, 1)
            }
            if( image2_blob_test !== 'blob:' ){
               console.log(2)
               get_blob(item, image2, 2)
            }
            if( image3_blob_test !== 'blob:' ){
               console.log(3)
               get_blob(item, image3, 3)
            } else {
               const run_edit_item = () => {
                  console.log(4)
                  editItem(item, location.state.item.id) 
               }
               setTimeout(run_edit_item, 1000);
            }
         }else {
            addItem(item)
         } 
         resetFields()
      }
   }


   const get_blob = (item, image, id) => {
      const img = document.getElementById('imgCanvas')
      img.src = image
      const canvas = document.createElement('canvas');
      canvas.width = img.clientWidth;
      canvas.height = img.clientHeight;
      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);
      canvas.toBlob(function(blob) {
         if( id === 1 ) {
            item.set('image1', blob, image1)
         }else if( id === 2 ){
            item.set('image2', blob, image2)
         }else {
            item.set('image3', blob, image3)
            editItem(item, location.state.item.id) 
         }
      });   
   }


   const populateFields = () => {
      const item  = location.state.item
      setCategory(item.category) 
      setTitle(item.title) 
      setDescription(item.description)
      setPrice(item.price)
      setSize(item.size)
      setColour(item.colour)
      setQuantity(item.quantity)
      setImage1(item.image1)
      setImage2(item.image2)
      setImage3(item.image3)
   }


   const resetFields = () => {
      console.log()
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
      setaddEditDelText('Add Item')
      setaddEditDelClass(css.addItem)
      setImageUpload1(css.imageUpload1)
      setNewImageUpload1(`${css.newImageUpload1} ${css.newImgUploadToggle1}`)
      setImageUpload2(css.imageUpload2)
      setNewImageUpload2(`${css.newImageUpload2} ${css.newImgUploadToggle2}`)
      setImageUpload3(css.imageUpload3)
      setNewImageUpload3(`${css.newImageUpload3} ${css.newImgUploadToggle3}`)
      $('#ImageBtn1').val('') 
      $('#ImageBtn2').val('')
      $('#ImageBtn3').val('')
      location.state.editSwitch = 0 
      location.state.delSwitch = 0 
   }


   const newUpload1 = event => {
      setNewImageUpload1(`${css.newImageUpload1} ${css.newImgUploadToggle1}`)
      setImageUpload1(css.imageUpload1)
      setImage1('')
   }

   const newUpload2 = event => {
      setNewImageUpload2(`${css.newImageUpload2} ${css.newImgUploadToggle2}`)
      setImageUpload2(css.imageUpload2)
      setImage2('')
   }

   const newUpload3 = event => {
      setNewImageUpload3(`${css.newImageUpload3} ${css.newImgUploadToggle3}`)
      setImageUpload3(css.imageUpload3)
      setImage3('')
      console.log(12)
   }


   const imageSlicer = (img) => {
      const new_img = ('Upload New: ' + img.slice(33,39))
      return new_img
   }


   return (
    <div className={css.storeAdminCont}>
    <img id="imgCanvas"></img>
      <div className={css.addItemCont}>
         <form id="itemForm" onSubmit={formSubmit}>
            <input className={css.itemTitle} placeholder="title" type="text" name="title" value={title} onChange={titleInput} />
            <textarea className={css.itemDescription} placeholder="description" name="description" value={description} onChange={descriptionInput} type="text" />
            <input className={css.itemPrice} type="number" placeholder="price (£)" name="price" value={price} onChange={priceInput} />
            <select className={css.itemCategory} name="category" value={category} onChange={categoryInput}>
               <option>select category</option>
               <option className={css.sizeOption}>hats</option>
               <option className={css.sizeOption}>hoodies</option>
               <option className={css.sizeOption}>jackets</option>
               <option className={css.sizeOption}>joggers</option>
               <option className={css.sizeOption}>shorts</option>
               <option className={css.sizeOption}>t-shirts</option>
               <option className={css.sizeOption}>jumpers</option>
               <option className={css.sizeOption}>accessories</option>
            </select>
            <select className={css.itemSize} name="size" value={size} onChange={sizeInput}>
               <option>select size</option>
               <option className={css.sizeOption}>small</option>
               <option className={css.sizeOption}>medium</option>
               <option className={css.sizeOption}>large</option>
               <option className={css.sizeOption}>extra large</option>
            </select>
            <select className={css.itemColour} name="colour" value={colour} onChange={colourInput}>
               <option>select colour</option>
               <option className={css.sizeOption}>red</option>
               <option className={css.sizeOption}>green</option>
               <option className={css.sizeOption}>dark blue</option>
               <option className={css.sizeOption}>light blue</option>
               <option className={css.sizeOption}>green</option>
               <option className={css.sizeOption}>purple</option>
               <option className={css.sizeOption}>pink</option>
               <option className={css.sizeOption}>grey</option>
               <option className={css.sizeOption}>black</option>
               <option className={css.sizeOption}>orange</option>
               <option className={css.sizeOption}>white</option>
               <option className={css.sizeOption}>brown</option>
               <option className={css.sizeOption}>yellow</option>
               <option className={css.sizeOption}>cream</option>
               <option className={css.sizeOption}>burgundy</option>
               <option className={css.sizeOption}>beige</option>
            </select>
            <input className={css.itemQuantity} type="number" placeholder="quantity" name="quantity" value={quantity} onChange={quantityInput} />
            <input className={imageUpload1} type="file" id="ImageBtn1" name="image1" onChange={image1Input} />
            <input className={imageUpload2} type="file" id="ImageBtn2" name="image2" onChange={image2Input} />
            <input className={imageUpload3} type="file" id="ImageBtn3" name="image3" onChange={image3Input} />
            <input className={newImageUpload1} type="button" id="newImageBtn1" value={imageSlicer(image1)} onClick={newUpload1} />
            <input className={newImageUpload2} type="button" id="newImageBtn2" value={imageSlicer(image2)} onClick={newUpload2} />
            <input className={newImageUpload3} type="button" id="newImageBtn3" value={imageSlicer(image3)} onClick={newUpload3} />
            <button className={addEditDelClass} type="submit">{addEditDelText}</button>
         </form>
      </div>
      <div className={css.editItemCont} onClick={() => resetFields()}>{ createItems }</div>
    </div>
  );
}

