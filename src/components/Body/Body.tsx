import React from 'react';
import { useSelector } from 'react-redux';
import Ad from '../Ad/Ad';
import backgroundVideo from './backgroundVideo.mp4';
import classes from './Body.module.css';
import { selectStandardTicketCount, selectPremiumTicketCount, selectVipTicketCount } from '../../store/tickets/tickets.selectors';

const Body = () => {
  const standard = useSelector(selectStandardTicketCount);
  const premium = useSelector(selectPremiumTicketCount);
  const vip = useSelector(selectVipTicketCount);
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
        <Ad
          price={standard.price}
          description={standard.description}
          url={standard.url}
          ticketType={standard.ticketType}
          tickets={standard.tickets}
        />
        <Ad
          price={premium.price}
          description={premium.description}
          url={premium.url}
          ticketType={premium.ticketType}
          tickets={premium.tickets}
        />
        <Ad
          price={vip.price}
          description={vip.description}
          url={vip.url}
          ticketType={vip.ticketType}
          tickets={vip.tickets}
        />
      </div>
    </div>
  );
};

export default Body;
