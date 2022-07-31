// Dependences
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import MobileMenu from '../components/MobileMenu';

// JSX
const Layout = () => {
  return (
    <Fragment>
      <MobileMenu />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
