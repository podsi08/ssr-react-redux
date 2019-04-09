const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ServerApp = require('./src/ServerApp');

const app = express();

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <ServerApp url={req.url} />
  );
  res.send(renderFullPage(html))
});

function renderFullPage(html) {
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
      </body>
      </html>
    `
  );
}

app.listen(3000, () => console.log('Listening on localhost 3000'));
