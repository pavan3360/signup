import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('hasLoggedIn') === 'true'
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )}
  />
);
