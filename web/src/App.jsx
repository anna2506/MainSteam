import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import routes from './routes';
import {createGlobalStyle} from 'styled-components';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RatingPage from './pages/RatingPage/RatingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.mainPage} component={MainPage} />
        {/*<Route exact path={routes.profilePage} component={ProfilePage} />*/}
        {/*<Route exact path={routes.rating} component={RatingPage} />*/}
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
        font-family: 'Black Ops One', cursive;
        font-size: 1.125rem;
        color: #fff;
        height: 100%;
        
    }
    button {
        font-family: 'Black Ops One', cursive;
        font-size: 1.125rem;
        outline: none;
        color: #fff;
    }
    #root {
        height: 100%;
    }
`
