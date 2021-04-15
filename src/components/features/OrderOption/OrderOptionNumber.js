import React from 'react';
import NotFound from '../../views/NotFound/NotFound';

const OrderOptionNumber = ({error}) => {
  if(error) return <NotFound />;
  else return (
    <div>
      OrderOptionNumber
    </div>
  );
};

export default OrderOptionNumber;
