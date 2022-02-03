import './home.css';
import Carousel from './carousel.js';
import TopItem from './topItem.js';

export default function Home() {

   return (
    <div className="container">
      <Carousel />
      <TopItem />
    </div>
  );
}

