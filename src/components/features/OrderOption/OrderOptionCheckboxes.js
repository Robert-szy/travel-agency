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

//{if(currentValue.indexOf(id))>=0 {currentTarget.checked})}

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
          //checked={if(currentValue.indexOf(id))>=0 {currentTarget.checked})}
          //checked={`${value.id.indexOf(value)>=0 ? currentTarget.checked : ''}`}

          onChange={event => setOptionValue(newValueSet(optionId, value.id, event.currentTarget.checked))}
        />
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  optionId: PropTypes.array,
  currentTarget: PropTypes.bool,

};



export default OrderOptionCheckboxes;

