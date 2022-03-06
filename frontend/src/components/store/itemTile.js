import './store.css';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import tile1 from '../../images/IMG-3162.jpg'
import tile2 from '../../images/IMG-3156.jpg'
import tile3 from '../../images/IMG-3150.jpg'

export default function Tile(props) {

  const navigate = useNavigate(props);

  return (
      <div className="tile" onClick={()=> navigate('/item_preview',{state:{id:props.datakey}})}>
        <Carousel className="imageBox" variant="light" fade >
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 carousel_img"
              src={tile1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={tile2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={tile3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="detailBox"> 
          <div className="text">{props.text}</div>
          <div className="price">{props.price}</div>
        </div>
      </div>
  );
}

