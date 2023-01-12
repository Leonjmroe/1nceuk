import css from './home.module.css';
import { useNavigate } from 'react-router-dom';


export default function Collections() {

  const navigate = useNavigate();

   return (
    <div className={css.collection_container}>

      <div className={css.collection_tile}>
        <div className={css.dash}>----------------</div>
        <div className={`${css.collection_img} ${css.collection_image_1}`} onClick={()=> navigate('/store')}/>
        <div className={css.collection_text}>2022 Collection</div>
        <div className={css.dash}>----------------</div>
      </div>

      <div className={`${css.collection_tile} ${css.mobile_order}`}>
        <div className={css.shop_now_button} onClick={()=> navigate('/store_selection')}>Shop Now</div>
        <div className={`${css.collection_img} ${css.collection_image_3}`}/>
        <div className={css.logo_login_button} onClick={()=> navigate('/login',{switch:0})}/>
      </div>

      <div className={css.collection_tile}>
        <div className={css.dash}>----------------</div>
        <div className={`${css.collection_img} ${css.collection_image_2}`} onClick={()=> navigate('/store')}/>
        <div className={css.collection_text}>2023 Collection</div>
        <div className={css.dash}>----------------</div>
      </div>

    </div>
  );
}
