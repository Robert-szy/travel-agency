import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderOptionNumber = ({limits, value, optionId, setOptionValue}) => (

  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value={parseInt(optionId)}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
      {formatPrice(value)}
    </input>
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  value: PropTypes.number,
  optionId: PropTypes.string,
  setOptionValue: PropTypes.func,

};

export default OrderOptionNumber;
