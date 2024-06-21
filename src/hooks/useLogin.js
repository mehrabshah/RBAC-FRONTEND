// src/hooks/useSignup.js
import { useState } from 'react';
import {loginUser} from "../services/authapi"
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setAuthInfo } = useAuth();
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await loginUser(data);
      setLoading(false);
      setAuthInfo(response);
      if(response.role=="admin")
      {
        navigate('/admin');
      }
      else if(response.role=="patient")
      {
        navigate('/patient');
      }
      else if(response.role=="doctor")
      {
        navigate('/doctor');
      }

    } catch (err) {
      setError(err.response ? err.response.data : 'Server error');
      setLoading(false);
    }
  };

  return { login, loading};
};

export default useLogin;
