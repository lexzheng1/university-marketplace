// Commands to run in terminal:
// npx create-react-app client
// cd client
// npm install axios react-router-dom react-toastify redux react-redux redux-thunk redux-devtools-extension

// File: client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/add-product" component={ProductForm} />
            <PrivateRoute exact path="/add-service" component={ServiceForm} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/services" component={ServiceList} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/services/:id" component={ServiceDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
