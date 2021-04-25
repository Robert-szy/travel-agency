import React from 'react';
import styles from './OrderOption.scss';
//import Icon from '../../common/Icon/Icon';

import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, optionId, setOptionValue}) => (

  <div
    className={styles.checkboxes}
    value={currentValue}
  >

    {values.map(value => (
      <label key={value.id}>
        <input
          type='checkbox'
          value={value.id}

          onChange={event => setOptionValue(newValueSet(value.id, optionId, event.currentTarget.checked))}
        />
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  optionId: PropTypes.array,
  currentTarget: PropTypes.bool,

};



export default OrderOptionCheckboxes;

