import React from 'react';
import { Route, Switch } from 'react-router';
import routes from './common/routerConstants';
import MainPage from './pages/MainPage';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={routes.root} component={MainPage} />
      <Route path={routes.notFound} component={() => <h1>Not Found</h1>} />
    </Switch>
  </>
);

export default Routes;
