import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default AppBar;
