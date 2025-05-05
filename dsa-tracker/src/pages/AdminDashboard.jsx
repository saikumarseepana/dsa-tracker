import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
