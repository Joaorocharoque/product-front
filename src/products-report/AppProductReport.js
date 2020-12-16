import React, { Fragment, useState } from 'react';
import CardList from './containers/Cards/CardsList';

const AppProductReport = () => {
  console.log(`App RENDERING`);


  const [productsList, setProductsList] = useState([
    { id: Math.random().toString(36).substring(7), name: 'brownie', flavor: 'chocolate', price: 14.90, expirationDate: '2021-01-01', brand:'Divine'},
    { id: Math.random().toString(36).substring(7), name: 'cookie', flavor: 'chocolate', price: 8.90, expirationDate: '2021-01-01', brand:'Divine' },
    { id: Math.random().toString(36).substring(7), name: 'cup cake', flavor: 'chocolate', price: 4.90, expirationDate: '2021-01-01', brand:'Divine' },
    { id: Math.random().toString(36).substring(7), name: 'Smoothing', flavor: 'fruit', price: 10.90, expirationDate: '2021-01-01', brand:'Divine' },
  ]);

  const onRemoveItemHandler = (id) => {
    setProductsList(products => 
      products.filter(product => product.id !== id))
  };

  return (
    <Fragment>
      <main>
        <CardList products={productsList} remove={onRemoveItemHandler}/>
      </main>
    </Fragment>
  );
};

export default AppProductReport;
