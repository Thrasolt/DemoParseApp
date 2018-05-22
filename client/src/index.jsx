import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import axios from "axios";

import store from './data/store.js'

import App from './components/App.jsx'
import ArticleDetail from './components/ArticleDetail.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const css = require('./styles/index.css')
const anchor = document.getElementById('app');

ReactDOM.render(
  (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/:slug" component={ArticleDetail} />
      </div>
    </Router>
  </Provider>
  ),
anchor);
//module.hot.accept();
