import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import axios from "axios";
import App from './components/App.jsx'

import store from './data/store.js'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const css = require('./styles/index.css')
const anchor = document.getElementById('app');

ReactDOM.render(
  (
  <Provider store={store}>
    <App/>
  </Provider>
  ),
anchor);
//module.hot.accept();
