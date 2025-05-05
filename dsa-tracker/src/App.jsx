import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useAuth } from './context/AuthContext'; 

import AdminProtectedRoute from './components/AdminProtectedRoute'; // Import AdminProtectedRoute
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';  // SignUpPage
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';  // Admin dashboard page
import Unauthorized from './pages/Unauthorized';  // Unauthorized page

const App = () => {
  // const { user } = useAuth();

  return (
      <Routes>
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />  {/* Added signup route */}
        
        {/* Protected Route */}
        <Route 
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />

        {/* Admin Protected Route */}
        <Route
        path="/login/admin-dashboard"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
        />

        {/* unauthorized route */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
  );
};

export default App;
