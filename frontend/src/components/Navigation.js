import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'new', label: 'New Arrivals', icon: '✨' },
    { id: 'collections', label: 'Collections', icon: '🎁' },
    { id: 'bestsellers', label: 'Best Sellers', icon: '⭐' },
    { id: 'gifts', label: 'Gift Sets', icon: '🎀' },
    { id: 'about', label: 'About Us', icon: 'ℹ️' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // You can add scroll to section functionality here
  };

  return (
    <nav className="sliding-nav">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
