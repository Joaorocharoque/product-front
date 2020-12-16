import React, { Fragment, useState } from 'react';
import CardList from './containers/Cards/CardsList';

const AppProduct = () => {
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

  const onEditItemHandler = (editedProduct) => {
    setProductsList(products => 
      products.map(product => product.id === editedProduct.id ? 
        {
          ...product,
          name: editedProduct.name,
          flavor: editedProduct.flavor,
          price: editedProduct.price,
          expirationDate:editedProduct.expirationDate,
          brand: editedProduct.brand
        } 
        : product) 
    )
  };

  const onAddItemHandler = (product) => {
    setProductsList(products => [
      ...products, 
      { id: Math.random().toString().substring(),
        price: product.price,
        flavor: product.flavor, 
        name: product.name,
        expirationDate: product.expirationDate,
        brand: product.brand
      }
    ])
  };

  return (
    <Fragment>
      <main>
        <CardList products={productsList} remove={onRemoveItemHandler} edit={onEditItemHandler} add={onAddItemHandler} />
      </main>
    </Fragment>
  );
};

export default AppProduct;
