/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface Props {
  modalhandler: () => void
}

const Modal:React.FC<Props> = ({ modalhandler }) => {
  const { standardTickets } = useTypedSelector((state) => state.standardReducer);
  const { premiumTickets } = useTypedSelector((state) => state.premiumReducer);
  const { vipTickets } = useTypedSelector((state) => state.vipReducer);
  return (
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
            {`${(standardTickets * 250) + (premiumTickets * 450) + (vipTickets * 850)}$`}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Modal;
