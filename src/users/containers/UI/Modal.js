import React from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transition: 'all 0.3s ease-out',
  },
}));

const UIModal = (props) => {
  console.log(`UIModal RENDERING`);

  const classes = styles();
  return (
    <Modal
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={props.isOpen}
      onClose={props.close}>
      <div className={classes.paper}>{props.children}</div>
    </Modal>
  );
};

export default UIModal;
