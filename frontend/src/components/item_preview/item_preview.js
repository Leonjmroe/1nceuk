import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SizeSelector from './size_selector.js'


export default function Preview() {

    const navigate = useNavigate()
    const location = useLocation()

    const [image_class_1, set_image_class_1] = useState(css.image)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)
    const [add_basket, set_add_basket] = useState(css.add_to_basket)
    const [size_selection, set_size_selection] = useState()

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

    const add_item = () => {
      console.log([location.state.item, size_selection])
      set_add_basket(css.add_to_basket)
      set_size_selection(null)
    }

    const handle_size_select = (size) => {
      set_add_basket(`${css.add_to_basket} ${css.add_to_basket_select}`)
      set_size_selection(size)
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
              <img className={css.mini_image} src={location.state.item.image1} onClick={()=> { tileClick(1) }} />
              <img className={css.mini_image} src={location.state.item.image2} onClick={()=> { tileClick(2) }} />
              <img className={css.mini_image} src={location.state.item.image3} onClick={()=> { tileClick(3) }} />
            </div>
          </div>
        </div>
        <div className={css.item_control_cont}>
          <div className={css.item_info_cont}>
            <div className={css.title}>{location.state.item.title}</div>
            <div className={css.description}>{location.state.item.description}</div>
            <div className={css.price}>£{location.state.item.price}</div>
            <SizeSelector size_select={handle_size_select} pass_selection={size_selection} />
          </div>
          <div className={css.checkout_cont}>
            <div className={add_basket} onClick={()=> { add_item() }} >Add to Basket</div>
            <div className={css.continue_shopping} onClick={()=> navigate('/store', 
                           {state: {catagory: location.state.item.category}})}>Continue Shopping</div>
          </div>
        </div>
      </div>

      <div className={css.preview_mobile_cont}>
        <div className={css.preview_mobile_header}>
          <div className={css.title_mobile}>{location.state.item.title}</div>
          <div className={css.description_mobile}>{location.state.item.description}</div>
        </div>
        <div className={css.carousel_cont_mobile}>
          <div className={css.carousel_mobile}>
            <img className={image_class_1} src={location.state.item.image1} />
            <img className={image_class_2} src={location.state.item.image2} />
            <img className={image_class_3} src={location.state.item.image3} />
          </div>
        </div>
        <div className={css.mini_image_container_mobile}>
          <div className={css.mini_image_cont_mobile}>
            <img className={css.mini_image_mobile} src={location.state.item.image1} onClick={()=> { tileClick(1) }} />
            <img className={css.mini_image_mobile} src={location.state.item.image2} onClick={()=> { tileClick(2) }} />
            <img className={css.mini_image_mobile} src={location.state.item.image3} onClick={()=> { tileClick(3) }} />
          </div>
        </div>
        <div className={css.preview_mobile_footer}>
            <SizeSelector size_select={handle_size_select} pass_selection={size_selection} />
            <div className={css.price_mobile}>£{location.state.item.price}</div>
            <div className={add_basket} onClick={()=> { add_item() }} >Add to Basket</div>
            <div className={css.continue_shopping}>Continue Shopping</div>
        </div>
      </div>
      
    </div>
  );
}


