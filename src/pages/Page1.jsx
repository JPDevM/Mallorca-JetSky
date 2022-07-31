// Dependences
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// Components

// JSX
const Page1 = () => {
  return (
    <Fragment>
      Page1
      <Outlet />
    </Fragment>
  );
};

export default Page1;
