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
    }else if( data_image == "3" ) {
      return ( <img src={imageURL} className={image_class_3} alt="Preloaded" /> )
    }else if( data_image == "4" ) {
      return ( <img src={imageURL} className={image_class_4} alt="Preloaded" /> )
    }else if( data_image == "5" ) {
      return ( <img src={imageURL} className={image_class_5} alt="Preloaded" /> )
    }else if( data_image == "6" ) {
      return ( <img src={imageURL} className={image_class_6} alt="Preloaded" /> )
    }else if( data_image == "7" ) {
      return ( <img src={imageURL} className={image_class_7} alt="Preloaded" /> )
    }
  }

    var img_int = 1

    const shuffle = () => {
      if( img_int == 1 ) {
        img_int = 2
        display_none()
        set_image_class_1(`${css.carousel_img_1} ${css.carousel_img_style}`)
      }else if( img_int == 2 ) {
        img_int = 3
        display_none()
        set_image_class_2(`${css.carousel_img_2} ${css.carousel_img_style}`)
      }else if( img_int == 3 ) {
        img_int = 4
        display_none()
        set_image_class_3(`${css.carousel_img_3} ${css.carousel_img_style}`)
      }else if( img_int == 4 ) {
        img_int = 5
        display_none()
        set_image_class_4(`${css.carousel_img_4} ${css.carousel_img_style}`)
      }else if( img_int == 5 ) {
        img_int = 6
        display_none()
        set_image_class_5(`${css.carousel_img_5} ${css.carousel_img_style}`)
      }else if( img_int == 6 ) {
        img_int = 7
        display_none()
        set_image_class_6(`${css.carousel_img_6} ${css.carousel_img_style}`)
      }else if( img_int == 7 ) {
        img_int = 1
        display_none()
        set_image_class_7(`${css.carousel_img_7} ${css.carousel_img_style}`)
      }
     setTimeout(shuffle, 4000);
    }

    const display_none = () => {
      set_image_class_1(css.display_none)
      set_image_class_2(css.display_none)
      set_image_class_3(css.display_none)
      set_image_class_4(css.display_none)
      set_image_class_5(css.display_none)
      set_image_class_6(css.display_none)
      set_image_class_7(css.display_none)
    }

    const [image_class_1, set_image_class_1] = useState(css.display_none)
    const [image_class_2, set_image_class_2] = useState(css.display_none)
    const [image_class_3, set_image_class_3] = useState(css.display_none)
    const [image_class_4, set_image_class_4] = useState(css.display_none)
    const [image_class_5, set_image_class_5] = useState(css.display_none)
    const [image_class_6, set_image_class_6] = useState(css.display_none)
    const [image_class_7, set_image_class_7] = useState(css.display_none)

    useEffect(() => {
      shuffle() 
   }, []);

      return (
      <div className={css.carousel_cont}>
        <ImagePreloader className={image_class_1} data_image="1" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_1.jpeg" />
        <ImagePreloader className={image_class_2} data_image="2" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_2.jpeg" />
        <ImagePreloader className={image_class_3} data_image="3" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_3.jpeg" />
        <ImagePreloader className={image_class_4} data_image="4" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_4.jpeg" />
        <ImagePreloader className={image_class_5} data_image="5" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_5.jpeg" />
        <ImagePreloader className={image_class_6} data_image="6" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_6.jpeg" />
        <ImagePreloader className={image_class_7} data_image="7" imageURL="https://d3plr6xnj3tfvw.cloudfront.net/Core/new_carousel_7.jpeg" />
      </div>
  );

}


