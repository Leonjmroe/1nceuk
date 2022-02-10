import './../core/core.css';
import { useNavigate } from 'react-router-dom';


export default function Header() {

  const navigate = useNavigate();

  const dropdown = () => {
    console.log(100)
  }

return (

<div className="header">
  <div className="logo1nce" onClick={()=> navigate('/CSSDesign')}/>
  <div className="storeTitle">Store</div>
  <div className="dropdown">
    {/*<ul class="dropdown_menu" onClick={()=> dropdown()}>
      <li><a href="#">Designs</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>*/}
  </div>
  {/*<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div>*/}
  <div className="basketCont">  
    <div className="shopCounter">1</div>
    <div className="shopBtn" onClick={()=> navigate('/checkout')}/>
  </div>
</div>
)}

