import React from 'react';

const CartMessage = ({ message }) => {
  return (
    <div className="cart-message">
      <p>{message}</p>
    </div>
  );
};

export default CartMessage;