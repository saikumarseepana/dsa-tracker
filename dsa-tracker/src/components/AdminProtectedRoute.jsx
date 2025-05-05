import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    return user && user.isAdmin ? children : <Navigate to="/unauthorized" />
};

export default AdminProtectedRoute;