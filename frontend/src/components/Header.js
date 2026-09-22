import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Navigation from './Navigation';
import HeaderNav from './HeaderNav';

const Header = ({ cartCount, toggleCart, user, onLogout }) => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-left">
          <HeaderNav user={user} onLogout={onLogout} />
          <Logo />
        </div>
        <button className="cart-icon" onClick={toggleCart} aria-label="Toggle cart">
          🛒 <span className="cart-count">{cartCount}</span>
        </button>
      </header>
      <Navigation />
    </div>
  );
};

export default Header;
