import css from './store_admin.module.css';
import { addItem, getItems, editItem, deleteItem  } from './admin_actions.js';
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from "axios";


export default function StoreAdmin() {

   const location = useLocation()

   const [addEditDelText, setaddEditDelText] = useState('Add Item')
   const [addEditDelClass, setaddEditDelClass] = useState(css.addItem)
   const [items, setItems] = useState([])
   const [copied_email_list, set_copied_email_list] = useState(css.opacity_0)

   const [imageUpload1, setImageUpload1] = useState(css.imageUpload1)
   const [newImageUpload1, setNewImageUpload1] = useState(`${css.newImageUpload1} ${css.newImgUploadToggle1}`)
   const [imageUpload2, setImageUpload2] = useState(css.imageUpload2)
   const [newImageUpload2, setNewImageUpload2] = useState(`${css.newImageUpload2} ${css.newImgUploadToggle2}`)
   const [imageUpload3, setImageUpload3] = useState(css.imageUpload3)
   const [newImageUpload3, setNewImageUpload3] = useState(`${css.newImageUpload3} ${css.newImgUploadToggle3}`)

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [price, setPrice] = useState('')
   const [category, setCategory] = useState('')
   const [colour, setColour] = useState('')
   const [label, setLabel] = useState('')
   const [sale, setSale] = useState('')
   const [image1, setImage1] = useState('')
   const [image2, setImage2] = useState('')
   const [image3, setImage3] = useState('')
   const [qty_small, set_qty_small] = useState('')
   const [qty_medium, set_qty_medium] = useState('')
   const [qty_large, set_qty_large] = useState('')
   const [qty_extra_large, set_qty_extra_large] = useState('')
   const [featured_checked, setFeaturedChecked] = useState(false)

   const titleInput = event => { setTitle(event.target.value) }
   const descriptionInput = event => { setDescription(event.target.value) }
   const priceInput = event => { setPrice(event.target.value) }
   const categoryInput = event => { setCategory(event.target.value) }
   const colourInput = event => { setColour(event.target.value) }
   const labelInput = event => { setLabel(event.target.value) }
   const saleInput = event => { setSale(event.target.value) }
   const image1Input = event => { setImage1(URL.createObjectURL(event.target.files[0])) }
   const image2Input = event => { setImage2(URL.createObjectURL(event.target.files[0])) }
   const image3Input = event => { setImage3(URL.createObjectURL(event.target.files[0])) }
   const qtySmallInput = event => { set_qty_small(event.target.value) }
   const qtyMediumInput = event => { set_qty_medium(event.target.value) }
   const qtyLargeInput = event => { set_qty_large(event.target.value) }
   const qtyExtraLargeInput = event => { set_qty_extra_large(event.target.value) }
   const featuredChangeInput = event => { setFeaturedChecked(event.target.checked) }


   useEffect(() => {
      if (location.state.editSwitch != null) {
         const imageUploadUpdate = () => {
            setImageUpload1(`${css.imageUpload1} ${css.imgUploadToggle1}`)
            setNewImageUpload1(css.newImageUpload1)
            setImageUpload2(`${css.imageUpload2} ${css.imgUploadToggle2}`)
            setNewImageUpload2(css.newImageUpload2)
            setImageUpload3(`${css.imageUpload3} ${css.imgUploadToggle3}`)
            setNewImageUpload3(css.newImageUpload3)
         }
         if ( location.state.editSwitch === 1 ) {
            populateFields()
            setaddEditDelText('Edit Item')
            setaddEditDelClass(css.editItem)
            imageUploadUpdate()
         } else if( location.state.delSwitch === 1 ){
            populateFields()
            setaddEditDelText('Delete Item')
            setaddEditDelClass(css.delItem)
            imageUploadUpdate()
         }
      }
  }, [location.state]);


   useEffect(() => {
      pullItems()
      resetFields()
   }, []);


   const pullItems = (x) => {
      getItems(location.state.token).then((data) => {
         setItems(data)
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
           sale={item.sale}
           label={item.label}
           image1={item.image1}
           image2={item.image2}
           image3={item.image3}
           qty_small={item.qty_small}
           qty_medium={item.qty_medium}
           qty_large={item.qty_large}
           qty_extra_large={item.qty_extra_large}
           featured_checked={item.featured_checked}
           mode="admin"
           inventory="yes"
         />
       );
     } else {
       return (
         <ItemTile
           key={item.id}
           id={item.id}
           title={item.title}
           description={item.description}
           price={item.price}
           category={item.category}
           colour={item.colour}
           sale={item.sale}
           label={item.label}
           image1={item.image1}
           image2={item.image2}
           image3={item.image3}
           qty_small={0}
           qty_medium={0}
           qty_large={0}
           qty_extra_large={0}
           featured_checked={item.featured_checked}
           mode="admin"
           inventory="no"
         />
      )
     }
   });



   const formSubmit = event => { 
      event.preventDefault();
      if (title && description && price && colour && image1 && image2 && image3) {
         const e = event.target
         const item = new FormData(e)  
         if (addEditDelText === 'Delete Item') {
            deleteItem(location.state.item.id, 1) 
         }else if ( addEditDelText === 'Edit Item' ) {
            item.set('title', title)
            item.set('description', description)
            item.set('category', category)
            item.set('price', price)
            item.set('label', label)
            item.set('sale', sale)
            item.set('colour', colour)
            item.set('qty_small', qty_small)
            item.set('qty_medium', qty_medium)
            item.set('qty_large', qty_large)
            item.set('qty_extra_large', qty_extra_large)
            item.set('featured_checked', featured_checked)
            const image1_blob_test = image1.slice(0, 5)
            const image2_blob_test = image2.slice(0, 5)
            const image3_blob_test = image3.slice(0, 5)
            if( image1_blob_test !== 'blob:' ){
               get_blob(item, image1, 1)
            }
            if( image2_blob_test !== 'blob:' ){
               get_blob(item, image2, 2)
            }
            if( image3_blob_test !== 'blob:' ){
               get_blob(item, image3, 3)
            } else {
               const run_edit_item = () => {
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
      fetch(image)
         .then(function(response) {
            return response.blob()
         })
     .then(function(blob) {
         if( id === 1 ) {
            item.set('image1', blob, image)
         }else if( id === 2 ){
            item.set('image2', blob, image)
         }else {
            item.set('image3', blob, image)
            const run_edit_item = () => {
               editItem(item, location.state.item.id) 
            }
            setTimeout(run_edit_item, 1000);
         };
      });
   };


   const populateFields = () => {
      const item  = location.state.item
      setCategory(item.category) 
      setTitle(item.title) 
      setDescription(item.description)
      setPrice(item.price)
      setColour(item.colour)
      setLabel(item.label)
      setSale(item.sale)
      setImage1(item.image1)
      setImage2(item.image2)
      setImage3(item.image3)
      set_qty_small(item.qty_small)
      set_qty_medium(item.qty_medium)
      set_qty_large(item.qty_large)
      set_qty_extra_large(item.qty_extra_large)
      setFeaturedChecked(item.featured_checked)
   }


   const resetFields = () => {
      setCategory('') 
      setTitle('') 
      setDescription('')
      setPrice('')
      setColour('')
      setLabel('')
      setSale('')
      setImage1('')
      setImage2('')
      setImage3('')
      set_qty_small('')
      set_qty_medium('')
      set_qty_large('')
      set_qty_extra_large('')
      setFeaturedChecked(false)
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
   }

   const get_email_list = async () => {
      await axios.get('/api/payment/distribution-list-email-save/')
        .then((response) => {
         handle_email_list(response.data)
        })
        .catch((error) => {
          console.error(error);
      })
   }

   const handle_email_list = (email_list) => {
      const list = []
      email_list.map((email) => {
         list.push(email.email)
      })
      const unique_list = [...new Set(list)];
      let email_string_list = ''
      const email_list_string = unique_list.map((email) => { 
         if( unique_list.indexOf(email) === 0 ){
            email_string_list = email
         }else {
            email_string_list = email_string_list + ', ' + email
         }
      })
      navigator.clipboard.writeText(email_string_list)
      set_copied_email_list(css.clipboard_copied)
   }

   return (
    <div className={css.store_admin_container}>
    <div className={css.store_admin_cont}>
       <img id="img_canvas"></img>
       <canvas id="canvas"></canvas>
         <div className={css.add_item_cont}>
            <form className={css.item_form} id="itemForm" onSubmit={formSubmit}>
               <input className={css.itemTitle} placeholder="title" type="text" name="title" maxLength="50" value={title} onChange={titleInput} />
               <textarea className={css.itemDescription} placeholder="description" maxLength="300" name="description" value={description} onChange={descriptionInput} type="text" />
               <input className={css.itemPrice} type="number" placeholder="price (£)" name="price" min="0" max="10000" value={price} onChange={priceInput} />
               <input className={css.itemSale} type="number" placeholder="sale (%)" name="sale" min="0" max="99" value={sale} onChange={saleInput} />
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
               <select className={css.itemLabel} name="label" value={label} onChange={labelInput}>
                  <option>select label</option>
                  <option className={css.sizeOption}>No Label</option>
                  <option className={css.sizeOption}>2022 Collection</option>
                  <option className={css.sizeOption}>2023 Collection</option>
               </select>
               <div className={css.featured_item_cont}>
                  <div className={css.featured_item_text}>Featured Item</div>
                  <input className={css.featured_checkbox} type="checkbox" name="featured_checked" checked={featured_checked} onChange={featuredChangeInput} />
               </div>
               <div className={css.size_qty_cont}>
                  <div className={css.size_qty_inner_cont}>
                     <div className={css.size_text}>S</div>
                     <div className={css.size_text}>M</div>
                     <div className={css.size_text}>L</div>
                     <div className={css.size_text}>XL</div>
                  </div>
                  <div className={css.size_qty_inner_cont}>
                     <input className={css.qty_field} type="number" placeholder="qty" name="qty_small" value={qty_small} onChange={qtySmallInput} />
                     <input className={css.qty_field} type="number" placeholder="qty" name="qty_medium" value={qty_medium} onChange={qtyMediumInput} />
                     <input className={css.qty_field} type="number" placeholder="qty" name="qty_large" value={qty_large} onChange={qtyLargeInput} />
                     <input className={css.qty_field} type="number" placeholder="qty" name="qty_extra_large" value={qty_extra_large} onChange={qtyExtraLargeInput} />
                  </div>
               </div>
               <input className={imageUpload1} type="file" name="image1" onChange={image1Input} />
               <input className={imageUpload2} type="file" name="image2" onChange={image2Input} />
               <input className={imageUpload3} type="file" name="image3" onChange={image3Input} />
               <input className={newImageUpload1} type="button" value={image1} onClick={newUpload1} />
               <input className={newImageUpload2} type="button" value={image2} onClick={newUpload2} />
               <input className={newImageUpload3} type="button" value={image3} onClick={newUpload3} />
               <button className={addEditDelClass} type="submit">{addEditDelText}</button>
            </form>
         </div>
         <div className={css.edit_item_cont} onClick={() => resetFields()}>{ createItems }</div>
      </div>
      <div className={css.store_admin_controls_cont}>
         <div className={css.get_email_distribution_list} onClick={get_email_list}>Get Email List</div>
         <div className={copied_email_list}>Succesfully copied email list</div>
      </div>
    </div>
  );
}

