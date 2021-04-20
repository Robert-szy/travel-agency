import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({values, required, optionId, currentValue, setOptionValue}) => (

  <div
    className={styles.icon}
    value={currentValue}

  >
    {required ? '' : (
      <div key='null' value=''><Icon name='times-circle'/> none </div>
    )}
    {values.map(value => (
      <div
        key={value.id}
        className={`styles.icon ${value.id==optionId ? styles.iconActive : ''}`}
        onClick= {() => setOptionValue(value.id)}

      >
        <Icon name={value.icon}/> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  active: PropTypes.bool,
  required: PropTypes.bool,
  values: PropTypes.array,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  optionId: PropTypes.string,

};



export default OrderOptionIcons;
