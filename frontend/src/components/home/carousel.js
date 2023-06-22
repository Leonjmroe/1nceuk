import css from './home.module.css';
import { useState, useEffect } from "react";


export default function Main() {

    const ImagePreloader = ({ imageURL, data_image }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      const img = new Image();
      img.src = imageURL;
      img.onload = () => setIsLoaded(true);
    }, [imageURL]);
    if( data_image == "1" ) {
      return ( <img src={imageURL} className={image_class_1} alt="Preloaded" /> )
    }else if( data_image == "2" ) {
      return ( <img src={imageURL} className={image_class_2} alt="Preloaded" /> )
    }else {
      return ( <img src={imageURL} className={image_class_3} alt="Preloaded" /> )
    }
  }

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
        <ImagePreloader className={image_class_1} data_image="1" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/carousel_img_3.jpg" />
        <ImagePreloader className={image_class_2} data_image="2" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/carousel_img_2.jpg" />
        <ImagePreloader className={image_class_3} data_image="3" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/carousel_img_5.jpeg" />
      </div>
  );

}


