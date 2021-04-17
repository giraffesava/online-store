/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import tooltip from './tooltip.svg';
import {
  resetTicketsStandard,
  resetTicketsPremium,
  resetTicketsVip,
} from '../../../store/actions/index';
import OrderMenu from '../OrderMenu/OrderMenu';

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

  const dispatch = useDispatch();

  const nameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const promoHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPromo(e.target.value);
  };

  const submitHandler = (e:React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetTicketsStandard());
    dispatch(resetTicketsPremium());
    dispatch(resetTicketsVip());
  };

  return (ReactDOM.createPortal((
    <>
      <Backdrop modalhandler={modalhandler} />
      <div className={classes.container}>
        <div className={classes.ticketsMenu}>
          <h1>Your order:</h1>
          <div className={classes.order}>
            <OrderMenu ticketType={standardTickets} price={250}>Standard</OrderMenu>
            <OrderMenu ticketType={premiumTickets} price={450}>Standard</OrderMenu>
            <OrderMenu ticketType={vipTickets} price={850}>Standard</OrderMenu>
          </div>
          <h2 className={classes.overall}>
            Overall:
            {` ${promo === 'Sava' ? overall * 0.85 : overall}$`}
          </h2>
          <div className={classes.formContainer}>
            <form>
              <h3>Your name: </h3><input placeholder="Name" value={name} type="text" minLength={4} onChange={nameHandler} />
              <h3>Your email: </h3><input placeholder="Email" value={email} type="email" onChange={emailHandler} />
              <h3>Promo<div className={classes.tooltip}><img src={tooltip} alt="vav" data-tip="The name of the creator of this site(look header)" /><ReactTooltip font-size="50px" /></div>:
              </h3><input placeholder="Promo" value={promo} type="text" onChange={promoHandler} />
              <Button onClick={submitHandler} check={!(name.length >= 4) || !(email.length >= 4)} buttonType="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  ), document.getElementById('portal')!));
};

export default Modal;
