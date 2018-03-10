import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ROUTE_NAMES from '../consts/routeNames';
import { Example, Home } from '../components';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path={ROUTE_NAMES.home} component={Home} />
      <Route path={ROUTE_NAMES.example} component={Example} />
    </div>
  </BrowserRouter>
);

export default Routes;
