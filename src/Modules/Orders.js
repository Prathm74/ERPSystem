import React from 'react';
import OrderList from './OrderList';
import ordersData from '../Data/orderData';

const Orders = () => {
  return (
    <div>
      <h2>Orders Management</h2>
      <OrderList orders={ordersData} />
    </div>
  );
}

export default Orders;
