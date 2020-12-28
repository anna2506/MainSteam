import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import routes from './routes';
import Main from './pages/MainPage/MainPage';
import Profile from './pages/ProfilePage/ProfilePage';
import Rating from './pages/RatingPage/RatingPage';
import Store from './pages/Store';
import Game from './pages/Game';
import Test from './pages/Test';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.mainPage} component={Main} />
        <PrivateRoute exact path={routes.profilePage} component={Profile} />
        <PrivateRoute exact path={routes.rating} component={Rating} />
        <PrivateRoute exact path={routes.store} component={Store} />
        <PrivateRoute exact path={routes.game} component={Game} />
        <PrivateRoute exact path="/ReduxTest" component={Test} />
        <PrivateRoute component={() => <h1>Not Found</h1>} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: 'Quantico', sans-serif;
        font-size: 1.125rem;
        height: 100%;
    }
    button {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        color: #fff;
    }
    #root {
        height: 100%;
    }
`;
