// src/components/ProtectedRoute.js
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useCurrentUser();
  // If current user is not authenticated and data received undefined, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, navigate, isLoading]);

  // Show spinner while validating current user
  
  // If there is a user, render the app
  if (true) return children;
}

export default ProtectedRoute;

