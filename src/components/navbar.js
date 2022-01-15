import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Header() {
  
  const useStyles = makeStyles(() => ({
    button: {
      'height': '100%',
      'left': '-2vw',
      'margin-left': '2vw',
    },
    button_cont: {
      'margin-left': '20vw',
    },
    nav_bar: {
      'display': 'flex',
      'justify-content': 'space-around',
      'background-color': '#333333',
      'height': '8vh',
      'background-image': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 100%);',
    }
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

<nav className={classes.nav_bar}>
    <ul>
   		<Link to="/home">
    		<Button className={classes.button} variant="contained" color="primary">Home</Button>
    	</Link>
     </ul>
     <ul className={classes.button_cont}>
     	<Link to="/shop">
     		<Button className={classes.button} variant="contained" color="primary">Shop</Button>
     	</Link>
     	<Link to="/about">	
     		<Button className={classes.button} variant="contained" color="primary">About</Button>
      	</Link>
      	<Link to="/contact">	
      		<Button className={classes.button} variant="contained" color="primary">Contact</Button>
    	</Link>
    </ul>
    <ul className={classes.button_cont} >
    	<Link to="/checkout">
     		<Button className={classes.button} variant="contained" color="primary">Checkout</Button>
    	</Link>
    </ul>
</nav>

)}

