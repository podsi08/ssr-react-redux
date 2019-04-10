const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ServerApp from './ServerApp';
import counter from './common/reducers/counter';

const app = express();

app.get('*', (req, res) => {
  const store = createStore(counter);
  const preloadedState = store.getState();
  const client = 'index.js';

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ServerApp url={req.url}/>
    </Provider>
  );
  res.send(renderFullPage(html, client, preloadedState))
});

function renderFullPage(html, script, preloadedState) {
  return (
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ssr-react-redux</title>
        </head>
      <body>
        <div id="app">${html}</div>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src=${script}></script>
      </body>
      </html>
    `
  );
}

app.listen(3000, () => console.log('Listening on localhost 3000'));
