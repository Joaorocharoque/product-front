import React from 'react';
import ReactDOM from 'react-dom';
import AppProduct from './products/AppProduct';
import AppUser from './users/AppUser';
import AppProductReport from './products-report/AppProductReport';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProduct />
    <AppUser />
    <AppProductReport />
  </React.StrictMode>,
  document.getElementById('root')
);