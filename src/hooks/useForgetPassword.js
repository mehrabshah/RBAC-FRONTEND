// src/hooks/useSignup.js
import { useState } from 'react';
import axios from 'axios';
import {forgetPasswordApi} from "../services/authapi"

const useForgetPassword = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const forgetpassword = async (data) => {
    try {
      const response = await forgetPasswordApi(data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : 'Server error');
      setLoading(false);
    }
  };

  return { forgetpassword , loading};
};

export default useForgetPassword;
