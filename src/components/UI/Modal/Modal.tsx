/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

interface Props {
  modalhandler: () => void
  overall: number
  standardTickets: number
  premiumTickets: number
  vipTickets: number
}

const Modal:React.FC<Props> = ({
  modalhandler, overall, standardTickets, premiumTickets, vipTickets,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [promo, setPromo] = useState('');

  const nameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const promoHandler = (e:React.ChangeEvent<HTMLInputElement>):number => {
    setPromo(e.target.value);
    return promo === 'hello' ? overall * 0.90 : overall;
  };

  return (ReactDOM.createPortal((
    <>
      <Backdrop modalhandler={modalhandler} />
      <div className={classes.container}>
        <div className={classes.ticketsMenu}>
          <h1>Your order:</h1>
          <ul>
            {!!standardTickets && (
            <li>Standard: {standardTickets}
              {standardTickets === 1 ? ' ticket' : ' tickets'}
            </li>
            )}
            {!!premiumTickets && (
            <li>Premium: {premiumTickets}
              {premiumTickets === 1 ? ' ticket' : ' tickets'}
            </li>
            )}
            {!!vipTickets && (
            <li>Vip: {vipTickets}
              {vipTickets === 1 ? ' ticket' : ' tickets'}
            </li>
            )}
          </ul>
          <form>
            <h3>Your name: </h3><input placeholder="Your name" value={name} type="text" onChange={nameHandler} />
            <h3>Your email: </h3><input placeholder="Your email" value={email} type="email" onChange={emailHandler} />
            <h3>Promo: </h3><input placeholder="Promo" value={promo} type="text" onChange={promoHandler} />
            <button disabled type="submit">Submit</button>
          </form>
          <h1>
            Overall:
            {` ${promo === 'Sava' ? overall * 0.90 : overall}$`}
          </h1>
        </div>
      </div>
    </>
  ), document.getElementById('portal')!));
};

export default Modal;
