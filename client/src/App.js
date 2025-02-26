import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ProductForm from './components/products/ProductForm';
import ServiceForm from './components/services/ServiceForm';
import ProductList from './components/products/ProductList';
import ServiceList from './components/services/ServiceList';
import ProductDetail from './components/products/ProductDetail';
import ServiceDetail from './components/services/ServiceDetail';
import PrivateRoute from './components/routing/PrivateRoute';

// CSS
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/add-product" element={
              <PrivateRoute>
                <ProductForm />
              </PrivateRoute>
            } />
            <Route path="/add-service" element={
              <PrivateRoute>
                <ServiceForm />
              </PrivateRoute>
            } />
            <Route path="/products" element={<ProductList />} />
            <Route path="/services" element={<ServiceList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
