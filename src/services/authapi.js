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