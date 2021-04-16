import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

//import NotFound from '../../views/NotFound/NotFound';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue, active}) => (
  <div
    className={styles.icon}
    value={currentValue}
    //onClick={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <div key='null' value=''><Icon name='times-circle'/> none </div>
    )}
    {values.map(value => (
      <div
        key={value.id}
        //value={value.id}
        className={`styles.icon ${active ? styles.iconActive : ''}`}
        onClick= {() => setOptionValue(value.id)}

      >
        <Icon name={value.icon}/> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  active: PropTypes.string,
  required: PropTypes.bool,
  values: PropTypes.array,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,

};



export default OrderOptionIcons;
