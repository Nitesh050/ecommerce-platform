import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Home', icon: '🏠' },
    { id: '/new', label: 'New Arrivals', icon: '✨' },
    { id: '/collections', label: 'Collections', icon: '🎁' },
    { id: '/bestsellers', label: 'Best Sellers', icon: '⭐' },
    { id: '/gifts', label: 'Gift Sets', icon: '🎀' },
    { id: '/about', label: 'About Us', icon: 'ℹ️' },
  ];

  return (
    <nav className="sliding-nav">
      <div className="nav-container">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            className={`nav-item ${location.pathname === item.id ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
