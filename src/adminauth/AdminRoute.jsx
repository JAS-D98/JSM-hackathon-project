import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwt_decode(token);
  if (decodedToken.role !== 'ADMIN') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
