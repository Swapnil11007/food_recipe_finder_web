import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegister = async () => {
    // Check if username or password is empty
    if (!credentials.username || !credentials.password) {
      setError('Username and password are required');
      return;
    }

    try {
      await AuthService.register(credentials);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form">
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
