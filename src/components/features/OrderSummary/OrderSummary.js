import React from 'react';
//import OrderSummary from '../OrderSummary/OrderSummary';

import { Grid, Row } from 'react-flexbox-grid';

//import styles from './OrderSummary.scss';


class OrderSummary extends React.Component {
  render(){
    return (
      <Grid>
        <Row>
          <h2 className='styles.component'>Total: <strong>$12,345</strong></h2>
        </Row>
      </Grid>
    );
  }
}

export default OrderSummary;
