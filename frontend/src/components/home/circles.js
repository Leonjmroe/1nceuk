import './home.css';
import { useNavigate } from 'react-router-dom';

export default function AboutUsLinks() {

  const navigate = useNavigate();

   return (
    <div className="circleContainer">
        <div className="circleCont">
          <div className="circleImg circle_img1" onClick={()=> navigate('/skating')}/>
        </div>
        <div className="circleCont">
          <div className="circleImg circle_img2" onClick={()=> navigate('/designs')}/>
        </div>
        <div className="circleCont">
          <div className="circleImg circle_img3" onClick={()=> navigate('/about')}/>
        </div>
        <div className="circleCont">
          <div className="circleText">Skating</div>
        </div>
        <div className="circleCont">
          <div className="circleText">Designs</div>
        </div>
        <div className="circleCont">
          <div className="circleText">About 1nce</div>
        </div>
    </div>
  );
}

