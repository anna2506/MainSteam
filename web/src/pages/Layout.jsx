import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <Router history={createBrowserHistory()}>
      <Navbar />
      {children}
      <Footer />
    </Router>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
