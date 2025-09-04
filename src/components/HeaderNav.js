import React, { useState } from 'react';
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
              <a href="/login" onClick={(e) => e.preventDefault()}>
                <span className="nav-icon">👤</span>
                Login
              </a>
            </li>
            <li>
              <a href="/signup" onClick={(e) => e.preventDefault()}>
                <span className="nav-icon">✨</span>
                Sign Up
              </a>
            </li>
            <li>
              <a href="/history" onClick={(e) => e.preventDefault()}>
                <span className="nav-icon">📜</span>
                Order History
              </a>
            </li>
            <li>
              <a href="/help" onClick={(e) => e.preventDefault()}>
                <span className="nav-icon">❓</span>
                Help & Support
              </a>
            </li>
            <li>
              <a href="/about" onClick={(e) => e.preventDefault()}>
                <span className="nav-icon">ℹ️</span>
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && <div className="nav-backdrop" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
};

export default HeaderNav;
