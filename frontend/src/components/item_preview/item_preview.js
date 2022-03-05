import './item_preview.css';
import { Carousel } from 'react-bootstrap';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import tile1 from '../../images/IMG-3162.jpg'
import tile2 from '../../images/IMG-3156.jpg'
import tile3 from '../../images/IMG-3150.jpg'

export default function Preview() {

  const location = useLocation();
  console.log(location.state.id);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

   return (
    <div className="previewCont">
      <div className="imagePreviewCont">
        <Carousel className="imageBox" variant="light" fade 
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
        <div className="previewBox">
          <div className="prevDetail">
            <div className="prevDetailItem">Info</div>
          </div>
          <div className="prevDetail">
            <div className="prevDetailItem">Info</div>
          </div>
          <div className="prevDetail">
            <div className="prevDetailItem">Info</div>
          </div>
          <div className="prevDetail">
            <div className="prevDetailItem">Info</div>
          </div>
          <div className="prevDetail">
            <div className="prevDetailItem">Info</div>
          </div>
        </div>
      </div>
      <div className="previewBox2">
        <div className="prevDetail">
          <div className="prevDetailItem">Info</div>
        </div>
        <div className="prevDetail">
          <div className="prevDetailItem">Info</div>
        </div>
        <div className="prevDetail">
          <div className="prevDetailItem">Info</div>
        </div>
        <div className="prevDetail">
          <div className="prevDetailItem">Info</div>
        </div>
        <div className="prevDetail">
          <div className="prevDetailItem">Info</div>
        </div>
      </div>
      <div className="addBasketCont">
        <div className="basketBox">
          <div className="basketBtn">Add to basket</div>
        </div>
      </div>
    </div>
  );
}


