import React from 'react';
import './style.css';

const ShopItem = (props) => {
  return (
    <div className='ShopItem'>
      <div className='ShopItemImg'><img src={props.item.img} alt=""/></div>
      <div>{props.item.name}</div>
      <div>{props.item.color}</div>
      <div>${props.item.price}</div>
      <button>ADD TO CART</button>
    </div>
  )
}

export default ShopItem;
