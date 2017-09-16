import App from './containers/App';
import HomePage from './containers/HomePage';
import NewServerPage from './containers/NewServerPage';
import { Route, Switch } from 'react-router';
import * as React from 'react';


export default () => (
  <App>
    <Switch>
      <Route path="/new" component={NewServerPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
