import './home.css';
import Carousel from './carousel.js';
import AboutUsLinks from './aboutUsLinks.js';

export default function Home() {

   return (
    <div className="container">
      <Carousel />
      <AboutUsLinks />
    </div>
  );
}

