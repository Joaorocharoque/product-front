import React, { useState } from 'react';

import Inputs from '../UI/Inputs';

const EditCard = React.memo((props) => {
  console.log(`EditCard RENDERING`);

  const [name, setName] = useState(props.user.name);
  const [cpf, setCpf] = useState(props.user.cpf);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);

  const submitHandler = (event) => {
    event.preventDefault();
    props.edit({ id: props.user.id, name: name, cpf: cpf, email: email, password: password});
    props.close();
  };

  return (
    <Inputs
      add={false}
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

export default EditCard;
