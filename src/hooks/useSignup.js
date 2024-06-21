// src/hooks/useSignup.js
import { useState } from 'react';
import axios from 'axios';
import {signUpUser} from "../services/authapi"

const useSignup = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const signup = async (data) => {
    try {
      const response = await signUpUser(data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : 'Server error');
      setLoading(false);
    }
  };

  return { signup, loading};
};

export default useSignup;
