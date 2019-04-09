import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SharedRoutes from './common/SharedRoutes';

const App = () => {
  return (
    <Router>
      <Switch>
        <SharedRoutes />
      </Switch>
    </Router>
  )
};

export default hot(module)(App);
