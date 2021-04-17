/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';
import classes from './Button.module.css';
import { AD_TYPES } from '../../Ad/ads';

interface Props {
  children: ReactNode
  buttonType: 'increment' | 'decrement' | 'submit',
  onClick?: (arg:any) => void,
  check?: boolean,
  title?: AD_TYPES,
  type?: 'button' | 'submit'
}
const allClasses = classNames.bind(classes);

const Button: FC<Props> = ({
  buttonType, onClick, title, check, children, type,
}) => {
  const className = allClasses(buttonType);
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={check}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
