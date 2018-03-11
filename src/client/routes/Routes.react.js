import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ROUTE_NAMES } from '../constants';
import { Example, Home } from '../containers';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path={ROUTE_NAMES.home} component={Home} />
      <Route path={ROUTE_NAMES.example} component={Example} />
    </div>
  </BrowserRouter>
);

export default Routes;
