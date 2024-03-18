import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Modules/Dashboard';
import Products from './Modules/Products';
import CalendarView from './Modules/Calendar';
import Orders from './Modules/Orders';
import ordersData from './Data/orderData';
import Layout from './Components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/calendar" element={<CalendarView orders={ordersData} />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
