import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ items, handleAddToCart  }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;