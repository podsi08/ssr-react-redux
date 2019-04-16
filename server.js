import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import bodyParser from 'body-parser';
import 'isomorphic-fetch';
import ServerApp from './src/ServerApp';
import combineReducer from './src/common/reducers/commonReducer';

const app = express();

app.use(bodyParser.json());
app.use(express.static('dist/public'));

app.get('*', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      const initialState = {
        fetchData: data,
        counter: 0,
      };
      const store = createStore(combineReducer, initialState);
      const preloadedState = store.getState();
      const client = 'client_bundle.js';

      const html = ReactDOMServer.renderToString(
        <ServerApp url={req.url} store={store}/>
      );
      res.send(renderFullPage(html, client, preloadedState))
    })

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
