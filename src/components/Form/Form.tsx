import React, { useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import {
  resetTicketsStandard,
  resetTicketsPremium,
  resetTicketsVip,
} from '../../store/actions/index';
import tooltip from './tooltip.svg';
import classes from './Form.module.css';

interface Props {
  overall: number
}

const Form:React.FC<Props> = ({ overall }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [promo, setPromo] = useState('');

  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const promoRef = useRef();

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, []);

  // const nameKeyDown = (e: HTMLInputElement | null): void => {
  //   if (e.key === 'Enter') emailRef.current.focus();
  //   console.log(e);
  // };

  // const emailKeyDown = (e: React.SyntheticEvent<HTMLElement>): void => {
  //   // if (e.key === 'Enter') promoRef.current.focus();
  // };

  // const submitKeyDown = (e: React.SyntheticEvent<HTMLInputElement>): void => {
  //   // if (e.key === 'Enter') alert('Our manager will contact with you soon :)');
  // };

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
    dispatch(resetTicketsStandard());
    dispatch(resetTicketsPremium());
    dispatch(resetTicketsVip());
    setName('');
    setEmail('');
    setPromo('');
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
        // ref={nameKeyDown}
      />
      <h3>Your email: </h3>
      <Input
        placeholder="Email"
        value={email}
        type="email"
        minLength={4}
        onChange={emailHandler}
        // ref={emailKeyDown}
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
        minLength={0}
        // ref={submitKeyDown}
      />
      <Button onClick={submitHandler} check={!(name.length >= 4) || !(email.length >= 4)} buttonType="submit">Submit</Button>
    </form>
  );
};

export default Form;
