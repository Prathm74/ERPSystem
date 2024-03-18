import React from 'react';
import AppBar from './AppBar';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <AppBar />
      <div className="content">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
