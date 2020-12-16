import React, { useState } from 'react';

import Inputs from '../UI/Inputs';

const AddCard = React.memo((props) => {
  console.log(`AddCard RENDERING`);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const submitHandler = (event) => {
    event.preventDefault();
    props.add({ name: name, cpf: cpf, email: email, password: password});
  };

  return (
    <Inputs
      add={true}
      submit={submitHandler}
      name={name}
      cpf={cpf}
      email={email}
      password={password}
      inputName={setName}
      inputCpf={setCpf}
      inputEmail={setEmail}
      inputPassword={setPassword}
      >
    </Inputs>
  );
});

export default AddCard;
