import './store.css';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetail from './itemDetail.js';
import { Link } from 'react-router-dom';

export default function Tile(props) {

  return (
      <div className="tile">
      <Link to="/itemDetail" image={props.image}>
        <img className="image" src={props.image}></img>
        <div className="text"><span>{props.text}</span></div>
        <div className="price">{props.price}</div>
      </Link>
      </div>
  );
}

