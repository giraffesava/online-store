/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Backdrop.module.css';
import { modalIsOff } from '../../../store/modal/modal.actions';

const Backdrop = () => {
  const dispatch = useDispatch();

  const ModalOffHandler = () => {
    dispatch(modalIsOff());
  };
  return (
    <div className={classes.backdrop} onClick={ModalOffHandler} />
  );
};

export default Backdrop;
