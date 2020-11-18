import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import MainPage from './pages/MainPage';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.mainPage} component={MainPage} />
        <Route component={() => <h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
