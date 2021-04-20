/* eslint-disable react/button-has-type */
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';
import classes from './Button.module.css';

interface Props {
  children: ReactNode
  buttonType: 'increment' | 'decrement' | 'submit',
  onClick?: (arg:any) => void,
  disabled?: boolean,
  type?: 'button' | 'submit'
}
const allClasses = classNames.bind(classes);

const Button: FC<Props> = ({
  buttonType, onClick, disabled, children, type,
}) => {
  const className = allClasses(buttonType);
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
