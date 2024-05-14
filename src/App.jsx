import React, { useState } from 'react';
import ItemCard from './ItemCard';
import CartMessage from './CartMessage';
import data from './data.json';
import Cart from './Cart';
import './App.css';
import CartView from './CartView';


function App() {
  const [cartMessage, setCartMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCartView, setShowCartView] = useState(false); // State to manage whether to show the cart view

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartMessage(`${item.name} is added to cart.Its cost is ₹${item.price}`);
    setTimeout(() => {
      setCartMessage('');
    }, 2000); // Reset the message after 2 seconds
  };

  const filteredItems = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Items List</h1>
      {cartMessage && <CartMessage message={cartMessage} />}
      <input
        type="text"
        className="search-bar"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="card-container">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <button onClick={() => setShowCartView(true)}>View Cart</button> {/* Button to show the cart view */}
      {showCartView && <CartView cartItems={cartItems} onClose={() => setShowCartView(false)} />}
    </div>
  );
}

export default App;