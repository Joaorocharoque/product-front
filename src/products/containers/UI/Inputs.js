import React from 'react';
import Button from '@material-ui/core/Button';

import css from './Inputs.module.css';

const Inputs = React.memo((props) => {
  console.log(`Inputs RENDERING`);

  return (
    <div onSubmit={props.submit} className={css.Input}>
      <h2 id='simple-modal-title'>{props.add ? 'Add a Product' : 'Edit the Product'}</h2>
      <form>
        <div>
          <label className={css.Label} htmlFor='name'>
            Name
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
          <label className={css.Label} htmlFor='flavor'>Flavor</label>
          <input type='text' id='flavor' value={props.flavor} onChange={(event) => {
              props.inputFlavor(event.target.value); }}></input>
        </div>
        <br></br>
        <div>
          <label className={css.Label} htmlFor='price'>
            Price
          </label>
          <input
            type='text'
            id='price'
            value={props.price}
            onChange={(event) => {
              props.inputPrice(event.target.value);
            }}></input>
        </div>
        <br></br>
        <div>
          <label className={css.Label} htmlFor='expirationDate'>Expiration Date</label>
          <input type='text' id='expirationDate' value={props.expirationDate} onChange={(event) => {
              props.inputExpirationDate(event.target.value); }}></input>
        </div>
        <br></br>
        <div>
          <label className={css.Label} htmlFor='brand'>Brand</label>
          <input type='text' id='brand' value={props.brand} onChange={(event) => {
              props.inputBrand(event.target.value); }}></input>
        </div>
        <br></br>
        <Button type='submit' color='primary' size='small'>
          {props.add ? 'ADD PRODUCT' : 'EDIT'}
        </Button>
      </form>
    </div>
  );
});

export default Inputs;
