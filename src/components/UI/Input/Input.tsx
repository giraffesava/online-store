import React, { forwardRef } from 'react';

interface Props {
  placeholder: string
  value: string
  type: string
  minLength?: number
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void
  ref?: React.RefObject<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, Props>(({
  placeholder, value, type, minLength, onChange,
}, ref) => (
  <input
    placeholder={placeholder}
    value={value}
    type={type}
    minLength={minLength}
    onChange={onChange}
    ref={ref}
  />
));

export default Input;
