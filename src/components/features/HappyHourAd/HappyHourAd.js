import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render(){
    const {titleValue, descriptionValue} = this.props;
    const currentTime = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.title} title={titleValue}>{titleValue}</h3>
        <div className={styles.promoDescription} description={descriptionValue}>
          {`${currentTime>(23*60*60) ? descriptionValue : formatTime(currentTime)}`}
        </div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  titleValue: PropTypes.string,
  descriptionValue: PropTypes.string,

};

export default HappyHourAd;
