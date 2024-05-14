import React from 'react';
import Cart from './Cart';

function CartView({ cartItems, onClose }) {
  return (
    <div className="cart-view">
      <h2>Cart</h2>
      <button onClick={onClose}>Close</button>
      <Cart items={cartItems} />
    </div>
  );
}

export default CartView;
