import './store.css';
import { useNavigate } from 'react-router-dom';

export default function Store_Select() {

	const navigate = useNavigate();

   return (
    <div className="store_select_container">
	    <div className="squareCont">
	      <div className="sqrText">Hats</div>
	      <div className="sqrImage img4" onClick={()=> navigate('/store', {state: {catagory: 'hats'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Hoodies</div>
	      <div className="sqrImage img1" onClick={()=> navigate('/store', {state: {catagory: 'hoodies'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Jackets</div>
	      <div className="sqrImage img2" onClick={()=> navigate('/store', {state: {catagory: 'jackets'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Joggers</div>
	      <div className="sqrImage img3" onClick={()=> navigate('/store', {state: {catagory: 'joggers'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Shorts</div>
	      <div className="sqrImage img3" onClick={()=> navigate('/store', {state: {catagory: 'shorts'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">T-Shirts</div>
	      <div className="sqrImage img2" onClick={()=> navigate('/store', {state: {catagory: 't-shirts'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Jumpers</div>
	      <div className="sqrImage img1" onClick={()=> navigate('/store', {state: {catagory: 'jumpers'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Accessories</div>
	      <div className="sqrImage img4" onClick={()=> navigate('/store', {state: {catagory: 'accessories'} })} />
	    </div>
    </div>
  );
}

