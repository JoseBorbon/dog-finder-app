import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/dog-finder-app">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
