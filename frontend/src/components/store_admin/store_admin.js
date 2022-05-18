import './store_admin.css';
import { addItem, getItems, editItem, deleteItem  } from './admin_actions.js';
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useHistory } from 'react';


export default function StoreAdmin() {

   const location = useLocation()

   const [addEditDelText, setaddEditDelText] = useState('Add Item')
   const [addEditDelClass, setaddEditDelClass] = useState('addItem')
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
   const image1Input = event => { setImage1(URL.createObjectURL(event.target.files[0]))}
   const image2Input = event => { setImage2(URL.createObjectURL(event.target.files[0]))}
   const image3Input = event => { setImage3(URL.createObjectURL(event.target.files[0]))}


   useEffect(() => {
      pullItems()
      location.state.editSwitch = 0
      location.state.delSwitch = 0
   }, []);


   useEffect(() => {
      if (location.state.editSwitch != null) {
         if ( location.state.editSwitch === 1 ) {
            populateFields()
            setaddEditDelText('Edit Item')
            setaddEditDelClass('editItem')
         } else if( location.state.delSwitch === 1 ){
            populateFields()
            setaddEditDelText('Delete Item')
            setaddEditDelClass('delItem')
         }
      }
  }, [location.state]);


   const pullItems = (x) => {
      getItems().then((data) => {
         setItems(data)
      })
   }


   const createItems = items.map((item, key) => (
      <ItemTile key={key} title={item.title} description={item.description} price={item.price} category={item.category} 
                size={item.size} colour={item.colour} quantity={item.quantity} image1={item.image1}
                image2={item.image2} image3={item.image3} mode="admin" />
      )
   );



   const formSubmit = event => { 

      if (addEditDelText === 'Delete Item') {
         console.log('Delete')
      }else if ( addEditDelText === 'Edit Item' ) {
         console.log('Edit')
      }else {
         console.log('Add')
         event.preventDefault();
         if (title && description && price && size && colour && quantity && image1 && image2 && image3) {
            const e = event.target
            const item = new FormData(e)     
            console.log(e, image1)         
            addItem(item)  
            resetFields()
         }  
      }
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

      // for (let i = 1; i < 4; i++) {
      //    console.log(i)
      //    fetch(item.image1)
      //   .then(res => res.blob()) 
      //   .then(blob => {
      //       setImage1(blob)
      // });
      // }

      // console.log((item.image1).blob())

      // fetch(item.image1)
      //   .then(res => res.blob()) 
      //   .then(blob => {
      //       setImage1(blob)
      //    })

      const config = {
         headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         }
      };

//       fetch(item.image1, config)
//          .then(res => res.blob()) // Gets the response and returns it as a blob
//          .then(blob => {
//     // Here's where you get access to the blob
//     // And you can use it for whatever you want
//     // Like calling ref().put(blob)

//     // Here, I use it to make an image appear on the page
//     let objectURL = URL.createObjectURL(blob);
//     let myImage = new Image();
//     myImage.src = objectURL;
//     document.getElementsByClassName('imageUpload')
//     image_files[0].file = myImage
//     console.log(image_files)
// });


      const image_files = document.getElementsByClassName('imageUpload')
      image_files[0].file = item.image1
      image_files[1].file = item.image2
      image_files[2].file = item.image3
      // image_files[0].value = URL.createObjectURL(item.image1)
      // console.log(image_files)
   }



   const resetFields = () => {
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
      setaddEditDelClass('addItem')
      location.state.editSwitch = 0 
      location.state.delSwitch = 0 
   }

   return (
    <div className="storeAdminCont">
      <div className="addItemCont">
         <form id="itemForm" onSubmit={formSubmit}>
            <input className="itemTitle" placeholder="title" type="text" name="title" value={title} onChange={titleInput} />
            <textarea className="itemDescription" placeholder="description" name="description" value={description} onChange={descriptionInput} type="text" />
            <input className="itemPrice" type="number" placeholder="price (£)" name="price" value={price} onChange={priceInput} />
            <select className="itemCategory" name="category" value={category} onChange={categoryInput}>
               <option>select category</option>
               <option className="sizeOption">hats</option>
               <option className="sizeOption">hoodies</option>
               <option className="sizeOption">jackets</option>
               <option className="sizeOption">joggers</option>
               <option className="sizeOption">shorts</option>
               <option className="sizeOption">t-shirts</option>
               <option className="sizeOption">jumpers</option>
               <option className="sizeOption">accessories</option>
            </select>
            <select className="itemSize" name="size" value={size} onChange={sizeInput}>
               <option>select size</option>
               <option className="sizeOption">small</option>
               <option className="sizeOption">medium</option>
               <option className="sizeOption">large</option>
               <option className="sizeOption">extra large</option>
            </select>
            <select className="itemColour" name="colour" value={colour} onChange={colourInput}>
               <option>select colour</option>
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
            <input className="itemQuantity" type="number" placeholder="quantity" name="quantity" value={quantity} onChange={quantityInput} />
            <input className="imageUpload" type="file" name="image1" onChange={image1Input} />
            <input className="imageUpload" type="file" name="image2" onChange={image2Input} />
            <input className="imageUpload" type="file" name="image3" onChange={image3Input} />
            <button className={addEditDelClass} type="submit">{addEditDelText}</button>
         </form>
      </div>
      <div className="editItemCont" onClick={() => resetFields()}>{ createItems }</div>
    </div>
  );
}
