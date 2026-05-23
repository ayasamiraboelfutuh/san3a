// src/services/authService.js

// We keep this for later when the backend is ready
const API_URL = "https://your-backend-api.com/api/auth/";

const login = async (email, password) => {
  // SIMULATE API DELAY
  await new Promise(resolve => setTimeout(resolve, 500));

  // HARDCODED MOCK USER
  const mockUser = {
    id: 1,
    name: "Demo User",
    email: email,
    role: email.includes('artisan') ? 'seller' : 'customer' // Switch role based on email keyword
  };

  console.log("Mocking login, returning:", mockUser);
  return mockUser; // Return the object directly
};

const register = async (userData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("Mocking registration success:", userData);
  return { success: true };
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const authService = { login, register, logout };