import ItemTile from '../components/shop/itemTile.js'
import '../components/shop/shop.css';
import image1 from '../images/stock-image-1.jpeg';
import image2 from '../images/stock-image-2.jpeg';
import image3 from '../images/stock-image-3.jpeg';

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

