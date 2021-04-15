/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import classes from './Header.module.css';
import cartImage from './cart.svg';
import Modal from '../UI/Modal/Modal';

function Header() {
  const [modal, setModal] = useState(false);

  const modalHandler = ():void => {
    setModal((prev) => !prev);
    console.log(modal);
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <h1>Sava&apos;s</h1>
        </div>
        <div className={classes.cart}>
          <div className={classes.cart_button} onClick={modalHandler} role="button">
            <p>Cart</p>
            <img className={classes.cartImg} src={cartImage} alt="cart" />
          </div>
        </div>
      </div>
      {!!modal && <Modal modalhandler={modalHandler} />}
    </>
  );
}

export default Header;
