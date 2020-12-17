import React, { Fragment, useState, useEffect } from 'react';
import CardList from './containers/Cards/CardsList';
import api from '../api';

const AppProduct = () => {
  console.log(`App RENDERING`);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
      api.get().then(response => {
        setProductsList(response.data);
      });
  }, [productsList])

  async function onRemoveItemHandler(id){
        await api.delete("/" + id).then(response => {
            console.log(response)
        });

        await api.get().then(response => {
            setProductsList(response.data);
        });
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

  async function onAddItemHandler(product){
        const response = await api.post("", { 
            price: product.price,
            flavor: product.flavor, 
            name: product.name,
            expirationDate: product.expirationDate,
            brand: product.brand
        });

        const prod = response.data;

        setProductsList([...productsList, prod]);
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
