import React from 'react';
import NotFound from '../../views/NotFound/NotFound';


import { Grid, Row } from 'react-flexbox-grid';

//import styles from './OrderSummary.scss';


const OrderSummary = ({error, tripCost}) => {
  if(error) return <NotFound />;
  else return (
    <Grid>
      <Row>
        <h2 className='styles.component'>Total: <strong>{tripCost}</strong></h2>
      </Row>
    </Grid>
  );
};

export default OrderSummary;
