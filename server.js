import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import bodyParser from 'body-parser';
import 'isomorphic-fetch';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import ServerApp from './src/ServerApp';
import combineReducer from './src/common/reducers/commonReducer';
import {addOneAction} from './src/common/actions/action';

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
      // modify store
      store.dispatch(addOneAction())
      const preloadedState = store.getState();
      const client = 'client_bundle.js';

      const css = new Set();
      const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

      const html = ReactDOMServer.renderToString(
        <StyleContext.Provider value={{ insertCss }}>
          <ServerApp url={req.url} store={store}/>
        </StyleContext.Provider>
      );
      res.send(renderFullPage(html, client, preloadedState, css))
    })

});

function renderFullPage(html, script, preloadedState, style) {
  return (
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ssr-react-redux</title>
            <style>${[...style].join('')}</style>
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
