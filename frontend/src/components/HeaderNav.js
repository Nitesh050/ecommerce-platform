import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.css';

const HeaderNav = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <div className="header-nav">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="menu-icon">☰</span>
      </button>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <div className="nav-content">
          <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
          <ul className="nav-list">
            {user ? (
              <li>
                <button className="nav-list-button" onClick={handleLogout}>
                  <span className="nav-icon">🚪</span>
                  Log Out ({user.name})
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <span className="nav-icon">👤</span>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <span className="nav-icon">✨</span>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
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
