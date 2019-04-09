import React from 'react';
import StaticRouter from 'react-router-dom';

export default function ServerApp(props) {
  return (
    <StaticRouter location={props.url}>
      <SharedRoutes />
    </StaticRouter>
  )
}
