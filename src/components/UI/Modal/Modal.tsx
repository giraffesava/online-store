import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import OrderMenu from '../OrderMenu/OrderMenu';
import Form from '../../Form/Form';

interface Props {
  overall: number
  standardTickets: number
  premiumTickets: number
  vipTickets: number
}

const Modal:React.FC<Props> = ({
  overall, standardTickets, premiumTickets, vipTickets,
}) => (ReactDOM.createPortal((
  <>
    <Backdrop />
    <div className={classes.container}>
      <div className={classes.ticketsMenu}>
        <h1>Your order:</h1>
        {overall ? (
          <div className={classes.order}>
            <OrderMenu ticketType={standardTickets} price={250}>Standard</OrderMenu>
            <OrderMenu ticketType={premiumTickets} price={450}>Standard</OrderMenu>
            <OrderMenu ticketType={vipTickets} price={850}>Standard</OrderMenu>
          </div>
        ) : <p className={classes.chooseTitle}>Please choose any program</p>}
        <div className={classes.formContainer}>
          <Form overall={overall} />
        </div>
      </div>
    </div>
  </>
), document.getElementById('portal')!));

export default Modal;
