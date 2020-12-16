import React, { useState } from 'react';

import Inputs from '../UI/Inputs';

const EditCard = React.memo((props) => {
  console.log(`EditCard RENDERING`);

  const [name, setName] = useState(props.product.name);
  const [flavor, setFlavor] = useState(props.product.flavor);
  const [price, setPrice] = useState(props.product.price);
  const [expirationDate, setExpirationDate] = useState(props.product.expirationDate);
  const [brand, setBrand] = useState(props.product.brand);

  const submitHandler = (event) => {
    event.preventDefault();
    props.edit({ id: props.product.id, name: name, flavor: flavor, price: price, expirationDate: expirationDate, brand: brand });
    props.close();
  };

  return (
    <Inputs
      add={false}
      submit={submitHandler}
      name={name}
      flavor={flavor}
      price={price}
      expirationDate={expirationDate}
      brand={brand}
      inputName={setName}
      inputFlavor={setFlavor}
      inputPrice={setPrice}
      inputExpirationDate={setExpirationDate}
      inputBrand={setBrand}
      >
    </Inputs>
  );
});

export default EditCard;
