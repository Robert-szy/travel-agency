import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

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
        {pricing.map(pricing => (
          <Col md={4} key={pricing.id}>
            <OrderOption  {...pricing} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={formatPrice(calculateTotal(tripCost, options))} options={options}></OrderSummary>
        </Col>
      </Row>
    </Grid>
  );
};

export default OrderForm;
