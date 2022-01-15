import { makeStyles } from '@material-ui/core/styles';

export default function Shop() {

  const useStyles = makeStyles(() => ({
    tile: {
      'height': '60vh',
      'flex-basis': '30%',
      'margin-left': '2.5%',
      'margin-top': '5%',
      'border': '1px solid black',
      'border-radius': '1%',
      'background-color': '#999999'
    },
    image: {
      'height': '75%',
      'width': '100%',
      'background-color': '#777777'
    },
    text: {
      'display': 'flex',
      'align-items': 'center',
      // 'text-align': 'center',
      'height': '15%',
      'width': '100%'
      // 'background-color': '#555555',
    },
    price: {
      'display': 'flex',
      'align-items': 'center',
      'height': '10%',
      'width': '100%',
      'font-weight': 'bold'
      // 'background-color': '#333333',
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.tile}>
      <div className={classes.image}></div>
      <div className={classes.text}><span>Purple hoodie with panther design</span></div>
      <div className={classes.price}>£35</div>
    </div>
  );
}

