import React, { useState } from 'react';
import AppProduct from './products/AppProduct';
import AppUser from './users/AppUser';
import AppProductReport from './products-report/AppProductReport';
import apiGateway from "./apiGateway";

export default function Menu() {
  apiGateway.post("/authenticate", {
        username:"jaquirocha@gmail.com",
        password:"1234"
  }).then(response => {
    console.log("aqui");
    console.log(response.data.token);
    localStorage.setItem("@token", response.data.token);
  });

  function getHeader(){
    return {
      headers: { Authorization: "Bearer ".concat(localStorage.getItem("@token")) }
    };
  }
  
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
        {toggle === 'U' && <AppUser getHeader={getHeader}/> }
        {toggle === 'P' && <AppProduct getHeader={getHeader}/> }
        {toggle === 'R' && <AppProductReport/> }
      </div>
  );
}
