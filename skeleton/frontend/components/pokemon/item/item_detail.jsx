import React from 'react';

const ItemDetail = ({item}) => {
  return(
    <div className="detail-description">
      <div>{item.name}</div>
      <div>Happiness: {item.happiness}</div>
      <div>Price: {item.price}</div>
    </div>
  )
}


export default ItemDetail;
