import React from 'react';
import Button from '../UI/Button/Button';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AD_TYPES } from '../Ad/ads';
import classes from './ButtonsMenu.module.css';

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
  const { standardTickets } = useTypedSelector((state) => state.standardReducer);
  const { premiumTickets } = useTypedSelector((state) => state.premiumReducer);
  const { vipTickets } = useTypedSelector((state) => state.vipReducer);

  const ticketsCounter = ():number => {
    if (title === 'STANDARD') return standardTickets;
    if (title === 'PREMIUM') return premiumTickets;
    if (title === 'VIP') return vipTickets;
    return 0;
  };

  return (
    <>
      <Button buttonType="decrement" onClick={decrementTicketsHandler} title={title} check={!ticketsCounter()} />
      <span className={classes.span}>{ticketsCounter()}</span>
      <Button buttonType="increment" onClick={incrementTicketsHandler} title={title} />
    </>
  );
};

export default ButtonsMenu;
