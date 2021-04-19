import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Ad.module.css';
import { AD_TYPES } from './ads';
import { incrementTickets, TicketType, decrementTickets } from '../../store/tickets/tickets.actions';
import ButtonsMenu from '../ButtonsMenu/ButtonsMenu';

interface Props {
  title: AD_TYPES,
  description: string,
  url: string,
  price: string
}

const Ad:React.FC<Props> = ({
  title, description, url, price,
}) => {
  const dispatch = useDispatch();

  const incrementTicketsHandler = (): void => {
    if (title === 'STANDARD') dispatch(incrementTickets(TicketType.standard));
    if (title === 'PREMIUM') dispatch(incrementTickets(TicketType.premium));
    if (title === 'VIP') dispatch(incrementTickets(TicketType.vip));
  };

  const decrementTicketsHandler = (): void => {
    if (title === 'STANDARD') dispatch(decrementTickets(TicketType.standard));
    if (title === 'PREMIUM') dispatch(decrementTickets(TicketType.premium));
    if (title === 'VIP') dispatch(decrementTickets(TicketType.vip));
  };

  return (
    <div className={classes.adContainer}>
      <div className={classes.ad}>
        <h1>{title}</h1>
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
          <ButtonsMenu
            incrementTicketsHandler={incrementTicketsHandler}
            decrementTicketsHandler={decrementTicketsHandler}
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Ad;
