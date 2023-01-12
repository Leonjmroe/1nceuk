import Carousel from './carousel.js';
import Circles from './circles.js';
import Collections from './collections.js';
import { Underbar } from '../core/core.js';

export default function Home() {

   return (
    <div>
      <Carousel />
      <Underbar />
      <Circles />
      <Underbar />
      <Collections />
    </div>
  );
}

