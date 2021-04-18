import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';


//{event => setOptionValue(event.currentTarget.value)}

const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <DatePicker
      selected={startDate}
      //value={currentValue}
      onChange={date => setStartDate(date)}
    >
    </DatePicker>
  );
};

OrderOptionDate.propTypes = {

  values: PropTypes.array,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,

};
export default OrderOptionDate;
