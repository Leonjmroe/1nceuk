import './home.css';
import { Carousel } from 'react-bootstrap';
import tile1 from '../../images/IMG_0587.jpeg';
import tile2 from'../../images/IMG_0568.jpeg';
import tile3 from '../../images/IMG_0544.jpeg';
import { useState } from "react";


export default function Main() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (  
  <Carousel className="carousel_cont" variant="light" fade 
            activeIndex={index} onSelect={handleSelect}>
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
  );
}

