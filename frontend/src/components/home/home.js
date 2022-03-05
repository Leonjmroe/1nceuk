import './home.css';
import Carousel from './carousel.js';
import Circles from './circles.js';
import ShopNow from './shop_now.js';
import Footer from '../core/footer.js';
import Underbar from '../core/underbar.js';

export default function Home() {

   return (
    <div>
      <Carousel />
      <Underbar />
      <Circles />
      <Underbar />
      <ShopNow />
    </div>
  );
}

