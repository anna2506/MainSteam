import React from 'react';
import * as PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as playerSelector from '../store/player/selector';

function PrivateRoute(props) {
  const { component, exact, path } = props;
  const loggedIn = useSelector(playerSelector.isLoggedIn);

  if (!loggedIn) {
    return (
      <Redirect to={{ pathname: '/' }} />
    );
  }

  return (
    <Route exact={exact} component={component} path={path} />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
};

PrivateRoute.defaultProps = {
  exact: false,
  path: '',
};

export default PrivateRoute;
