import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }


  /*sec2time(timeInSeconds) {
    let pad = function(num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
  }*/

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
          {`${currentTime>(23*60*60) ? descriptionValue : this.getCountdownTime()}`}
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
