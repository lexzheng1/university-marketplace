import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth }) => {
  if (!auth.isAuthenticated && !auth.loading) {
    return <Navigate to="/login" />;
  }
  return children;
};

const mapStateToProps = state => ({
  auth: state.auth || { isAuthenticated: false, loading: true }
});

export default connect(mapStateToProps)(PrivateRoute);
