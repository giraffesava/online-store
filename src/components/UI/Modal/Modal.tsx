/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
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
}) => ReactDOM.createPortal((
  <>
    <Backdrop modalhandler={modalhandler} />
    <div className={classes.container}>
      <div className={classes.ticketsMenu}>
        <h1>Your order:</h1>
        <ul>
          {!!standardTickets && <li>Standard:{standardTickets}</li>}
          {!!premiumTickets && <li>Premium:{premiumTickets}</li>}
          {!!vipTickets && <li>Vip:{vipTickets}</li>}
        </ul>
        <h1>
          Overall:
          {` ${overall}$`}
        </h1>
      </div>
    </div>
  </>
), document.getElementById('portal')!);

export default Modal;
