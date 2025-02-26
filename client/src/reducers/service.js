import {
    GET_SERVICES,
    GET_SERVICE,
    ADD_SERVICE,
    DELETE_SERVICE,
    SERVICE_ERROR
  } from '../actions/types';
  
  const initialState = {
    services: [],
    service: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_SERVICES:
        return {
          ...state,
          services: payload,
          loading: false
        };
      case GET_SERVICE:
        return {
          ...state,
          service: payload,
          loading: false
        };
      case ADD_SERVICE:
        return {
          ...state,
          services: [payload, ...state.services],
          loading: false
        };
      case DELETE_SERVICE:
        return {
          ...state,
          services: state.services.filter(service => service._id !== payload),
          loading: false
        };
      case SERVICE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }