import axios from 'axios';

const API_URL = 'https://job-ready-cohort-hackathon-phase-1-olive.vercel.app/api/auth';

// ✅ Register user
export const register = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    console.log(`${API_URL}/register`)


    return res.data;
  } catch (err) {
    console.error("Register error:", err.response?.data || err.message);
    throw err;
  }
};

// ✅ Login user
export const login = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    console.log(`${API_URL}/login`)
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err;
  }
};

// ✅ Get protected route
export const getProtected = async (token) => {
  try {
    const res = await axios.get(`${API_URL}/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(`${API_URL}/protected`)
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.error("Protected route error:", err.response?.data || err.message);
    throw err;
  }
};
