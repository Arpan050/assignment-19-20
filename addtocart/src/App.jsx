import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className='container'>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default App;
