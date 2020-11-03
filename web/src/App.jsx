import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
