import axios from 'axios';

const API_URL = 'https://job-ready-cohort-hackathon-phase-1-olive.vercel.app/api/auth'; // adjust if needed

// Register user
export const register = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

// Login user
export const login = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

// Get protected route
export const getProtected = async (token) => {
  return axios.get(`${API_URL}/protected`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
