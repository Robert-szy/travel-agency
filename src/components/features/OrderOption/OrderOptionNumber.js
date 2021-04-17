import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';



//import NotFound from '../../views/NotFound/NotFound';

const OrderOptionNumber = ({limits, value, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
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
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,

};

export default OrderOptionNumber;
