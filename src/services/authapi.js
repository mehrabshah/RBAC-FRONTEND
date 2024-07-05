// src/services/authService.js
import {apiClient} from '../services/appClient';

export const signUpUser = async (data) => {
  try {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : 'Server error';
  }
};

export const loginUser = async (data) => {
  try {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : 'Server error';
  }
};


export const forgetPasswordApi = async (data) => {
  try {
    const response = await apiClient.post('/auth/forget-password', data);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : 'Server error';
  }
};