import { makeStyles } from '@material-ui/core/styles';
import './shop.css';


export default function Tile(props) {

  return (
    <div className="tile">
      <img className="image" src={props.image}></img>
      <div className="text"><span>{props.text}</span></div>
      <div className="price">{props.price}</div>
    </div>
  );
}

