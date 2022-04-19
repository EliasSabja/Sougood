import React from 'react';
import NavBar from './header/index';

const Layout = ({ children }) => {
  return(
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
