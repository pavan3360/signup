import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Private } from './private';
import Dashboard from '../containers/dashboard';

export default () => (
  <Fragment>
    <Switch>
      <Private
        exact
        path="/dashboard"
        component={Dashboard}
      />
    </Switch>
  </Fragment>
);
