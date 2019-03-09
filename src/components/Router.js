import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';
import Welcome from './Welcome';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/App" component={App}/>
      <Route exact path="/" component={Welcome}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
