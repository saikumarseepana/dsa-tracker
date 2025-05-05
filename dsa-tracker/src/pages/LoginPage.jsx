import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const adminCredentials = {
    username : 'admin',
    password: 'admin123'
  }

  const handleLogin = (e) => {
    e.preventDefault();

    //checking admin credentials
    if(username === adminCredentials.username && password ===
      adminCredentials.password) {
        login({username, isAdmin: true});
        navigate("admin-dashboard");
      } else if(username.trim() && password.trim()){
        login({username, isAdmin: false});
        navigate("/dashboard");
      }
    
      
  } 
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
