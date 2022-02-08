import './home.css';
import Carousel from './carousel.js';
import Circles from './circles.js';
import ShopNow from './shop_now.js';

export default function Home() {

   return (
    <div className="container">
      <Carousel />
      <Circles />
      <ShopNow />
    </div>
  );
}

