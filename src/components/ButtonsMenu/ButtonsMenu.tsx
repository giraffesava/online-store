import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import classes from './ButtonsMenu.module.css';
import { TicketType, decrementTickets, incrementTickets } from '../../store/tickets/tickets.actions';

interface Props {
  ticketType: TicketType,
  ticketsCount: number
}

const ButtonsMenu:React.FC<Props> = ({ ticketType, ticketsCount }) => {
  const dispatch = useDispatch();

  const decrementTicketsHandler = () => {
    dispatch(decrementTickets(ticketType));
  };

  const incrementTicketsHandler = () => {
    dispatch(incrementTickets(ticketType));
  };

  return (
    <>
      <Button buttonType="decrement" onClick={decrementTicketsHandler} disabled={!ticketsCount}>-</Button>
      <span className={classes.span}>{ticketsCount}</span>
      <Button buttonType="increment" onClick={incrementTicketsHandler}>+</Button>
    </>
  );
};
export default ButtonsMenu;
