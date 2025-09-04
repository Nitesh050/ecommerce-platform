import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Senture</h3>
          <p>Discover luxury fragrances that tell your story. Our curated collection brings you the finest perfumes from around the world.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="/" onClick={(e) => e.preventDefault()}>Home</a></p>
          <p><a href="/shop" onClick={(e) => e.preventDefault()}>Shop</a></p>
          <p><a href="/about" onClick={(e) => e.preventDefault()}>About Us</a></p>
          <p><a href="/contact" onClick={(e) => e.preventDefault()}>Contact</a></p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@senture.com</p>
          <p>Phone: (555) 123-4567</p>
          <div className="social-links">
            <a href="/facebook" onClick={(e) => e.preventDefault()} aria-label="Facebook">
              <span role="img" aria-label="Facebook">📱</span>
            </a>
            <a href="/instagram" onClick={(e) => e.preventDefault()} aria-label="Instagram">
              <span role="img" aria-label="Instagram">📸</span>
            </a>
            <a href="/twitter" onClick={(e) => e.preventDefault()} aria-label="Twitter">
              <span role="img" aria-label="Twitter">🐦</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Senture Perfumes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
