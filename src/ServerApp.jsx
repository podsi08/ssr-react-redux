import React from 'react';
import { StaticRouter } from 'react-router-dom';
import SharedRoutes from './common/SharedRoutes';

const ServerApp = (props) => {
  return (
    <StaticRouter location={props.url}>
      <SharedRoutes />
    </StaticRouter>
  )
};

export default ServerApp;
