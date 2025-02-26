import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">Welcome to your dashboard</p>
      <div className="dash-buttons">
        <Link to="/add-product" className="btn btn-light">
          <i className="fas fa-plus"></i> Add Product
        </Link>
        <Link to="/add-service" className="btn btn-light">
          <i className="fas fa-plus"></i> Add Service
        </Link>
      </div>
      <h2 className="my-2">Your Products</h2>
      <p>You haven't listed any products yet.</p>
      <h2 className="my-2">Your Services</h2>
      <p>You haven't listed any services yet.</p>
    </section>
  );
};

export default Dashboard;
