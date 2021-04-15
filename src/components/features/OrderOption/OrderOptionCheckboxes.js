import React from 'react';
import NotFound from '../../views/NotFound/NotFound';

const OrderOptionCheckboxes = ({error}) => {
  if(error) return <NotFound />;
  else return (
    <div>
      OrderOptionCheckboxes
    </div>
  );
};

export default OrderOptionCheckboxes;
