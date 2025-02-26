import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_SERVICES,
  GET_SERVICE,
  ADD_SERVICE,
  DELETE_SERVICE,
  SERVICE_ERROR
} from './types';

// Get all services
export const getServices = () => async dispatch => {
  try {
    const res = await axios.get('/api/services');

    dispatch({
      type: GET_SERVICES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get service by ID
export const getService = id => async dispatch => {
  try {
    const res = await axios.get(`/api/services/${id}`);

    dispatch({
      type: GET_SERVICE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add service
export const addService = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    const res = await axios.post('/api/services', formData, config);

    dispatch({
      type: ADD_SERVICE,
      payload: res.data
    });

    toast.success('Service added');
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error('Error adding service');
  }
};

// Delete service
export const deleteService = id => async dispatch => {
  try {
    await axios.delete(`/api/services/${id}`);

    dispatch({
      type: DELETE_SERVICE,
      payload: id
    });

    toast.success('Service removed');
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};