import React, { FC, ReactNode } from 'react';
import classes from './Button.module.css';
import { AD_TYPES } from '../../Ad/ads';

interface Props {
  children: ReactNode
  buttonType: 'increment' | 'decrement',
  onClick?: () => void,
  check?: boolean,
  title?: AD_TYPES
}

const Button: FC<Props> = ({
  buttonType, onClick, title, check, children,
}) => (
  <>
    <button
      type="button"
      className={[classes.increment, buttonType === 'decrement' ? classes.decrement : null].join(' ')}
      onClick={onClick}
      disabled={buttonType === 'decrement' && check}
    >
      {children}
    </button>
  </>
);

export default Button;
