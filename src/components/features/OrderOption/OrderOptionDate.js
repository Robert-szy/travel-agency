import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';


const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <DatePicker
      selected={startDate}
      onChange={date => {setStartDate(date); setOptionValue(date);}}
    >
    </DatePicker>
  );
};

OrderOptionDate.propTypes = {

  values: PropTypes.array,
  //currentValue: PropTypes.instanceOf(Date),
  setOptionValue: PropTypes.func,

};
export default OrderOptionDate;
