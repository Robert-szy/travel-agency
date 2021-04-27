import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getDaysNumber(){
    const currentTime = new Date();
    let summerStart = new Date (2021, 5, 21);
    let summerEnd = new Date (2021, 8, 24);

    if(currentTime > summerEnd){
      summerStart = new Date((summerStart.getYear()+1900+1), 5, 21);
      const daysNumber = Math.round((summerStart.getTime() - currentTime.getTime())/(1000 * 3600 * 24));
      return daysNumber;
    } else if (currentTime < summerStart){

      const daysNumber = Math.round((summerStart.getTime() - currentTime.getTime())/(1000 * 3600 * 24));
      return daysNumber;
    } else {
      const daysNumber = '';
      return daysNumber;
    }
  }

  render(){
    const {descriptionValue, description1dayValue, descriptionSummerDays} = this.props;
    const daysNumber = this.getDaysNumber();

    return (
      <div className={styles.component}>
        <div className={styles.daysNumber} number={daysNumber}>{daysNumber}</div>
        <div className={styles.daysDescription} description={descriptionValue}>
          {`${daysNumber == '' ? descriptionSummerDays : daysNumber == 1 ? description1dayValue : descriptionValue}`}
        </div>

      </div>
    );
  }
}

DaysToSummer.propTypes = {
  descriptionValue: PropTypes.string,
  description1dayValue: PropTypes.string,
  descriptionSummerDays: PropTypes.string,
};

export default DaysToSummer;
