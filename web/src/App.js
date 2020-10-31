import React from 'react';
import { Router } from "react-router-dom";
import Routes from "./Routes";
import {history} from "./common/helpers/history";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router history={history}>
        <Navbar />
        <Routes />
        <Footer />
    </Router>
  );
}

export default App;
