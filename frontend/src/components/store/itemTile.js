import css from './tile.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Tile(props) {

  const navigate = useNavigate(props);
  var img_int = 1

    const shuffle = () => {
      if( img_int == 1 ) {
        img_int = 2
        set_image_class_1(css.image)
        set_image_class_2(css.display_none)
        set_image_class_3(css.display_none)
      }else if( img_int == 2 ) {
        img_int = 3
        set_image_class_2(css.image)
        set_image_class_1(css.display_none)
        set_image_class_3(css.display_none)
      }else {
        img_int = 1
        set_image_class_3(css.image)
        set_image_class_1(css.display_none)
        set_image_class_2(css.display_none)
      }
     setTimeout(shuffle, 3500);
    }

    const [image_class_1, set_image_class_1] = useState(css.display_none)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)

    const [admin_button_toggle, set_admin_button_toggle] = useState(css.display_none)
    const [tile_size_toggle, set_tile_size_toggle] = useState(css.tile)

    const mouseOverTile = event => {
      set_image_class_1(css.display_none)
      set_image_class_2(`${css.image} ${css.image_cursor}`)
      // set_image_class_2(`${css.image} ${css.opacity0} ${css.image_fade_in}`)
    }

    const mouseLeaveTile = event => {
      set_image_class_2(css.display_none)
      set_image_class_1(`${css.image} ${css.image_cursor}`)
      // set_image_class_1(`${css.image} ${css.opacity0} ${css.image_fade_in}`)
    }

    useEffect(() => {
      if( props.mode == "admin" ) {
        set_admin_button_toggle(css.admin_btn_cont)
        set_tile_size_toggle(css.tile_admin)
        shuffle() 
      } else if( props.mode == "store" ) {
        set_image_class_1(css.image)
      }
   }, []);

  const editPopulate = (item) => {
    navigate('/store_admin', {state:{item:item,editSwitch:1,delSwitch:0}})
  }

  const deletePopulate = (item) => {
    navigate('/store_admin', {state:{item:item,editSwitch:0,delSwitch:1}})
  }


  return (
      <div className={tile_size_toggle}>

        <img className={image_class_1} src={props.image1} onClick={()=> { if(props.mode === "store"){
                                                              navigate('/item_preview',{state: {item:props}})}}} 
                                                          onMouseOver={()=> { if(props.mode === "store"){
                                                              mouseOverTile() }}} />
        <img className={image_class_2} src={props.image2} onClick={()=> { if(props.mode === "store"){
                                                              navigate('/item_preview',{state: {item:props}})}}}
                                                          onMouseLeave={()=> { if(props.mode === "store"){
                                                              mouseLeaveTile() }}} />
        <img className={image_class_3} src={props.image3} onClick={()=> { if(props.mode === "store"){
                                                      navigate('/item_preview',{state: {item:props}})}}} />

        <div className={css.detailBox}> 
          <div className={css.title}>{props.title}</div>
          <div className={css.price}>{"£" + props.price}</div>
        </div>
        <div className={admin_button_toggle}>
          <div className={css.deleteTile} onClick={() => deletePopulate(props)}/>
          <div className={css.editTile} onClick={() => editPopulate(props)}/>
        </div>
      </div>
  );
}

