import React from 'react';
import NotFound from '../../views/NotFound/NotFound';


//import { Grid, Row } from 'react-flexbox-grid';

//import styles from './OrderSummary.scss';


const OrderOptionDate = ({error, name}) => {
  //value={currentValue};
  if(error) return <NotFound />;
  else return (
    <div
    >
      <div>
        <h2 className='styles.component'>{name}</h2>
      </div>
    </div>
  );

};

export default OrderOptionDate;
