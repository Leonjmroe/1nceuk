import css from './home.module.css';
import { useNavigate } from 'react-router-dom';


export default function ShopNow() {

  const navigate = useNavigate();

   return (
    <div className={css.shopNowCont}>
      <div className={css.smallCont}>
        <div className={css.smallBox}>
          <div className={css.titleDash}>------------</div>
        </div>
        <div className={css.smallBox}>
          <div className={css.shopTitle} onClick={()=> navigate('/store_selection')}>Shop Now</div>
        </div>
        <div className={css.smallBox}>
          <div className={css.titleDash}>------------</div>
        </div>
      </div>


      <div className={css.collection_cont}>

        <div className={css.collection_box}>
          <div className={`${css.collection_img} ${css.collection_image_1}`} onClick={()=> navigate('/store')}/>
          <div className={css.collection_text}>2022 Collection</div>
        </div>
        <div className={css.collection_box}>
          <div className={`${css.collection_img} ${css.collection_image_3}`}/>
        </div>
        <div className={css.collection_box}>
          <div className={`${css.collection_img} ${css.collection_image_2}`} onClick={()=> navigate('/store')}/>
          <div className={css.collection_text}>2023 Collection</div>
        </div>

      <div className={css.smallCont}>
        <div className={css.smallBox}>
          <div className={css.titleDash}>------------</div>
        </div>
        <div className={css.smallBox}>
          <div className={css.crown} onClick={()=> navigate('/login',{switch:0})}/>
        </div>
        <div className={css.smallBox}>
          <div className={css.titleDash}>------------</div>
        </div>
      </div>

    </div>
    </div>
  );
}
