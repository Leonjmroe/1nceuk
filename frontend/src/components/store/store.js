import ItemTile from './itemTile.js'
import './store.css';
import image from '../../images/IMG-3162.jpg';
import { useState } from "react";

export default function Shop() {


  const items = [
      { 'id': '1', 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'id': '2', 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'id': '3', 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'id': '4', 'image': image, 'text': '1nce Hoody', 'price': '£35' },
      { 'id': '5', 'image': image, 'text': '1nce Hoody', 'price': '£35' },
    ]

   return (
    <div className="storeCont">
      {items.map( item => (
        <ItemTile key={item.id} datakey={item.id} image={item.image} text={item.text} price={item.price} />
      ))}
    </div>
  );
}

