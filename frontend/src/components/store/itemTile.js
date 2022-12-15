import './tile.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Tile(props) {

  const navigate = useNavigate(props);
  var img_int = 1

    const shuffle = () => {
      if( img_int == 1 ) {
        img_int = 2
        console.log(1)
        set_image_class_1('image')
        set_image_class_2('display_none')
        set_image_class_3('display_none')
      }else if( img_int == 2 ) {
        img_int = 3
        console.log(2)
        set_image_class_2('image')
        set_image_class_1('display_none')
        set_image_class_3('display_none')
      }else {
        img_int = 1
        console.log(3)
        set_image_class_3('image')
        set_image_class_1('display_none')
        set_image_class_2('display_none')
      }
     setTimeout(shuffle, 2500);
    }

    const [image_class_1, set_image_class_1] = useState('display_none')
    const [image_class_2, set_image_class_2] = useState('display_none')
    const [image_class_3, set_image_class_3] = useState('display_none')

    useEffect(() => {
      shuffle() 
   }, []);


  const editPopulate = (item) => {
    navigate('/store_admin', {state:{item:item,editSwitch:1,delSwitch:0}})
  }

  const deletePopulate = (item) => {
    navigate('/store_admin', {state:{item:item,editSwitch:0,delSwitch:1}})
  }


  return (
      <div className="tile">

        <img className={image_class_1} src={props.image1} onClick={()=> { if(props.mode === "live"){
                                                      navigate('/item_preview',{state:{id:props.datakey}})}}} />
        <img className={image_class_2} src={props.image2} onClick={()=> { if(props.mode === "live"){
                                                      navigate('/item_preview',{state:{id:props.datakey}})}}} />
        <img className={image_class_3} src={props.image3} onClick={()=> { if(props.mode === "live"){
                                                      navigate('/item_preview',{state:{id:props.datakey}})}}} />

        <div className="detailBox"> 
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          <div className="price">{props.price}</div>
          <div className="category">{props.category}</div>
          <div className="size">{props.size}</div>
          <div className="colour">{props.colour}</div>
          <div className="quantity">{props.price}</div>
        </div>
        <div className="adminButtonCont">
          <div className="deleteTile" onClick={() => deletePopulate(props)}/>
          <div className="editTile" onClick={() => editPopulate(props)}/>
        </div>
      </div>
  );
}

