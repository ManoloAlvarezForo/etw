/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LoginPage from './containers/LoginPage';
import PreachingsPage from './containers/PreachingsPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/preachings" component={PreachingsPage} />
    </Switch>
  </App>
);
