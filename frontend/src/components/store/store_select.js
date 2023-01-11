import css from './store.module.css';
import { useNavigate } from 'react-router-dom';

export default function Store_Select() {

	const navigate = useNavigate();

   return (
    <div className={css.store_select_container}>
	    <div className={css.item_select_container}>
	      <div className={css.sqrText}>Hats</div>
	      <div className={`${css.sqrImage} ${css.img4}`} onClick={()=> navigate('/store', {state: {catagory: 'hats'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>Hoodies</div>
	      <div className={`${css.sqrImage} ${css.img1}`} onClick={()=> navigate('/store', {state: {catagory: 'hoodies'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>Jackets</div>
	      <div className={`${css.sqrImage} ${css.img2}`} onClick={()=> navigate('/store', {state: {catagory: 'jackets'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>Joggers</div>
	      <div className={`${css.sqrImage} ${css.img3}`} onClick={()=> navigate('/store', {state: {catagory: 'joggers'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>Shorts</div>
	      <div className={`${css.sqrImage} ${css.img3}`} onClick={()=> navigate('/store', {state: {catagory: 'shorts'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>T-Shirts</div>
	      <div className={`${css.sqrImage} ${css.img2}`} onClick={()=> navigate('/store', {state: {catagory: 't-shirts'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>Jumpers</div>
	      <div className={`${css.sqrImage} ${css.img1}`} onClick={()=> navigate('/store', {state: {catagory: 'jumpers'} })} />
	    </div>
	    <div className={css.item_select_container}>
	    	<div className={css.sqrText}>Accessories</div>
	      <div className={`${css.sqrImage} ${css.img4}`} onClick={()=> navigate('/store', {state: {catagory: 'accessories'} })} />
	    </div>
    </div>
  );
}

