import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Payment.css';
import { formatPrice } from '../utils/currency';

const PaymentPage = ({ cart, getTotalPrice }) => {
  const [gatewayNotice, setGatewayNotice] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="payment-page">
        <div className="payment-empty">
          <h2>Your cart is empty</h2>
          <p>Add a few products before heading to payment.</p>
          <Link to="/" className="payment-back-link">Back to shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <h1>Checkout</h1>

      <div className="payment-layout">
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="order-summary-item">
              <img src={item.image} alt={item.name} />
              <div className="order-summary-details">
                <h3>{item.name}</h3>
                <p>{formatPrice(item.price)} x {item.quantity}</p>
              </div>
              <span className="order-summary-subtotal">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
          <div className="order-summary-total">
            <span>Total Amount</span>
            <span>{formatPrice(getTotalPrice())}</span>
          </div>
        </div>

        <div className="payment-panel">
          <h2>Payment</h2>
          <p className="payment-panel-note">
            Payment gateway integration is coming soon. For now, this confirms your order total.
          </p>

          {gatewayNotice && (
            <p className="payment-gateway-notice">
              Payment gateway isn't set up yet — check back soon!
            </p>
          )}

          <button className="pay-now-button" onClick={() => setGatewayNotice(true)}>
            Pay {formatPrice(getTotalPrice())}
          </button>

          <Link to="/" className="payment-back-link">Back to shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
