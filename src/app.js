import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/routes.js';
import initStore from './store/initStore.js';
import './index.scss';

const store = initStore({});

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
