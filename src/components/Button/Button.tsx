import React, { FC } from 'react';

interface Props {
  buttonType: 'increment' | 'decrement'
}

const Button: FC<Props> = ({ buttonType }) => (
  <>
    <button type="button" className={`${buttonType}`}>
      {buttonType === 'increment' ? '+' : '-'}
    </button>
  </>
);

export default Button;
