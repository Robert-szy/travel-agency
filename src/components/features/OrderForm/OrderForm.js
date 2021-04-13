import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import NotFound from '../../views/NotFound/NotFound';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';



import { Grid, Row, Col } from 'react-flexbox-grid';

//import styles from './OrderForm.scss';
//{formatPrice(calculateTotal(tripCost, options))}

const OrderForm = ({error, tripCost, options}) => {
  if(error) return <NotFound />;
  else return (
    <Grid>
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={formatPrice(calculateTotal(tripCost, options))} options={options}></OrderSummary>
        </Col>
      </Row>
    </Grid>
  );
};

export default OrderForm;
