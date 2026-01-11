import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ perfume, cart, setCart, isAuthenticated }) => {
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const navigate = useNavigate();
  const { name, price, description, image } = perfume;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowLoginMessage(true);
      setTimeout(() => setShowLoginMessage(false), 3000); // Hide message after 3 seconds
    } else {
      setCart([...cart, perfume]);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p className="product-description">{description}</p>
      </div>
      <div className="price-container">
        <span className="price">₹{price.toLocaleString('en-IN')}</span>
      </div>
      <div className="button-container">
        {showLoginMessage ? (
          <div className="login-message">
            Please <button className="login-link" onClick={handleLogin}>login</button> to add items to cart
          </div>
        ) : (
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
