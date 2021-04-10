/* eslint-disable import/no-unresolved */
import React from 'react';
import classes from './Header.module.css';
import cartImage from './cart.svg';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <a href="/"><h1>Sava&apos;s</h1></a>
      </div>
      <div className={classes.cart}>
        <a href="/">
          <p>Cart</p>
          <img className={classes.cartImg} src={cartImage} alt="cart" />
        </a>
      </div>
    </div>
  );
}

export default Header;
