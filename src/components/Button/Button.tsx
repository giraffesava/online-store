import React, { FC } from 'react';
import classes from './Button.module.css';

interface Props {
  buttonType: 'increment' | 'decrement',
  onClick: () => void,
  disabled?: number
}

const Button: FC<Props> = ({ buttonType, onClick, disabled }) => {
  console.log(disabled);
  return (
    <>
      <button type="button" className={[classes.increment, buttonType === 'decrement' ? classes.decrement : null].join(' ')} onClick={onClick}>
        {buttonType === 'increment' ? '+' : '-'}
      </button>
    </>
  );
};

export default Button;
