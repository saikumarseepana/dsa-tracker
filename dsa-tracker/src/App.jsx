import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import TopicList from './components/TopicList'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'

function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </div>
    </>
  );
};
export default App
