import React, { useState } from 'react';

import Inputs from '../UI/Inputs';

const AddCard = React.memo((props) => {
  console.log(`AddCard RENDERING`);

  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [brand, setBrand] = useState('');


  const submitHandler = (event) => {
    event.preventDefault();
    props.add({ name: name, flavor: flavor, price: price, expirationDate: expirationDate, brand: brand });
  };

  return (
    <Inputs
      add={true}
      submit={submitHandler}
      inputName={setName}
      inputFlavor={setFlavor}
      inputPrice={setPrice}
      inputExpirationDate={setExpirationDate}
      inputBrand={setBrand}
      >
    </Inputs>
  );
});

export default AddCard;
