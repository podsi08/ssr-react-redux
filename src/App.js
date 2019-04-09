import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.container';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Main {...props} />} />
      </Switch>
    </Router>
  )
};

export default hot(module)(App);
