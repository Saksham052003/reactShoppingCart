import React, { useState } from 'react';

const ItemCard = ({ item, handleAddToCart }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button onClick={() => handleAddToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;