// src/api/axios.js or axios.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Your Laravel API URL
    headers: {
        Accept: 'application/json',
    },
});

// Automatically attach token if available
api.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
