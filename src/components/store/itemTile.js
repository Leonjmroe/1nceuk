import './store.css';
import { useNavigate } from 'react-router-dom';

export default function Tile(props) {

  const navigate = useNavigate();

  return (
      <div className="tile" onClick={()=> navigate('/item_preview')}>
        <img className="image" src={props.image}></img>
        <div className="detailBox"> 
          <div className="text">{props.text}</div>
          <div className="price">{props.price}</div>
        </div>
      </div>
  );
}

