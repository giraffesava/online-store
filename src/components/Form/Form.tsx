import React, { useRef, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import tooltip from './tooltip.svg';
import classes from './Form.module.css';
import { resetTickets, TicketType } from '../../store/tickets/tickets.actions';

interface Props {
  overall: number
}

const Form:React.FC<Props> = ({ overall }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [promo, setPromo] = useState('');

  const dispatch = useDispatch();

  const nameRef: React.RefObject<HTMLInputElement > = useRef(null);

  useEffect(():void => {
    nameRef.current?.focus();
  }, []);

  const nameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.trimLeft());
  };

  const emailHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trimLeft());
  };

  const promoHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPromo(e.target.value.trimLeft());
  };

  const submitHandler = (e:React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetTickets(TicketType.standard));
    dispatch(resetTickets(TicketType.premium));
    dispatch(resetTickets(TicketType.vip));
    setName('');
    setEmail('');
    setPromo('');
  };

  const isValidForm = (email:string, name: string):boolean => {
    const emailTest = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
    const nameTest = name.length >= 4;
    return emailTest && nameTest;
  };

  return (
    <form>
      <h2 className={classes.overall}>
        Overall:
        {` ${promo.toLowerCase() === 'sava' ? overall * 0.85 : overall}$`}
      </h2>
      <h3>Your name: </h3>
      <Input
        placeholder="Name"
        value={name}
        type="text"
        minLength={4}
        onChange={nameHandler}
        ref={nameRef}
      />
      <h3>Your email: </h3>
      <Input
        placeholder="Email"
        value={email}
        type="text"
        minLength={4}
        onChange={emailHandler}
      />
      <h3>
        Promo
        <div className={classes.tooltip}>
          <img src={tooltip} alt="" data-tip="The name of the creator of this site(look header)" />
          <ReactTooltip />
        </div>
        :
      </h3>
      <Input
        placeholder="Promo"
        value={promo}
        type="text"
        onChange={promoHandler}
      />
      <Button onClick={submitHandler} disabled={!isValidForm(email, name)} buttonType="submit">Submit</Button>
    </form>
  );
};

export default Form;
