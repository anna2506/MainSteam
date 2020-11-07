import React from 'react';
import { Router } from "react-router-dom";
import Routes from "./Routes";
import {history} from "./common/helpers/history";
import {createGlobalStyle} from "styled-components";

function App() {
  return (
    <Router history={history}>
        <GlobalStyle />
        <Routes />
    </Router>
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
