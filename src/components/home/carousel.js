import './home.css';
import { Carousel } from 'react-bootstrap';
import tile1 from '../../images/stock-image-1.jpeg';
import tile2 from'../../images/stock-image-2.jpeg';
import tile3 from '../../images/stock-image-3.jpeg';
import { useState } from "react";


export default function Main() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (  
  <Carousel className="carousel_cont" variant="dark" fade 
            activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item interval={1300}>
    <img
      className="d-block w-100"
      src={tile1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1300}>
    <img
      className="d-block w-100"
      src={tile2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1300}>
    <img
      className="d-block w-100"
      src={tile3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}


