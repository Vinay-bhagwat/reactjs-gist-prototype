import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import allReducers from './reducers';
import AppRoutes from './routes';


const store = createStore(
  allReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
