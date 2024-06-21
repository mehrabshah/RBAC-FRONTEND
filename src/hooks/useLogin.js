// src/hooks/useSignup.js
import { useState } from 'react';
import axios from 'axios';
import {loginUser} from "../services/authapi"

const useLogin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = async (data) => {
    try {
      const response = await loginUser(data);
      console.log("login response",response)
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : 'Server error');
      setLoading(false);
    }
  };

  return { login, loading};
};

export default useLogin;
