import React from 'react';
import classes from './Ad.module.css';
import Button from '../Button/Button';

interface Props {
  title: string,
  description: string,
  url: string,
  price: string
}

const Ad:React.FC<Props> = ({
  title, description, url, price,
}) => (
  <div className={classes.adContainer}>
    <div className={classes.ad}>
      <h1>{title}</h1>
      <img src={url} alt="USA" />
      <h3>{description}</h3>
      <h3>
        Price:
        { price}
      </h3>
      <Button buttonType="decrement" />
      <Button buttonType="increment" />
    </div>
  </div>
);

export default Ad;
