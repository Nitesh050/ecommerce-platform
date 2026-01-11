import React from 'react';
import '../styles/Cart.css';

const Cart = ({ isOpen, cart, removeFromCart, getTotalPrice }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString('en-IN')}</p>
              </div>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{parseInt(getTotalPrice()).toLocaleString('en-IN')}</h3>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
