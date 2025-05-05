import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';  // Use this instead of 'useHistory'

const SignUpPage = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // After handling the signup logic, navigate to the dashboard
    if(userData.username.trim() && userData.password.trim()) {
        localStorage.setItem('username', userData.username);
        localStorage.setItem('password', userData.password);
        
        alert('Signup successful. Please log in!');
        navigate('/login');  // Navigate to dashboard or any other page you want
    } else {
        alert('Please enter Username and Password');
    }
};

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          placeholder="Username"
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
