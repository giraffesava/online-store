/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './Backdrop.module.css';

interface Props {
  modalhandler: () => void
}

const Backdrop:React.FC<Props> = ({ modalhandler }) => (
  <div className={classes.backdrop} onClick={modalhandler} />
);

export default Backdrop;
