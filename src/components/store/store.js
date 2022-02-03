import ItemTile from './itemTile.js'
import './store.css';
import image1 from '../../images/tile1.jpg';
import image2 from '../../images/tile1.jpg';
import image3 from '../../images/tile1.jpg';

export default function Shop() {

  const items = [
      { 'image': image1, 'text': 'Orange Hoddy', 'price': '£35' },
      { 'image': image2, 'text': 'Purple Hoody', 'price': '£35' },
      { 'image': image3, 'text': 'Black Hoody', 'price': '£35' },
      { 'image': image1, 'text': 'Orange Hoddy', 'price': '£35' },
      { 'image': image2, 'text': 'Purple Hoody', 'price': '£35' },
      { 'image': image3, 'text': 'Black Hoody', 'price': '£35' },
      { 'image': image1, 'text': 'Orange Hoddy', 'price': '£35' },
      { 'image': image2, 'text': 'Purple Hoody', 'price': '£35' },
      { 'image': image3, 'text': 'Black Hoody', 'price': '£35' },
      { 'image': image1, 'text': 'Orange Hoddy', 'price': '£35' },
      { 'image': image2, 'text': 'Purple Hoody', 'price': '£35' },
      { 'image': image3, 'text': 'Black Hoody', 'price': '£35' },
      { 'image': image1, 'text': 'Orange Hoddy', 'price': '£35' },
      { 'image': image2, 'text': 'Purple Hoody', 'price': '£35' },
      { 'image': image3, 'text': 'Black Hoody', 'price': '£35' },
    ]

   return (
    <div className="container">
        { 
          items.map( 
            item => (<ItemTile image={item.image} 
                               text={item.text}
                               price={item.price} />)
          )
        }
    </div>
  );
}

