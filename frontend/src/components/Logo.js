import React from 'react';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        {/* This is a temporary SVG logo that you can replace with your own image */}
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <path 
            d="M20 5C17 5 15 7 15 10V15H25V10C25 7 23 5 20 5Z" 
            fill="currentColor"
          />
          <path 
            d="M13 16V12C13 5.92487 16.9249 2 23 2C29.0751 2 33 5.92487 33 12V16C35.2091 16 37 17.7909 37 20V34C37 36.2091 35.2091 38 33 38H13C10.7909 38 9 36.2091 9 34V20C9 17.7909 10.7909 16 13 16ZM15 16H31V12C31 7.02944 27.9706 4 23 4C18.0294 4 15 7.02944 15 12V16Z"
            fill="currentColor"
          />
        </svg>
        <span className="logo-text">Senture</span>
      </div>
    </div>
  );
};

// To use your own logo image, you can modify this component to use an img tag:
/*
const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="/path/to/your/logo.png" 
        alt="Senture Perfumes Logo" 
        className="custom-logo"
      />
      <span className="logo-text">Senture</span>
    </div>
  );
};
*/

export default Logo;
