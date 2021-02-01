import React, { Component } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { Public } from './routing/public';
import Auth from './containers/auth';
import Dashboard from './containers/dashboard';
import { history } from './helpers/history';

class App extends Component {
  state = {};

  render() {
    return (
      <HashRouter history={history}>
        <Switch>
          <Public exact path="/" component={Auth} />
          <Dashboard />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
