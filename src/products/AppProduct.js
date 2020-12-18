import React, { Fragment, useState, useEffect } from 'react';
import CardList from './containers/Cards/CardsList';
import apiGateway from "../apiGateway";

const AppProduct = (props) => {
  console.log(`App RENDERING`);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {  
    apiGateway.get("/product", props.getHeader()).then(response => {
      setProductsList(response.data);
    });
  }, [])

  async function onRemoveItemHandler(id){
    await apiGateway.delete("/product/" + id, props.getHeader());

    await apiGateway.get("/product", props.getHeader()).then(response => {
        setProductsList(response.data);
    });
  };

  async function onEditItemHandler(editedProduct){
    await apiGateway.put("/product/" + editedProduct.id,{
      name: editedProduct.name,
      flavor: editedProduct.flavor,
      price: editedProduct.price,
      expirationDate:editedProduct.expirationDate,
      brand: editedProduct.brand
    }, props.getHeader());

    await apiGateway.get("/product", props.getHeader()).then(response => {
      setProductsList(response.data);
    });
  };

  async function onAddItemHandler(product){
    const response = await apiGateway.post("/product", { 
        price: product.price,
        flavor: product.flavor, 
        name: product.name,
        expirationDate: product.expirationDate,
        brand: product.brand
    }, props.getHeader());

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
