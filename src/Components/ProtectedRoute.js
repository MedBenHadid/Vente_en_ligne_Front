// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        // AuthService.isAuthenticated() ? (
          <Component {...props} />
        // ) : (
        //   <Navigate to="/login" />
        // )
      }
    />
  );
};

export default ProtectedRoute;
