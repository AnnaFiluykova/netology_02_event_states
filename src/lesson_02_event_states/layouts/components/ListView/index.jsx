import React from 'react';
import ShopItem from '../ShopItem';

const ListView = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <ShopItem item={item} key={item.img} />
        )
      })}
    </div>
  )
};

export default ListView;
