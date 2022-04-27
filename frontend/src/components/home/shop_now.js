import './home.css';
import { useNavigate } from 'react-router-dom';


export default function ShopNow() {

  const navigate = useNavigate();

   return (
    <div className="shopNowCont">
      <div className="smallCont">
        <div className="smallBox">
          <div className="titleDash">------------</div>
        </div>
        <div className="smallBox">
          <div className="shopTitle" onClick={()=> navigate('/store')}>Shop Now</div>
        </div>
        <div className="smallBox">
          <div className="titleDash">------------</div>
        </div>
      </div>
      <div className="boxCont">
        <div className="box">
          <div className="squareCont large">
            <div className="squareImg sImg1" onClick={()=> navigate('/t-shirts')}/>
          </div>
          <div className="squareCont">
            <div className="squareTxt">T-Shirts</div>
          </div>
        </div>
        <div className="box">
          <div className="squareCont large">
            <div className="squareImg sImg2" onClick={()=> navigate('/hoodies')}/>
          </div>
          <div className="squareCont">
            <div className="squareTxt">Hoodies</div>
          </div>
        </div>
        <div className="box">
          <div className="squareCont large">
            <div className="squareImg sImg3" onClick={()=> navigate('/hat')}/>
          </div>
          <div className="squareCont">
            <div className="squareTxt">Hats</div>
          </div>
        </div>
      </div>
      <div className="smallCont">
        <div className="smallBox">
          <div className="titleDash">------------</div>
        </div>
        <div className="smallBox">
          <div className="crown" onClick={()=> navigate('/login',{switch:0})}/>
        </div>
        <div className="smallBox">
          <div className="titleDash">------------</div>
        </div>
      </div>
    </div>
  );
}
