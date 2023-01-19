import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export default function Preview() {

    const location = useLocation()
    const navigate = useNavigate()

    const [image_class_1, set_image_class_1] = useState(css.image)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)

    const [size_small, set_size_small] = useState(css.size_element)
    const [size_medium, set_size_medium] = useState(css.size_element)
    const [size_large, set_size_large] = useState(css.size_element)
    const [size_extra_large, set_size_extra_large] = useState(css.size_element)

    useEffect(() => {
      stock_check()
   }, []);

    const stock_check = () => {
      if(location.state.item.qty_small == 0) {
        set_size_small(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_small(css.size_element)
      }
      if(location.state.item.qty_medium == 0) {
        set_size_medium(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_medium(css.size_element)
      }
      if(location.state.item.qty_large == 0) {
        set_size_large(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_large(css.size_element)
      }
      if(location.state.item.qty_extra_large == 0) {
        set_size_extra_large(`${css.size_element} ${css.no_stock}`)
      }else {
        set_size_extra_large(css.size_element)
      }
    }

    const tileClick = (img) => {
      if (img == 1) {
        set_image_class_1(css.image)
        set_image_class_2(css.display_none)
        set_image_class_3(css.display_none)

      } else if(img == 2) {
        set_image_class_2(css.image)
        set_image_class_1(css.display_none)
        set_image_class_3(css.display_none)
      }else {
        set_image_class_3(css.image)
        set_image_class_2(css.display_none)
        set_image_class_1(css.display_none)
      }
    }

    const size_select = (size, qty) => {
      if(size == "S" && qty != 0) {
        stock_check()
        set_size_small(`${css.size_element} ${css.size_select}`)
      }else if(size == "M" && qty != 0) {
        stock_check()
        set_size_medium(`${css.size_element} ${css.size_select}`)
      }else if(size == "L" && qty != 0) {
        stock_check()
        set_size_large(`${css.size_element} ${css.size_select}`)
      }else if (size == "XL" && qty != 0){
        stock_check()
        set_size_extra_large(`${css.size_element} ${css.size_select}`)
      }
    } 

   return (
    <div className={css.preview_container}>
      <div className={css.preview_cont}>
        <div className={css.image_cont}>
          <div className={css.carousel}>
            <img className={image_class_1} src={location.state.item.image1} />
            <img className={image_class_2} src={location.state.item.image2} />
            <img className={image_class_3} src={location.state.item.image3} />
          </div>
          <div className={css.mini_image_container}>
            <div className={css.mini_image_cont}>
              <img className={css.mini_image} src={location.state.item.image1} 
                                              onClick={()=> { tileClick(1) }} />
              <img className={css.mini_image} src={location.state.item.image2}
                                              onClick={()=> { tileClick(2) }} />
              <img className={css.mini_image} src={location.state.item.image3}
                                              onClick={()=> { tileClick(3) }} />
            </div>
          </div>
        </div>
        <div className={css.item_control_cont}>
          <div className={css.item_info_cont}>
            <div className={css.title}>{location.state.item.title}</div>
            <div className={css.description}>{location.state.item.description}</div>
            <div className={css.price}>£{location.state.item.price}</div>
            <div className={css.size_cont}>
              <div className={css.size_element_cont}>
                <div className={size_small} onClick={() => { size_select('S', location.state.item.qty_small)
                                                                  }}>S</div>
              </div>   
              <div className={css.size_element_cont}>                                            
                <div className={size_medium} onClick={() => { size_select('M', location.state.item.qty_medium) 
                                                                  }}>M</div>
              </div>     
              <div className={css.size_element_cont}>                                             
                <div className={size_large} onClick={() => { size_select('L', location.state.item.qty_large) 
                                                                  }}>L</div>
              </div>    
              <div className={css.size_element_cont}>                                               
                <div className={size_extra_large} onClick={() => { size_select('XL', location.state.item.qty_extra_large)
                                                                  }}>XL</div>
              </div>                                                  
            </div>
          </div>
          <div className={css.checkout_cont}>
            <div className={css.add_to_basket}>Add to Basket</div>
            <div className={css.continue_shopping} onClick={()=> navigate('/store', 
                           {state: {catagory: location.state.item.catagory}})}>Continue Shopping</div>
          </div>
        </div>
      </div>
      <div className={css.preview_mobile_cont}>
        <div className={css.preview_mobile_header}>
          <div className={css.item_info_element}>Title: {location.state.item.title}</div>
          <div className={css.item_info_element}>Description: {location.state.item.description}</div>
          <div className={css.item_info_element}>Price: {location.state.item.price}</div>
          <div className={css.item_info_element}>category: {location.state.item.category}</div>
        </div>
        <div className={css.carousel_mobile}>
          <img className={image_class_1} src={location.state.item.image1} />
          <img className={image_class_2} src={location.state.item.image2} />
          <img className={image_class_3} src={location.state.item.image3} />
        </div>
        <div className={css.preview_mobile_footer}>
          <div className={css.item_info_element}>colour: {location.state.item.colour}</div>
          <div className={css.item_info_element}>Small: {location.state.item.qty_small}</div>
          <div className={css.item_info_element}>Medium: {location.state.item.qty_medium}</div>
          <div className={css.item_info_element}>Large: {location.state.item.qty_large}</div>
          <div className={css.item_info_element}>Extra Large: {location.state.item.qty_extra_large}</div>
        </div>
        <div className={css.checkout_mobile_cont}>
          <div className={css.add_to_basket}>Add to Basket</div>
          <div className={css.continue_shopping}>Continue Shopping</div>
        </div>
      </div>
    </div>
  );
}


