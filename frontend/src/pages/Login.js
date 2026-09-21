import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import SocialLoginButtons from '../components/SocialLoginButtons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(false);
        return;
      }

      setError('');
      setSubmitted(true);
    } catch (err) {
      setError('Could not reach the server. Is the backend running?');
      setSubmitted(false);
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
        {submitted && (
          <p className="auth-form-notice">Logged in successfully! (Session/token handling comes next — refreshing the page will lose this state for now.)</p>
        )}
      </form>

      <div className="auth-divider"><span>or</span></div>

      <SocialLoginButtons />
    </AuthCard>
  );
};

export default LoginPage;
