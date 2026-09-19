import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Navigation from './Navigation';
import HeaderNav from './HeaderNav';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-left">
          <HeaderNav />
          <Logo />
        </div>
        <div className="cart-icon" onClick={toggleCart}>
          🛒 <span className="cart-count">{cartCount}</span>
        </div>
      </header>
      <Navigation />
    </div>
  );
};

export default Header;
