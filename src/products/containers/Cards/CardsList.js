import React, { Fragment, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import UIModal from '../UI/Modal';
import AddCard from './AddCard';
import EditCard from './EditCard';

import { makeStyles } from '@material-ui/core/styles';
import css from './CardsList.module.css';

const styles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
    margin: 15,
  },
});

const CardsList = React.memo((props) => {
  console.log(`CardsList RENDERING`);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const classes = styles();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const openEditorHandler = (product) => {
    setOpen(true)
    setSelectedProduct(product)
  ;}

  const closeEditorHandler = () => {
    setOpen(false)
  };

  const cards = props.products
    .filter(item => item.name.toLowerCase().includes(searchTerm))
    .map((item, index) => (
        <Card key={index} className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
              Product {index}
            </Typography>
            <Typography variant='h5' component='h5'>
              Name: {item.name}
            </Typography>
            <Typography variant='body1' component='p'>
              Flavor: {item.flavor}
            </Typography>
            <Typography variant='body2' component='p'>
              Price: {item.price}
            </Typography>
            <Typography variant='body3' component='p'>
              Expiration Date: {item.expirationDate}
            </Typography>
            <Typography variant='body4' component='p'>
              Brand: {item.brand}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' size='small' onClick={openEditorHandler.bind(this, item)}>
              EDIT
            </Button>
            <Button color='secondary' size='small' onClick={() => props.remove(item.id)} >
              Delete
            </Button>
          </CardActions>
        </Card>
  ));

  return (
    <Fragment>
      <div className={css.CardList}>
        <AddCard add={props.add}/>
      </div>
      <h2 className={css.Title}>Products</h2>
      <div className={css.CardList}>
        <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      <div className={css.CardList}>{cards}</div>
      <UIModal isOpen={open} close={closeEditorHandler}>
        <EditCard product={selectedProduct} edit={props.edit} close={closeEditorHandler}></EditCard>
      </UIModal>
    </Fragment>
  );
});

export default CardsList;
