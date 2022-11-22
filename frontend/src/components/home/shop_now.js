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
          <div className="shopTitle" onClick={()=> navigate('/store_selection')}>Shop Now</div>
        </div>
        <div className="smallBox">
          <div className="titleDash">------------</div>
        </div>
      </div>


      <div className="collection_cont">

        <div className="collection_box">
          <div className="collection_img collection_image_1" onClick={()=> navigate('/store')}/>
          <div className="collection_text">2022 Collection</div>
        </div>
        <div className="collection_box">
          <div className="collection_img collection_image_3"/>
        </div>
        <div className="collection_box">
          <div className="collection_img collection_image_2" onClick={()=> navigate('/store')}/>
          <div className="collection_text">2023 Collection</div>
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
    </div>
  );
}
