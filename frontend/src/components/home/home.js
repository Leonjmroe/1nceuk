import Carousel from './carousel.js';
import Circles from './circles.js';
import Collections from './collections.js';
import { Underbar } from '../core/core.js';
import css from './home.module.css';

export default function Home() {

   return (
    <div className={css.home_container}>
      <Carousel />
      <Underbar />
      <Circles />
      <Underbar />
      <Collections />
    </div>
  );
}

