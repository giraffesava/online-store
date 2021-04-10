/* eslint-disable import/no-unresolved */
import React from 'react';
import classes from './Header.module.css';
import cartImage from './cart.svg';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>Sava&apos;s</h1>
      </div>
      <div className={classes.cart}>
        <p>
          Cart
        </p>
        <img className={classes.cartImg} src={cartImage} alt="cart" />
      </div>
    </div>
  );
}

export default Header;
