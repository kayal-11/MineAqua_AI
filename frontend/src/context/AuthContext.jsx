import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_USER = {
  name: "Dr. Ananya Sharma",
  email: "ananya.sharma@mineaqua.ai",
  role: "Field Environmental Officer",
  node: "Mining Zone Node #01 (Jharkhand)",
  status: "Active",
  lastLogin: "Today, 11:45 AM"
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('mineaqua_user');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const login = (email, password) => {
    // Demo authentication simulation
    const nameFromEmail = email.split('@')[0];
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    
    const loggedInUser = {
      name: user?.name || formattedName || "Operator User",
      email: email,
      role: "Field Environmental Operator",
      node: "Mining Zone Node #01",
      status: "Active",
      lastLogin: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setUser(loggedInUser);
    localStorage.setItem('mineaqua_user', JSON.stringify(loggedInUser));
    return true;
  };

  const register = (name, email, password) => {
    const newUser = {
      name: name || "New Operator",
      email: email,
      role: "Field Environmental Officer",
      node: "Mining Zone Node #01",
      status: "Active",
      lastLogin: "Just Now"
    };

    setUser(newUser);
    localStorage.setItem('mineaqua_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mineaqua_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
