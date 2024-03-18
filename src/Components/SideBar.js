import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
}

export default SideBar;
