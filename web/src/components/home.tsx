import * as React from 'react';

import { Navbar } from './layout/navbar';
import { Body } from './body';

export const Home = () => {
  return (
    <div className="d_flex_c">
      <Navbar/>
      <Body/>
    </div>
  );
};
