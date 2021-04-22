import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

import NotFound from '../../views/NotFound/NotFound';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';



import { Grid, Row, Col } from 'react-flexbox-grid';

const sendOrder = (tripName, tripId, tripCountryCode, options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripName,
    tripId,
    tripCountryCode,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({error, tripCost, options, setOrderOption, tripName, tripCountry, tripId}) => {

  if(error) return <NotFound />;
  else return (
    <Grid>
      <Row>
        {pricing.map(pricing => (
          <Col md={4} key={pricing.id}>
            <OrderOption  {...pricing} optionId={options[pricing.id]} setOrderOption={setOrderOption}></OrderOption>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary
            tripCost={formatPrice(calculateTotal(tripCost, options))}
            options={options}
            tripName={tripName}
            tripCountry={tripCountry.alpha3Code}
            tripId={tripId}
          ></OrderSummary>
          <Button onClick={() => {
            if(!options.name || !options.contact) {
              window.alert('Podaj imię i kontakt');
            } else {
              sendOrder(tripName, tripId, tripCountry.alpha3Code, options, tripCost);
            }
          }
          }>Order now!</Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default OrderForm;
