import React from 'react';
import Ad from '../Ad/Ad';
import backgroundVideo from './backgroundVideo.mp4';
import classes from './Body.module.css';
import { ads } from './ads';

function Body() {
  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={classes.introduction}>
        <h1>
          DO YOU WANT TO TRAVEL TO
          <span> THE UNITED STATES</span>
          ?
        </h1>
        <h2>CHOOSE ANY OF THESE 3 PROGRAMS BELOW</h2>
      </div>
      <div className={classes.advertising}>
        {ads.map((ad) => (
          <Ad
            price={ad.price}
            description={ad.description}
            url={ad.url}
            title={ad.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
