import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

//import { Grid, Row } from 'react-flexbox-grid';



const OrderOptionText = ({value, currentValue, setOptionValue}) => (
  <div className={styles.text}>
    <input
      className={styles.inputSmall}
      type='text'
      maxLength='200'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
      {formatPrice(value)}
    </input>
  </div>
);

OrderOptionText.propTypes = {
  //limits: PropTypes.object,
  value: PropTypes.number,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,

};

export default OrderOptionText;
