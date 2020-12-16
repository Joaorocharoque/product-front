import React from 'react';
import Button from '@material-ui/core/Button';

import css from './Inputs.module.css';

const Inputs = React.memo((props) => {
  console.log(`Inputs RENDERING`);

  return (
    <div onSubmit={props.submit} className={css.Input}>
      <h2 id='simple-modal-title'>{props.add ? 'Add a User' : 'Edit the User'}</h2>
      <form>
        <div>
          <label className={css.Label} htmlFor='name'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            value={props.name}
            onChange={(event) => {
              props.inputName(event.target.value);
            }}></input>
        </div>
        <br></br>
        <div>
          <label className={css.Label} htmlFor='cpf'>Cpf:</label>
          <input type='text' id='cpf' value={props.cpf} onChange={(event) => {
              props.inputCpf(event.target.value); }}></input>
        </div>
        <br></br>
        <div>
          <label className={css.Label} htmlFor='email'>
            Email:
          </label>
          <input
            type='text'
            id='email'
            value={props.email}
            onChange={(event) => {
              props.inputEmail(event.target.value);
            }}></input>
        </div>
        <br></br>
        <div>
          <label className={css.Label} htmlFor='password'>Password:</label>
          <input type='text' id='password' value={props.password} onChange={(event) => {
              props.inputPassword(event.target.value); }}></input>
        </div>
        <br></br>
        <Button type='submit' color='primary' size='small'>
          {props.add ? 'ADD USER' : 'EDIT'}
        </Button>
      </form>
    </div>
  );
});

export default Inputs;
