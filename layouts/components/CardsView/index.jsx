import React from 'react';
import ShopCard from '../ShopCard';
import './style.css';

const CardsView = (props) => {
  return (
    <div className='CardsBlock'>
      {props.cards.map((card) => {
        return <ShopCard data={card} key={card.img} />
      })}
    </div>
  )
};

export default CardsView;
