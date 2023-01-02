import css from './home.module.css';
import { useNavigate } from 'react-router-dom';

export default function AboutUsLinks() {

  const navigate = useNavigate();

   return (
    <div className={css.circleContainer}>
        <div className={css.circleCont}>
          <div className={`${css.circleImg} ${css.circle_img1}`} onClick={()=> navigate('/skating')}/>
        </div>
        <div className={css.circleCont}>
          <div className={`${css.circleImg} ${css.circle_img2}`} onClick={()=> navigate('/designs')}/>
        </div>
        <div className={css.circleCont}>
          <div className={`${css.circleImg} ${css.circle_img3}`} onClick={()=> navigate('/about')}/>
        </div>
        <div className={css.circleCont}>
          <div className={css.circleText}>Skating</div>
        </div>
        <div className={css.circleCont}>
          <div className={css.circleText}>Designs</div>
        </div>
        <div className={css.circleCont}>
          <div className={css.circleText}>About 1nce</div>
        </div>
    </div>
  );
}

