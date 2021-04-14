import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Ad.module.css';
import Button from '../Button/Button';
import { AD_TYPES } from './ads';
import {
  decrementTicketsStandard,
  decrementTicketsPremium,
  decrementTicketsVip,
  incrementTicketsStandard,
  incrementTicketsPremium,
  incrementTicketsVip,
} from '../../store/actions/index';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface Props {
  title: AD_TYPES,
  description: string,
  url: string,
  price: string
}

const Ad:React.FC<Props> = ({
  title, description, url, price,
}) => {
  const {
    standardTickets,
    premiumTickets,
    vipTickets,
  } = useTypedSelector((state) => state.ticketsReducer);

  const dispatch = useDispatch();
  const incrementTicketsHandler = (): void => {
    if (title === 'STANDARD') {
      dispatch(incrementTicketsStandard());
    }
    if (title === 'PREMIUM') {
      dispatch(incrementTicketsPremium());
    }
    if (title === 'VIP') {
      dispatch(incrementTicketsVip());
    }
  };

  const decrementTicketsHandler = (): void => {
    if (title === 'STANDARD') {
      dispatch(decrementTicketsStandard());
    }
    if (title === 'PREMIUM') {
      dispatch(decrementTicketsPremium());
    }
    if (title === 'VIP') {
      dispatch(decrementTicketsVip());
    }
  };

  let ticketsCounter = 0;
  if (title === 'STANDARD') {
    ticketsCounter = standardTickets;
  }
  if (title === 'PREMIUM') {
    ticketsCounter = premiumTickets;
  }
  if (title === 'VIP') {
    ticketsCounter = vipTickets;
  }

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
        <div>
          <div className={classes.buttonsContainter}>
            <h3>
              Amount of tickets:
            </h3>
            <Button buttonType="decrement" onClick={decrementTicketsHandler} />
            <span>{`${ticketsCounter}`}</span>
            <Button buttonType="increment" onClick={incrementTicketsHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
