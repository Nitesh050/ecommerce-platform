import React from 'react';
import '../styles/Auth.css';

const AuthCard = ({ title, children, footer }) => (
  <div className="auth-page">
    <div className="auth-card">
      <h1>{title}</h1>
      {children}
      {footer && <div className="auth-footer">{footer}</div>}
    </div>
  </div>
);

export default AuthCard;
