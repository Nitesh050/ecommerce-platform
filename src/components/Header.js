import React from 'react';
import '../styles/Header.css';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header className="header">
      <h1>Senture Perfumes</h1>
      <div className="cart-icon" onClick={toggleCart}>
        🛒 <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
