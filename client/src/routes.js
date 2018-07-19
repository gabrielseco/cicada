// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from 'components';

const delay = {
  delay: 300
};

const Home = Loadable({
  loader: () => import('./containers/Home/Home'),
  loading: Loading,
  ...delay
});

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default routes;
