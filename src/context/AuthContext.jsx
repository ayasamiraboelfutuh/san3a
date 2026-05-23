import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// src/context/AuthContext.jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Combine your useEffects into one single logic
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const mockLogin = (role) => {
    const fakeUser = {
      name: "Test User",
      email: "test@example.com",
      role: role, // 'seller' or 'customer'
    };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  const login = async (email, password) => {
    // Note: Ensure authService is imported at the top of this file!
    const userData = await authService.login(email, password);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user"); // Clear user
    localStorage.removeItem("token");
    setUser(null);
  };

  // ADD mockLogin TO THE VALUE OBJECT BELOW
  return (
    <AuthContext.Provider value={{ user, login, mockLogin, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
