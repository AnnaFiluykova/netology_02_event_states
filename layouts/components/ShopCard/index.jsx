import React from 'react';
import './style.css';

const ShopCard = (props) => {
  return (
    <div className='ShopCard'>
      <div>{props.data.name}</div>
      <div>{props.data.color}</div>
      <div className='ShopCardImg'>
        <img src={props.data.img} alt="" />
      </div>
      <div>
        <div>${props.data.price}</div>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ShopCard;
