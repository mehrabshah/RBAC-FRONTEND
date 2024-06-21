// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const { authState } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                authState && roles.includes(authState.user.role) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
