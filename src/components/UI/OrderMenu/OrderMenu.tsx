import React from 'react';
import classes from './OrderMenu.module.css';

interface Props {
  ticketType: number,
  price: number,
  children: string
}

const OrderMenu:React.FC<Props> = ({ ticketType, price, children }):any => (
  !!ticketType && (
  <p>
    {children}
    :
    {` ${ticketType}`}
    {ticketType === 1 ? ' ticket' : ' tickets'}
    <span className={classes.transcript}>{`${ticketType} × ${price}$ = ${ticketType * price}$`}</span>
  </p>
  )
);

export default OrderMenu;
