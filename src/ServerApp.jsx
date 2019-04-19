import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import SharedRoutes from './common/SharedRoutes';

const ServerApp = (props) => {
  return (
    <Provider store={props.store}>
      <StaticRouter location={props.url}>
        <SharedRoutes />
      </StaticRouter>
    </Provider>
  )
};

export default ServerApp;
