import React, { Fragment, useState, useEffect } from 'react';
import apiProdReport from '../apiProdReport';
import CardList from './containers/Cards/CardsList';

const AppProductReport = () => {
  console.log(`App RENDERING`);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    apiProdReport.get().then(response => {
        setProductsList(response.data);
      });
  }, [])

  async function onRemoveItemHandler(id){
    await apiProdReport.delete("/" + id).then(response => {
        console.log(response)
    });

    await apiProdReport.get().then(response => {
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
