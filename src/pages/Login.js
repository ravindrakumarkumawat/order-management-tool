import React, { useState } from 'react';
import { isValidEmail, isValidPassword, isValidUserName } from '../utils/validations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation here
  };

  const validate = () => {
    let isValid = true;

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    if(!isValidEmail(email) && !isValidUserName(email)) {
      setEmailError('Please enter a valid email address or username.');
      isValid = false
    }

    if(!isValidPassword) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false
    }
    if(isValid) {
      setEmailError('')
      setPasswordError('')
    }
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <button type="submit" disabled={!validate}>
        Login
      </button>
    </form>
  );
};

export default Login;
