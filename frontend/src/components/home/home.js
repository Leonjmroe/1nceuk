import Carousel from './carousel.js';
import Circles from './circles.js';
import Collections from './collections.js';
import Contact from './contact.js';
import { Underbar } from '../core/core.js';
import css from './home.module.css';

export default function Home() {

   return (
    <div className={css.home_container}>
      <div className={css.home_banner}>One Needed Clothing Enterprise UK</div>
      <Carousel />
      <Circles />
      <Collections />
      <Contact />
    </div>
  );
}

