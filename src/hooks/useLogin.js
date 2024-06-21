// src/hooks/useSignup.js
import { useState } from 'react';
import {loginUser} from "../services/authapi"
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const userData = await loginUser(data);
      localStorage.setItem('User', JSON.stringify(userData));
      setLoading(false);
      if(userData.role=="admin")
      {
        navigate('/admin/dashboard');
      }
      else if(userData.role=="patient")
      {
        navigate('/patient/dashboard');
      }
      else if(userData.role=="doctor")
      {
        navigate('/doctor/dashboard');
      }

    } catch (err) {
      setError(err.response ? err.response.data : 'Server error');
      setLoading(false);
    }
  };

  return { login, loading};
};

export default useLogin;
