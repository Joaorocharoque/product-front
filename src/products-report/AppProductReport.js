import React, { Fragment, useState, useEffect } from 'react';
import CardList from './containers/Cards/CardsList';
import apiGateway from "../apiGateway";

const AppProductReport = (props) => {

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    apiGateway.get("/product/expired", props.getHeader()).then(response => {
        setProductsList(response.data);
      });
  }, [])

  async function onRemoveItemHandler(id){
    await apiGateway.delete("/product/" + id, props.getHeader()).then(response => {
    });

    await apiGateway.get("/product/expired", props.getHeader()).then(response => {
      setProductsList(response.data);
  });
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
