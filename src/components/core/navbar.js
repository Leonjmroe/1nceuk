import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Header() {
  
  const useStyles = makeStyles(() => ({
    button: {
      'height': '80%',
      'align-items': 'center',
    },
    button_cont: {
      'display': 'flex',
      'align-items': 'center',
    },
    nav_bar: {
      'display': 'flex',
      'width': '100%',
      // 'justify-content': 'space-around',
      'background-color': '#333333',
      'height': '8vh',
      'background-image': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 100%);',
    },
    butn1: {
      'margin-left': '3%',
    },
    butn2: {
      'margin-left': '50%',
    },
    butn3: {
      'margin-left': '1%',
    },
    butn4: {
      'margin-left': '1%',
    },
    butn5: {
      'margin-left': '10.5%',
    },
  }));
  
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      }
   	}})

return (

<div className={classes.nav_bar}>
  <div className={`${classes.button_cont} ${classes.butn1}`}>
 		<Link to="/home">
  		<Button className={classes.button} variant="contained" color="primary">Home</Button>
  	</Link>
   </div>
   <div className={`${classes.button_cont} ${classes.butn2}`}>
   	<Link to="/store">
   		<Button className={classes.button} variant="contained" color="primary">Store</Button>
   	</Link>
  </div>
  <div className={`${classes.button_cont} ${classes.butn3}`}>
   	<Link to="/about">	
   		<Button className={classes.button} variant="contained" color="primary">About</Button>
    </Link>
  </div>
  <div className={`${classes.button_cont} ${classes.butn4}`}>
    <Link to="/contact">	
  		<Button className={classes.button} variant="contained" color="primary">Contact</Button>
  	</Link>
  </div>
  <div className={`${classes.button_cont} ${classes.butn5}`}>
  	<Link to="/checkout">
   		<Button className={classes.button} variant="contained" color="primary">Checkout</Button>
  	</Link>
  </div>
</div>

)}

