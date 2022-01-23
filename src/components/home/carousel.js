import { makeStyles } from '@material-ui/core/styles';
import stock_img_1 from '../../images/stock-image-1.jpeg';
import stock_img_2 from'../../images/stock-image-2.jpeg';
import stock_img_3 from '../../images/stock-image-3.jpeg';
import Item from '../shop/itemTile.js';

export default function Main() {

  const useStyles = makeStyles(() => ({
    carousel_cont: {
      'height': '40vh',
      'width': '80%',
      'margin-left': '10%',
      'margin-top': '5%',
      'border': '1px solid black',
      'border-radius': '1%',
      'background-color': '#999999',
      'axis': 'vertical',
      'display': 'flex'
    },
    tile1: {
      'height': '75%',
      'width': '100%',
      'background-color': '#777777'
    },
    tile3: {
      'height': '75%',
      'width': '100%',
      'background-color': '#777777'
    },
    tile3: {
      'height': '75%',
      'width': '100%',
      'background-color': '#777777'
    }
  }));
  const classes = useStyles();

  const breakPoints = [
  	{ width: 1, itemsToShow: 1 },
  	{ width: 550, itemsToShow: 2 },
  	{ width: 768, itemsToShow: 3 },
  	{ width: 1200, itemsToShow: 4 },
  ];

  return (
 //  	<div className={classes.carousel}>
 //    <div>
 //        <img src={stock_img_1} />
 //        <p className="legend">Legend 1</p>
 //    </div>
 //    <div>
 //        <img src={stock_img_2} />
 //        <p className="legend">Legend 2</p>
 //    </div>
 //    <div>
 //        <img src={stock_img_3} />
 //        <p className="legend">Legend 3</p>
 //    </div>
	// </div>
	<div className={classes.carousel_cont}>
	{/*<Carousel breakPoints={breakPoints}>
		<Item>One</Item>
		<Item>Two</Item>
		<Item>Three</Item>
		<Item>Four</Item>
	</Carousel>*/}
	</div>
  );
}


