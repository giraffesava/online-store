import React from 'react';
import backgroundVideo from './backgroundVideo.mp4';
import classes from './Body.module.css';

function Body() {
  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Body;
