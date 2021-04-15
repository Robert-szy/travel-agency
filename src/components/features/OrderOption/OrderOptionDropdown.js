import React from 'react';
import NotFound from '../../views/NotFound/NotFound';

const OrderOptionDropdown = ({error}) => {
  if(error) return <NotFound />;
  else return (
    <div>
      OrderOptionDropdown
    </div>
  );
};

export default OrderOptionDropdown;
