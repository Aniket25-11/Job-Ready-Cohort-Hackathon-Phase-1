import axios from 'axios';

const API = 'https://job-ready-cohort-hackathon-phase-1-olive.vercel.app/api/auth';

export const login = async (credentials) => {
  const res = await axios.post(`${API}/login`, credentials);
  return res.data;
};

export const signup = async (credentials) => {
  const res = await axios.post(`${API}/signup`, credentials);
  return res.data;
};
