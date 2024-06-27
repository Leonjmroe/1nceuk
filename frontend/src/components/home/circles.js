import css from './home.module.css';
import { useNavigate } from 'react-router-dom';

export default function AboutUsLinks() {

  const navigate = useNavigate();

   return (
    
    <div className={css.circleContainer}>


      <div className={css.verticle_cont}>

        <div className={css.shop_now_cont}>
          <div className={css.shop_now_button} onClick={()=> navigate('/store_selection')}>Shop Now</div>
        </div>

        <div className={css.circle_master_cont}>
          <div className={css.circleCont}>
            <div className={`${css.circleImg} ${css.circle_img1}`} onClick={()=> navigate('/learn_more')}/>
            <div className={css.circleText}>Learn More</div>
          </div>
          <div className={css.circleCont}>
            <div className={`${css.circleImg} ${css.circle_img2}`} onClick={()=> navigate('/gallery')}/>
            <div className={css.circleText}>Gallery</div>
          </div>
        </div>

      </div>


    </div>
  );
}

