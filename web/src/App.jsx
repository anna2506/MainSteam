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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.mainPage} component={Main} />
        <Route exact path={routes.profilePage} component={Profile} />
        <Route exact path={routes.rating} component={Rating} />
        <Route exact path={routes.store} component={Store} />
        <Route exact path={routes.game} component={Game} />
        <Route exact path="/ReduxTest" component={Test} />
        <Route component={() => <h1>Not Found</h1>} />
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
