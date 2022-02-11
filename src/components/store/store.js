import ItemTile from './itemTile.js'
import './store.css';
import image from '../../images/IMG-3162.jpg';

export default function Shop() {

  const items = [
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'image': image, 'text': '1nce Hoody', 'price': '£35' },
    ]

   return (
    <div className="storeCont">
      {items.map( item => (
        <ItemTile image={item.image} text={item.text} price={item.price} />
      ))}
    </div>
  );
}

