import React from 'react';
import NotFound from '../../views/NotFound/NotFound';

const OrderOptionIcons = ({error}) => {
  if(error) return <NotFound />;
  else return (
    <div>
      OrderOptionIcons
    </div>
  );
};

export default OrderOptionIcons;
