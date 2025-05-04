import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import TopicList from './components/TopicList'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element= {<Dashboard />} />
          </Route>
        </Routes>
        
      </div>
    </>
  );
};
export default App
