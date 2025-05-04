import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from  '../context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Simulate login check
      if (username.trim()) {
        login(); // update context + localStorage
        navigate("/");
      } else {
        alert("Please enter a username");
      }
    };
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">User Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;