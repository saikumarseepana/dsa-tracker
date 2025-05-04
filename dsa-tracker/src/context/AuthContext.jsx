import { createContext, useState, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Custom hook for using the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Example user data with admin flag (hardcoded for now)
  const [user, setUser] = useState({ 
    isLoggedIn: false, 
    isAdmin: true, // You can toggle this flag based on admin or normal user
  });

  // Login function
  const login = () => {
    setUser({ ...user, isLoggedIn: true });
  };

  // Logout function
  const logout = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
