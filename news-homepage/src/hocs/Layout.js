import React from 'react';
import Navigation from '../components/Navigation';

const Layout = (props) => {
  return (
    <div className="layout-wrapper">
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;