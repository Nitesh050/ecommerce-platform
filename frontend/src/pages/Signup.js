import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import SocialLoginButtons from '../components/SocialLoginButtons';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    setError('Passwords do not match.');
    setSubmitted(false);
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error || 'Signup failed');
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
      title="Sign Up"
      footer={<>Already have an account? <Link to="/login">Log in</Link></>}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
          id="signup-confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-submit">Sign Up</button>
        {error && <p className="auth-form-error">{error}</p>}
        {submitted && (
          <p className="auth-form-notice">Account created successfully! You can now log in.</p>
        )}
      </form>

      <div className="auth-divider"><span>or</span></div>

      <SocialLoginButtons />
    </AuthCard>
  );
};

export default SignupPage;
