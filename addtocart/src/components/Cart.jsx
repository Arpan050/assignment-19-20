import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <span>{item.name} - ₹{item.price}</span>
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </div>
        ))
      )}
      <hr />
    </div>
  );
};

export default Cart;
