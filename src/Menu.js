import React, { useState } from 'react';
import AppProduct from './products/AppProduct';
import AppUser from './users/AppUser';
import AppProductReport from './products-report/AppProductReport';

export default function Menu() {
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
          {toggle === 'U' && <AppUser /> }
          {toggle === 'P' && <AppProduct /> }
          {toggle === 'R' && <AppProductReport /> }
       </div>
    );
  }
