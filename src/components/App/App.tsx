import React from 'react';
import classes from './App.module.css';
import Body from '../Body/Body';
import Header from '../Header/Header';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
