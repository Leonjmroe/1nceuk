import './home.css';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import tile1 from '../../images/IMG-3163.jpg';
import tile2 from '../../images/IMG-3112.jpg';
import tile3 from '../../images/IMG-3156.jpg';

export default function AboutUsLinks() {

  const navigate = useNavigate();

   return (
    <div className="circleContainer">
        <div className="circleCont">
          <div className="circleImg img1" onClick={()=> navigate('/store')}/>
        </div>
        <div className="circleCont">
          <div className="circleImg img2" onClick={()=> navigate('/about')}/>
        </div>
        <div className="circleCont">
          <div className="circleImg img3" onClick={()=> navigate('/contact')}/>
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
