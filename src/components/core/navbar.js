import './../core/core.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Header() {

  const navigate = useNavigate();
  const [classState, setclassState] = useState('box_nodisplay dropdown_box')

   const dropdown = () => {
    if(classState == 'box_display dropdown_box'){
      setclassState('box_nodisplay dropdown_box')
    }else{
      setclassState('box_display dropdown_box')
    }
  }

  const drop_link = (x) => {
    setclassState('box_nodisplay dropdown_box')
    navigate(x)
  }

return (
<div className="header">
  <div className="logo1nce" onClick={()=> navigate('/')}/>
  <div className="storeTitle" onClick={()=> navigate('/store')}>Store</div>
  <div className="dropdown" onClick={()=> dropdown()}/>
  <div className={classState}>
    <div className="dropdown_list" onClick={()=> drop_link('/designs')}>Designs</div>
    <div className="dropdown_list" onClick={()=> drop_link('/about')}>About</div>
    <div className="dropdown_list" onClick={()=> drop_link('/contact')}>Contact</div>
  </div>
  <div className="basketCont">  
    <div className="shopCounter">1</div>
    <div className="shopBtn" onClick={()=> navigate('/checkout')}/>
  </div>
</div>
)}
