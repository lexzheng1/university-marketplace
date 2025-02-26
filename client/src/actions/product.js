import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR
} from './types';

// Get all products
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get product by ID
export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add product
export const addProduct = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    const res = await axios.post('/api/products', formData, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });

    toast.success('Product added');
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error('Error adding product');
  }
};

// Delete product
export const deleteProduct = id => async dispatch => {
  try {
    await axios.delete(`/api/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });

    toast.success('Product removed');
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};