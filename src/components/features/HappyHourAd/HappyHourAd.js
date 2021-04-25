import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {

  render(){
    const {titleValue, descriptionValue} = this.props;

    return (
      <div>
        <h3 className={styles.title} title={titleValue}>{titleValue}</h3>
        <div className={styles.countdown} description={descriptionValue}>{descriptionValue}</div>

      </div>
    );
  }
}

HappyHourAd.propTypes = {
  titleValue: PropTypes.string,
  descriptionValue: PropTypes.string,

};

export default HappyHourAd;
