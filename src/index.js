import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import './index.css';
import Login from './login/Login';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);