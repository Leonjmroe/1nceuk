import './store_admin.css';
import { addItem, getItems, editItem, deleteItem  } from './admin_actions.js';
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useHistory } from 'react';
import $ from 'jquery';


export default function StoreAdmin() {

   const location = useLocation()

   const [addEditDelText, setaddEditDelText] = useState('Add Item')
   const [addEditDelClass, setaddEditDelClass] = useState('addItem')

   const [imageUpload1, seImageUpload1] = useState('imageUpload1')
   const [newImageUpload1, setNewImageUpload1] = useState('newImageUpload1 newImgUploadToggle1')
   const [imageUpload2, seImageUpload2] = useState('imageUpload2')
   const [newImageUpload2, setNewImageUpload2] = useState('newImageUpload2 newImgUploadToggle2')
   const [imageUpload3, seImageUpload3] = useState('imageUpload3')
   const [newImageUpload3, setNewImageUpload3] = useState('newImageUpload3 newImgUploadToggle3')

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
            setaddEditDelClass('editItem')
         } else if( location.state.delSwitch === 1 ){
            populateFields()
            setaddEditDelText('Delete Item')
            setaddEditDelClass('delItem')
         }
         seImageUpload1('imageUpload1 imgUploadToggle1')
         setNewImageUpload1('newImageUpload1')
         seImageUpload2('imageUpload2 imgUploadToggle2')
         setNewImageUpload2('newImageUpload2')
         seImageUpload3('imageUpload3 imgUploadToggle3')
         setNewImageUpload3('newImageUpload3')
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



   const createItems = items.map((item) => (
      <ItemTile key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} category={item.category} 
                size={item.size} colour={item.colour} quantity={item.quantity} image1={item.image1}
                image2={item.image2} image3={item.image3} mode="admin" />
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
            // item.set('image1', imgFileConvert(image1))
            // item.set('image2', imgFileConvert(image2))
            // item.set('image3', imgFileConvert(image3))
            editItem(item, location.state.item.id) 
         }else {
            addItem(item)
         } 
         resetFields()
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
      setImage1(item.image1)
      setImage2(item.image2)
      setImage3(item.image3)
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
      seImageUpload1('imageUpload1')
      setNewImageUpload1('newImageUpload1 newImgUploadToggle1')
      seImageUpload2('imageUpload2')
      setNewImageUpload2('newImageUpload2 newImgUploadToggle2')
      seImageUpload3('imageUpload3')
      setNewImageUpload3('newImageUpload3 newImgUploadToggle3')
      $('#ImageBtn1').val('') 
      $('#ImageBtn2').val('')
      $('#ImageBtn3').val('')
      location.state.editSwitch = 0 
      location.state.delSwitch = 0 
   }


   const newUpload1 = event => {
      setNewImageUpload1('newImageUpload1 newImgUploadToggle1')
      seImageUpload1('imageUpload1')
      setImage1('')
   }

   const newUpload2 = event => {
      setNewImageUpload2('newImageUpload2 newImgUploadToggle2')
      seImageUpload2('imageUpload2')
      setImage2('')
   }

   const newUpload3 = event => {
      setNewImageUpload3('newImageUpload3 newImgUploadToggle3')
      seImageUpload3('imageUpload3')
      setImage3('')
   }


   const imageSlicer = (img) => {
      const new_img = ('Upload New: ' + img.slice(33,39))
      return new_img
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
            <input className={imageUpload1} type="file" id="ImageBtn1" name="image1" onChange={image1Input} />
            <input className={imageUpload2} type="file" id="ImageBtn2" name="image2" onChange={image2Input} />
            <input className={imageUpload3} type="file" id="ImageBtn3" name="image3" onChange={image3Input} />
            <input className={newImageUpload1} type="button" id="newImageBtn1" value={imageSlicer(image1)} onClick={newUpload1} />
            <input className={newImageUpload2} type="button" id="newImageBtn2" value={imageSlicer(image2)} onClick={newUpload2} />
            <input className={newImageUpload3} type="button" id="newImageBtn3" value={imageSlicer(image3)} onClick={newUpload3} />
            <button className={addEditDelClass} type="submit">{addEditDelText}</button>
         </form>
      </div>
      <div className="editItemCont" onClick={() => resetFields()}>{ createItems }</div>
    </div>
  );
}




// ------------------ Auto edit image system ------------------


//    const newUpload1 = event => {
//       setNewImageUpload1('newImageUpload1 newImgUploadToggle1')
//       seImageUpload1('imageUpload1')
//       setImage1('')
//    }

//    const newUpload2 = event => {
//       setNewImageUpload2('newImageUpload2 newImgUploadToggle2')
//       seImageUpload2('imageUpload2')
//       setImage2('')
//    }

//    const newUpload3 = event => {
//       setNewImageUpload3('newImageUpload3 newImgUploadToggle3')
//       seImageUpload3('imageUpload3')
//       setImage3('')
//    }


//    const imageSlicer = (img) => {
//       const new_img = ('Upload New: ' + img.slice(33,39))
//       return new_img
//    }



//    const imgFileConvert = (img) => {


// //    function toDataUri(img, scalar = 1) {
// //      const canvas = document.createElement('canvas');
// //      canvas.width = img.width * scalar;
// //      canvas.height = img.height * scalar;
// //      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
// //      return canvas.toDataURL('image/png');
// // }
 
// //       const img = new Image();
// //       img.crossOrigin = 'undefined';
// //       img.addEventListener('load', () => {
// //         const thumb = new Image();
// //         // use the data URI as the source
// //         thumb.src = toDataUri(img, .3);
// //         console.log(thumb.src)
// //         document.body.appendChild(thumb);
// //       });

// // //       img.src = image

// //    return toDataUri(img)


//       // const canvas = document.createElement('canvas');
//       // const image = document.createElement('image');
//       // image.src = img
//       // canvas.width = image.width;
//       // canvas.height = image.height;
//       // canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
//       // return canvas.toDataURL('image/png');


//       function getDataUrl(image) {
//    // Create canvas
//          const canvas = document.createElement('canvas');
//          const ctx = canvas.getContext('2d');
//          // Set width and height
//          canvas.width = image.width;
//          canvas.height = image.height;
//          // Draw the image
//          ctx.drawImage(image, 0, 0);
//          return canvas.toDataURL('image/jpeg');
// }

// //JS Image object for the user's profile picture.
// var image = new Image();

// //Set the crossOrigin attribute to anonymous.
// image.crossOrigin = 'anonymous';

// //Get the user's image and set it as the src attribute.
// image.src = img

// // Select the image
// // const image = document.getElementById('canvas_image');
// image.onload = function(){
//    // console.log(event.currentTarget)
//    const dataUrl = getDataUrl(image);
//    console.log(dataUrl);
// };


//       // const dataURI = canvasToURI(img)


//       // var byteString = atob(dataURI.split(',')[1]);
//       // // console.log(byteString)
//       // var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//       // // console.log(mimeString)
//       // var ab = new ArrayBuffer(byteString.length);
//       // // console.log(ab)
//       // var ia = new Uint8Array(ab);
//       // // console.log(ia)
//       // for (var i = 0; i < byteString.length; i++) {
//       // ia[i] = byteString.charCodeAt(i);
//       // }
//       // // console.log(ia[i])

//       // const blob = new Blob([ab], {type: mimeString});
//       // // console.log(blob)
//       // const imageFile = new File([ab], img, {type: blob.type})
//       // // console.log(imageFile)

//       // return imageFile
   


//      //  const canvas = document.createElement("canvas");
//      //  const image = document.createElement('canvasImg')
//      //  const ctx = canvas.getContext("2d");
//      //  canvas.width = 100;
//      //  canvas.height = 100;
//      //  canvas.crossOrigin = "anonymous"
//      //  ctx.crossOrigin = "anonymous"

//      //  image.src = img

//      //  image.onload = function(){
//      //   ctx.drawImage(image, 100, 100);
//      //   const dataURL1 = canvas.toDataURL('image/png');
//      //   const dataURL2 = image.toDataURL('image/png');
//      //   console.log(dataURL1, dataURL2)
//      // }


//       // const blob = dataURItoBlob(dataURL)
//       // const binary = dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
//       // const imageFile = new File([dataURL], 'imgTest.png', {type: blob.type})

//       // // const blob2 = canvas.toBlob(function(blob) {
//       // //    console.log(blob)
//       // // })

//       // // console.log(blob2)
//       // console.log(image)
//       // console.log(dataURL)
//       // console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""))

//       // return imageFile

//    }

