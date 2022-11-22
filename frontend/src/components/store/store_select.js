import './store.css';
import { useNavigate } from 'react-router-dom';

export default function Store_Select() {

	const navigate = useNavigate();

   return (
    <div className="store_select_container">
	    <div className="squareCont">
	      <div className="sqrText">Hoodies</div>
	      <div className="sqrImage img4" onClick={()=> navigate('/store', {state: {catagory: 'Hoodies'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">T-Shirts</div>
	      <div className="sqrImage img1" onClick={()=> navigate('/store', {state: {catagory: 'T-Shirts'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Hats</div>
	      <div className="sqrImage img2" onClick={()=> navigate('/store', {state: {catagory: 'Hats'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Joggers</div>
	      <div className="sqrImage img3" onClick={()=> navigate('/store', {state: {catagory: 'Joggers'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Jackets</div>
	      <div className="sqrImage img3" onClick={()=> navigate('/store', {state: {catagory: 'Jackets'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Sweatshirts</div>
	      <div className="sqrImage img2" onClick={()=> navigate('/store', {state: {catagory: 'Sweatshirts'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Jeans</div>
	      <div className="sqrImage img1" onClick={()=> navigate('/store', {state: {catagory: 'Jeans'} })} />
	    </div>
	    <div className="squareCont">
	    	<div className="sqrText">Other</div>
	      <div className="sqrImage img4" onClick={()=> navigate('/store', {state: {catagory: 'Other'} })} />
	    </div>
    </div>
  );
}

