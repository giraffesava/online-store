import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Ad.module.css';
import { AD_TYPES } from './ads';
import { incrementTickets, TicketType, decrementTickets } from '../../store/tickets/tickets.actions';
import ButtonsMenu from '../ButtonsMenu/ButtonsMenu';
import { selectStandardTicketCount, selectPremiumTicketCount, selectVipTicketCount } from '../../store/tickets/tickets.selectors';

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

  const standardCount = useSelector(selectStandardTicketCount);
  const premiumCount = useSelector(selectPremiumTicketCount);
  const vipCount = useSelector(selectVipTicketCount);

  const incrementTicketsHandler = (): void => {
    if (title === AD_TYPES.STANDARD) dispatch(incrementTickets(TicketType.standard));
    if (title === AD_TYPES.PREMIUM) dispatch(incrementTickets(TicketType.premium));
    if (title === AD_TYPES.VIP) dispatch(incrementTickets(TicketType.vip));
  };

  const decrementTicketsHandler = (): void => {
    if (title === AD_TYPES.STANDARD) dispatch(decrementTickets(TicketType.standard));
    if (title === AD_TYPES.PREMIUM) dispatch(decrementTickets(TicketType.premium));
    if (title === AD_TYPES.VIP) dispatch(decrementTickets(TicketType.vip));
  };

  const ticketsCounter = ():number => {
    if (title === AD_TYPES.STANDARD) return standardCount;
    if (title === AD_TYPES.PREMIUM) return premiumCount;
    if (title === AD_TYPES.VIP) return vipCount;
    return 0;
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
            ticketsCounter={ticketsCounter}
          />
        </div>
      </div>
    </div>
  );
};

export default Ad;
