import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const DashboardPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Welcome to your Dashboard</h2>
            
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded mt-4"
            >
                Logout
            </button>
        </div>
    );
}

export default DashboardPage;
