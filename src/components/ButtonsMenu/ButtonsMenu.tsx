import React from 'react';
import Button from '../UI/Button/Button';
import classes from './ButtonsMenu.module.css';

interface Props {
  ticketsCounter: () => number
  decrementTicketsHandler?: () => void
  incrementTicketsHandler?: () => void
}

const ButtonsMenu:React.FC<Props> = ({
  decrementTicketsHandler,
  incrementTicketsHandler,
  ticketsCounter,
}) => (
  <>
    <Button buttonType="decrement" onClick={decrementTicketsHandler} disabled={!ticketsCounter()}>-</Button>
    <span className={classes.span}>{ticketsCounter()}</span>
    <Button buttonType="increment" onClick={incrementTicketsHandler}>+</Button>
  </>
);
export default ButtonsMenu;
