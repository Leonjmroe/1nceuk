import './home.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function TopItem() {

   return (
    <div className="section2Cont">
      <div className="linkCont">
        <div className="linkBtn1Cont">
          <Link to="/store" className="linkBtn1">  
            <Button className="btn1" variant="contained" color="primary">View Designs</Button>
          </Link>
        </div>
        <div className="linkBtn2Cont">
          <Link to="/about" className="linkBtn2">  
            <div className="btn2" variant="contained" color="primary">View Shop</div>
          </Link>
        </div>
      </div>
      <div className="topItemCont">
        <div className="topItemTitle"><h2>* Our Most Popular Product! *</h2></div>
        <img className="popItemImg"></img>
        <div className="topItemDes"><h2>£34.99</h2><br></br>
                                    This is our best seelling product - 
                                    Pink panther design hoody. Choose 
                                    from multiple colours </div>
      </div>
    </div>
  );
}

