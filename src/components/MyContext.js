import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modal, setModal] = useState(false);

  const login = () => {
    // Perform authentication logic, such as checking credentials
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic, such as clearing session data
    setIsLoggedIn(false);
    };
    
    const value = { isLoggedIn, login, logout, modal, setModal };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
