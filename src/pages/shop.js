import ItemTile from '../components/itemTile.js'
import { makeStyles } from '@material-ui/core/styles';
import stock_img_1 from '../images/stock-image-1.jpeg';
import stock_img_2 from'../images/stock-image-2.jpeg';
import stock_img_3 from '../images/stock-image-3.jpeg';

export default function Shop() {

  const useStyles = makeStyles(() => ({
    container: {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'max-width': '80vw',
      'margin-top': '5vh',
      'margin-left': '10vw',
      'background-color': '#dddddd',
      'padding': '0% 0% 4% 0%',
    }
  }));
  const classes = useStyles();

   return (
    <div className={classes.container}>
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
      <ItemTile />
    </div>
  );
}

