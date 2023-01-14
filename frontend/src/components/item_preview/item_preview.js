import css from './item_preview.module.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


export default function Preview() {

  const location = useLocation();
  var img_int = 1
  
    const shuffle = () => {
      console.log(1)
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

    useEffect(() => {
      shuffle() 
   }, []);

   return (
    <div className={css.preview_container}>
      <div className={css.preview_cont}>
        <div className={css.carousel}>
          <img className={image_class_1} src={location.state.item.image1} />
          <img className={image_class_2} src={location.state.item.image2} />
          <img className={image_class_3} src={location.state.item.image3} />
        </div>
        <div className={css.item_control_cont}>
          <div className={css.item_info_cont}>
            <div className={css.item_info_element}>{location.state.item.title}</div>
            <div className={css.item_info_element}>{location.state.item.description}</div>
            <div className={css.item_info_element}>{location.state.item.price}</div>
          </div>
          <div className={css.checkout_cont}>
            <div className={css.add_to_basket}>Add to Basket</div>
            <div className={css.continue_shopping}>Continue Shopping</div>
          </div>
        </div>
      </div>
    </div>
  );
}


