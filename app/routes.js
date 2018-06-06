/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LoginPage from './containers/LoginPage';
import PreachingsPage from './containers/PreachingsPage';
import PreachingPage from './containers/PreachingPage';

export default () => (
  <App>
    <Switch>
      <Route exact path="/counter" component={CounterPage} />
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/preachings" component={PreachingsPage}/>
      <Route exact path="/preaching/:id" component={PreachingPage} />
    </Switch>
  </App>
);
