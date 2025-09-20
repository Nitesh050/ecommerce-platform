import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import Logo from './Logo';
import Navigation from './Navigation';
import HeaderNav from './HeaderNav';

const Header = ({ cart, setIsCartOpen, isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  const cartCount = cart ? cart.length : 0;

  const handleAuthClick = () => {
    if (isAuthenticated) {
      onLogout();
      // After logout, redirect to home page
      navigate('/', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-left">
          <HeaderNav />
          <Logo />
        </div>
        <div className="header-right">
          <button 
            className="auth-button" 
            onClick={handleAuthClick}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
          {isAuthenticated && (
            <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
              🛒 <span className="cart-count">{cartCount}</span>
            </div>
          )}
        </div>
      </header>
      <Navigation />
    </div>
  );
};

export default Header;
