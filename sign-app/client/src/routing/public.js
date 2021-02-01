import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('hasLoggedIn') === 'true'
        ? <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        : <Component {...props} />
    )}
  />
);
