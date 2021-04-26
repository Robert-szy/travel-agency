import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {

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

    return (
      <div>
        <h3 className={styles.title} title={titleValue}>{titleValue}</h3>
        <div className={styles.countdown} description={descriptionValue}>{descriptionValue}</div>
        <div className='promoDescription'>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  titleValue: PropTypes.string,
  descriptionValue: PropTypes.string,

};

export default HappyHourAd;
