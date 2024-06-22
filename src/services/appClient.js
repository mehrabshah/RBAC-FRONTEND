
import axios from 'axios';

// Base URL for your API
const BASE_URL = 'http://localhost:3000/api';

// Instance for non-authenticated requests
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Instance for authenticated requests
const authApiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

authApiClient.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const user = JSON.parse(localStorage.getItem('User'));
     console.log("token piyara",user.token)


    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient, authApiClient };
