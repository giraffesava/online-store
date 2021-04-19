import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import { AD_TYPES } from '../Ad/ads';
import classes from './ButtonsMenu.module.css';
import { selectStandardTicketCount, selectPremiumTicketCount, selectVipTicketCount } from '../../store/tickets/tickets.selectors';

interface Props {
  title: AD_TYPES
  decrementTicketsHandler?: () => void
  incrementTicketsHandler?: () => void
}

const ButtonsMenu:React.FC<Props> = ({
  title,
  decrementTicketsHandler,
  incrementTicketsHandler,
}) => {
  const standardCount = useSelector(selectStandardTicketCount);
  const premiumCount = useSelector(selectPremiumTicketCount);
  const vipCount = useSelector(selectVipTicketCount);

  const ticketsCounter = ():number => {
    if (title === 'STANDARD') return standardCount;
    if (title === 'PREMIUM') return premiumCount;
    if (title === 'VIP') return vipCount;
    return 0;
  };

  return (
    <>
      <Button buttonType="decrement" onClick={decrementTicketsHandler} title={title} check={!ticketsCounter()}>-</Button>
      <span className={classes.span}>{ticketsCounter()}</span>
      <Button buttonType="increment" onClick={incrementTicketsHandler} title={title}>+</Button>
    </>
  );
};

export default ButtonsMenu;
