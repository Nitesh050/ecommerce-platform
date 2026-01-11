import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.css';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-nav">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="menu-icon">☰</span>
      </button>
      
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <div className="nav-content">
          <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
          <ul className="nav-list">
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">👤</span>
                Login
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">✨</span>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">🏠</span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/history" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">📜</span>
                Order History
              </Link>
            </li>
            <li>
              <Link to="/help" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">❓</span>
                Help & Support
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">ℹ️</span>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && <div className="nav-backdrop" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
};

export default HeaderNav;
