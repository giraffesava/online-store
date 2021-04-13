import React, { FC } from 'react';

interface Props {
  buttonType: 'increment' | 'decrement',
  onClick: () => void
}

const Button: FC<Props> = ({ buttonType, onClick }) => (
  <>
    <button type="button" className={`${buttonType}`} onClick={onClick}>
      {buttonType === 'increment' ? '+' : '-'}
    </button>
  </>
);

export default Button;
