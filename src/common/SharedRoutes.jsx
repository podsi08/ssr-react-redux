import React from 'react';
import Subpage from '../components/Subpage/Subpage';
import Main from '../components/Main/Main.container';
import { Route } from 'react-router-dom';

const SharedRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" render={props => <Main {...props} />} />
      <Route path="/subpage" component={Subpage} />
    </React.Fragment>
  )
};

export default SharedRoutes;
