import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import SocialLoginButtons from '../components/SocialLoginButtons';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      setError('');
      onLoginSuccess(data.token, { id: data.id, name: data.name, email: data.email });
      navigate('/');
    } catch (err) {
      setError('Could not reach the server. Is the backend running?');
    }
  };

  return (
    <AuthCard
      title="Log In"
      footer={<>Don't have an account? <Link to="/signup">Sign up</Link></>}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-submit">Log In</button>
        {error && <p className="auth-form-error">{error}</p>}
      </form>

      <div className="auth-divider"><span>or</span></div>

      <SocialLoginButtons />
    </AuthCard>
  );
};

export default LoginPage;
