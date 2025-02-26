import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <a href="#!" onClick={() => {}}>
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-graduation-cap"></i> UniMarket
        </Link>
      </h1>
      {!loading && (
        <>{isAuthenticated ? authLinks : guestLinks}</>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth || { isAuthenticated: false, loading: true }
});

export default connect(mapStateToProps)(Navbar);