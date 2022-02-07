import './../core/core.css';
import { useNavigate } from 'react-router-dom';


export default function Header() {

  const navigate = useNavigate();

return (

<div className="header">
  <div className="logo1nce" onClick={()=> navigate('/home')}/>
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

