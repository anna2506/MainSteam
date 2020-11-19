import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import routes from './routes';
import {createGlobalStyle} from "styled-components";
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.mainPage} component={MainPage} />
        <Route component={() => <h1>Not Found</h1>} />
          <GlobalStyle />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
`
