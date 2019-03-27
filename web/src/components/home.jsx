// @flow
import * as React from 'react';

import { NavbarContainer } from './layout/navbar';
import { Body } from './body';

export const Home = () => {
  return (
    <div className="d_flex_c">
      <NavbarContainer/>
      <Body/>
    </div>
  );
};
