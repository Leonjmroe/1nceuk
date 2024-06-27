import css from './home.module.css';
import { useNavigate } from 'react-router-dom';


export default function Collections() {

  const navigate = useNavigate();

   return (
    <div className={css.collection_container}>

      <div className={css.collection_tile}>
        <div className={`${css.collection_img} ${css.collection_image_1}`} onClick={()=> navigate('/2023')}/>
        <div className={css.collection_text}>2023</div>
      </div>

      <div className={`${css.collection_img} ${css.collection_img_mobile}`}/>

      <div className={`${css.collection_tile_crown} ${css.mobile_order}`}>
        <div className={`${css.collection_img} ${css.collection_image_3}`} onClick={()=> navigate('/login',{switch:0})}/>
      </div>

      <div className={css.collection_tile}>
        <div className={`${css.collection_img} ${css.collection_image_2}`} onClick={()=> navigate('/2024')}/>
        <div className={css.collection_text}>2024</div>
      </div>

    </div>
  );
}
