import React, { useState } from 'react';
import AppProduct from './products/AppProduct';
import AppUser from './users/AppUser';
import AppProductReport from './products-report/AppProductReport';
import apiGateway from "./apiGateway";

export default function Menu(props) {
  
  const [toggle, setToggle] = useState('P');
  const toggleChecked = (type) => setToggle(toggle => type);
  return (
      <div>
          <a class="topnav" onClick={toggleChecked.bind(this, 'P')}>Product</a>
          <a class="topnav" onClick={toggleChecked.bind(this, 'U')}>User</a>
          <a class="topnav" onClick={toggleChecked.bind(this, 'R')}>Report</a>
          <br></br>
          <br></br>
          <br></br>
        {toggle === 'U' && <AppUser getHeader={props.getHeader}/> }
        {toggle === 'P' && <AppProduct getHeader={props.getHeader}/> }
        {toggle === 'R' && <AppProductReport getHeader={props.getHeader}/> }
      </div>
  );
}
