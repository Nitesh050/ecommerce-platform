import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';
import { formatPrice } from '../utils/currency';

const Cart = ({ isOpen, cart, removeFromCart, getTotalPrice, closeCart }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleProceedToPayment = () => {
    closeCart();
    navigate('/payment');
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-header">
        <h2>Shopping Cart</h2>
        <button className="cart-close-button" onClick={closeCart} aria-label="Close cart">×</button>
      </div>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{formatPrice(item.price)} <span className="cart-item-qty">x {item.quantity}</span></p>
                <p className="cart-item-subtotal">Subtotal: {formatPrice(item.price * item.quantity)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {formatPrice(getTotalPrice())}</h3>
            <button className="checkout-button" onClick={handleProceedToPayment}>
              Proceed to Payment <span className="checkout-button-arrow">→</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
