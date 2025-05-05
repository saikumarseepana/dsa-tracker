import { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Custom hook for using the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Example user data with admin flag (hardcoded for now)
  const [user, setUser] = useState(null);

  // Login function
  const login = (userDetails) => {

    setUser(userDetails);
    localStorage.setItem('user', JSON.stringify(userDetails));
    // const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');

    // if(username === storedUsername && password === storedPassword) {
    //     setUser({ username });
    //     return true;
    // } else {
    //     alert('Invalid credentials');
    //     return false;
    // }
  };

  // Logout function
  const logout = () => {
    
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
