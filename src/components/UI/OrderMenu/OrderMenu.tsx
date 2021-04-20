import React from 'react';
import classes from './OrderMenu.module.css';

interface Props {
  tickets: number,
  price: number,
  children: string
}

const OrderMenu:React.FC<Props> = ({ tickets, price, children }):any => (
  !!tickets && (
  <p>
    {children}
    :
    {` ${tickets}`}
    {tickets === 1 ? ' ticket' : ' tickets'}
    <span className={classes.transcript}>{`${tickets} × ${price}$ = ${tickets * price}$`}</span>
  </p>
  )
);

export default OrderMenu;
