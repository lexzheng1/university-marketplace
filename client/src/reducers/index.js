// File: client/src/reducers/index.js
import { combineReducers } from 'redux';
import auth from './auth';
import product from './product';
import service from './service';
import alert from './alert';

export default combineReducers({
  auth,
  product,
  service,
  alert
});