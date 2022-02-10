import './../core/core.css';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


export default function Header() {

  const navigate = useNavigate();

  const dropdown = dropdown => {
    console.log(100)
  }

  const useStyles = makeStyles(() => ({
      dropdown_box: {
        position: 'absolute',
        'display': 'none'
      }
    }))

  const classes = useStyles();

return (

<div className="header">
  <div className="logo1nce" onClick={()=> navigate('/CSSDesign')}/>
  <div className="storeTitle">Store</div>
  <div className="dropdown" onClick={()=> dropdown()}/>
  <ul className={classes.dropdown_box}>
    <li><a href="#">Designs</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div className="basketCont">  
    <div className="shopCounter">1</div>
    <div className="shopBtn" onClick={()=> navigate('/checkout')}/>
  </div>
</div>
)}
