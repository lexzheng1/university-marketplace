// client/src/components/auth/Register.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { toast } from 'react-toastify';
import './Auth.css';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    university: ''
  });

  const { name, email, password, password2, university } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      register({ name, email, password, university });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">UniMarket</div>
        <h1 className="auth-title">Sign Up</h1>
        <p className="auth-subtitle">Create your account to start buying and selling</p>
        
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="John Doe"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="johndoe@university.edu"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <small className="form-text">Please use your university email if possible</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="university">University</label>
            <input
              type="text"
              id="university"
              className="form-control"
              placeholder="State University"
              name="university"
              value={university}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="••••••••"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              className="form-control"
              placeholder="••••••••"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
              required
            />
          </div>
          
          <button type="submit" className="btn-primary">Create Account</button>
        </form>
        
        <div className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
