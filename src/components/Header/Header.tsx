/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import cartImage from './cart.svg';
import Modal from '../UI/Modal/Modal';
import { selectStandardTicketCount, selectPremiumTicketCount, selectVipTicketCount } from '../../store/tickets/tickets.selectors';
import { modalIsOff, modalIsOn } from '../../store/modal/modal.actions';
import { selectModal } from '../../store/modal/modal.selector';

function Header() {
  // const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const standardTickets = useSelector(selectStandardTicketCount);
  const premiumTickets = useSelector(selectPremiumTicketCount);
  const vipTickets = useSelector(selectVipTicketCount);

  const modal = useSelector(selectModal);

  const modalHandler = ():void => {
    // setModal((prev) => !prev);
    dispatch(modalIsOn());
  };

  const overall = (standardTickets * 250) + (premiumTickets * 450) + (vipTickets * 850);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <h1>Sava&apos;s</h1>
        </div>
        {!!overall && <span className={classes.purchase}>Click here to purchase &rarr;</span>}
        {!!overall && <span className={classes.overall}>{`${overall}$`}</span>}
        <div className={classes.cart}>
          <div className={classes.cart_button} onClick={modalHandler} role="button">
            <p>Cart</p>
            <img className={classes.cartImg} src={cartImage} alt="cart" />
          </div>
        </div>
      </div>
      {modal && (
      <Modal
        overall={overall}
        standardTickets={standardTickets}
        premiumTickets={premiumTickets}
        vipTickets={vipTickets}
      />
      )}
    </>
  );
}

export default Header;
