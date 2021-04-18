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

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (

  <div
    className={styles.checkboxes}
    value={currentValue}
  >

    {values.map(value => (
      <div key={value.id}>
        <input
          type='checkbox'
          value={value.id}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,

};



export default OrderOptionCheckboxes;

