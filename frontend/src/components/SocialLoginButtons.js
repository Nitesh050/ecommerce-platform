import React, { useState } from 'react';

const PROVIDERS = [
  { id: 'google', label: 'Continue with Google', icon: '🔴' },
  { id: 'facebook', label: 'Continue with Facebook', icon: '🔵' },
  { id: 'apple', label: 'Continue with Apple', icon: '⚪' }
];

const SocialLoginButtons = () => {
  const [notice, setNotice] = useState('');

  const handleClick = (label) => {
    setNotice(`${label} isn't connected yet — backend integration coming soon.`);
  };

  return (
    <div className="social-login">
      {PROVIDERS.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          className={`social-button social-button--${id}`}
          onClick={() => handleClick(label)}
        >
          <span className="social-icon" aria-hidden="true">{icon}</span>
          {label}
        </button>
      ))}
      {notice && <p className="social-login-notice">{notice}</p>}
    </div>
  );
};

export default SocialLoginButtons;
