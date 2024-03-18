import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard-metrics'>
      <h2>Dashboard</h2>
      <div >
        <h3>Key Metrics</h3>
        <p>Total number of products: 100</p>
        <p>Total number of orders: 50</p>
      </div>
      <div >
        <h3 className='quick-navigation'>Quick Navigation</h3>
        <ul>
          <li><Link to="/products">Products Management</Link></li>
          <li><Link to="/orders">Orders Management</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
