import React from 'react';
import classes from './Ad.module.css';
import { Ticket } from '../../store/types';
import ButtonsMenu from '../ButtonsMenu/ButtonsMenu';

const Ad:React.FC<Ticket> = ({
  ticketType, description, url, price, tickets,
}) => (
  <div className={classes.adContainer}>
    <div className={classes.ad}>
      <h1>{ticketType}</h1>
      <img src={url} alt="USA" />
      <h3>{description}</h3>
      <h3 className={classes.price}>
        Price:
        { price}
      </h3>
      <div className={classes.buttonsContainter}>
        <h3>
          Amount of tickets:
        </h3>
        <ButtonsMenu ticketType={ticketType} ticketsCount={tickets} />
      </div>
    </div>
  </div>
);

export default Ad;
