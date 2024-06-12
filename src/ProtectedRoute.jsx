import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const username = localStorage.getItem('username');

    return username ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
