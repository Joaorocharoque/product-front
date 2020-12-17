import React, { Fragment, useState, useEffect } from 'react';
import CardList from './containers/Cards/CardsList';
import apiProduct from '../apiProduct';

const AppProduct = () => {
  console.log(`App RENDERING`);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    apiProduct.get().then(response => {
        setProductsList(response.data);
      });
  }, [])

  async function onRemoveItemHandler(id){
        await apiProduct.delete("/" + id).then(response => {
            console.log(response)
        });

        await apiProduct.get().then(response => {
            setProductsList(response.data);
        });
  };

  async function onEditItemHandler(editedProduct){
    await apiProduct.put("/" + editedProduct.id,{
          name: editedProduct.name,
          flavor: editedProduct.flavor,
          price: editedProduct.price,
          expirationDate:editedProduct.expirationDate,
          brand: editedProduct.brand
        });

        await apiProduct.get().then(response => {
          setProductsList(response.data);
      });
        
  };

  async function onAddItemHandler(product){
        const response = await apiProduct.post("", { 
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
