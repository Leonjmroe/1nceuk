import css from './tile.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { StateContext } from '../state_management/context.js'


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

    const [state, dispatch] = useContext(StateContext)

    const [image_class_1, set_image_class_1] = useState(css.display_none)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)

    const [admin_button_toggle, set_admin_button_toggle] = useState(css.display_none)
    const [checkout_button_toggle, set_checkout_button_toggle] = useState(css.display_none)
    const [tile_size_toggle, set_tile_size_toggle] = useState(css.tile)

    const mouseOverTile = event => {
      set_image_class_1(css.display_none)
      set_image_class_2(`${css.image} ${css.image_cursor}`)
    }

    const mouseLeaveTile = event => {
      set_image_class_2(css.display_none)
      set_image_class_1(`${css.image} ${css.image_cursor}`)
    }

    useEffect(() => {
      if( props.mode == "admin" ) {
        if( props.inventory == "no" ) {
          set_tile_size_toggle(css.tile_no_inventory)
        }else {
          set_tile_size_toggle(css.tile_admin)
        }
        set_admin_button_toggle(css.admin_btn_cont)
        shuffle() 
      } else if( props.mode == "store" ) {
        set_image_class_1(css.image)
      } else if( props.mode == "checkout" ) {
        set_checkout_button_toggle(css.checkout_del_btn)
        set_image_class_1(css.image)
      }
   }, []);

  const editPopulate = (item) => {
    navigate('/store_admin', {state:{item:item,editSwitch:1,delSwitch:0}})
  }

  const deletePopulate = (item) => {
    navigate('/store_admin', {state:{item:item,editSwitch:0,delSwitch:1}})
  }

  const saveData = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  const removeFromBasket = (item) => {
    for (let i = 0; i < state.count; i++) {
      const items = state.items
      const item_id = items[i].id
      if(item_id == props.id) {
        items.splice(i, 1)
        saveData('basket', items);
        dispatch({ type: 'remove_from_basket', payload: items })
        break
      }
    }
  }

  const title_length_check = (title) => {
      if( title.length > 25 ){
         return css.title_two_lines
      } else {
         return css.title
      }
   }

  return (
      <div className={tile_size_toggle}>

        <img className={image_class_1} src={props.image1} onClick={()=> { if(props.mode === "store"){
                                                              navigate('/item_preview', {state: {item:props} })}}} 
                                                          onMouseOver={()=> { if(props.mode === "store" || 
                                                                                 props.mode === "checkout" ){
                                                              mouseOverTile() }}} />
        <img className={image_class_2} src={props.image2} onClick={()=> { if(props.mode === "store"){
                                                              navigate('/item_preview', {state: {item:props} })}}}
                                                          onMouseLeave={()=> { if(props.mode === "store" || 
                                                                                 props.mode === "checkout" ){
                                                              mouseLeaveTile() }}} />
        <img className={image_class_3} src={props.image3} onClick={()=> { if(props.mode === "store"){
                                                      navigate('/item_preview', {state: {item:props} })}}} />

        <div className={css.detailBox}> 
          <div className={title_length_check(props.title)}>{props.title}</div>
          <div className={css.price}>{"£" + props.price}</div>
        </div>
        <div className={admin_button_toggle}>
          <div className={css.deleteTile} onClick={() => deletePopulate(props)}/>
          <div className={css.editTile} onClick={() => editPopulate(props)}/>
        </div>
        <div className={checkout_button_toggle}>
          <div className={css.checkout_deleteTile} onClick={() => removeFromBasket(props)}/>
        </div>
      </div>
  );
}

