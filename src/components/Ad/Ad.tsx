import React from 'react';
import classes from './Ad.module.css';

interface props {
  children: string,
  description: string
}

const Ad:React.FC<props> = ({ children, description }) => (
  <div className={classes.adContainer}>
    <div className={classes.ad}>
      <h1>{children}</h1>
      <h3>{description}</h3>
    </div>
  </div>
);

export default Ad;
