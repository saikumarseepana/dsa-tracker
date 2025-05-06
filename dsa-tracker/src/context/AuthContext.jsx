import { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Example user data with admin flag (hardcoded for now)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = ({ username, password }) => {
    const storedUser = JSON.parse(localStorage.getItem('users')) || [];

    const userFromLocalStorage = storedUser.find(
        (user) => user.username === username && user.password === password
    );

    if(userFromLocalStorage) {
        setUser(userFromLocalStorage);
        localStorage.setItem('user', JSON.stringify(userFromLocalStorage));
        return true;
    }
    return false;
  };

  

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
