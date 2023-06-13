import css from './home.module.css';
import { useState, useEffect } from "react";


export default function Main() {

    var img_int = 1

    const shuffle = () => {
      if( img_int == 1 ) {
        img_int = 2
        set_image_class_1(`${css.carousel_img_1} ${css.carousel_img_style}`)
        set_image_class_2(css.display_none)
        set_image_class_3(css.display_none)
      }else if( img_int == 2 ) {
        img_int = 3
        set_image_class_2(`${css.carousel_img_2} ${css.carousel_img_style}`)
        set_image_class_1(css.display_none)
        set_image_class_3(css.display_none)
      }else {
        img_int = 1
        set_image_class_3(`${css.carousel_img_3} ${css.carousel_img_style}`)
        set_image_class_1(css.display_none)
        set_image_class_2(css.display_none)
      }
     setTimeout(shuffle, 6000);
    }

    const [image_class_1, set_image_class_1] = useState(css.display_none)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)

    useEffect(() => {
      shuffle() 
   }, []);

      return (
      <div className={css.carousel_cont}>
        <img className={image_class_1} />
        <img className={image_class_2} />
        <img className={image_class_3} />
      </div>
  );

}


