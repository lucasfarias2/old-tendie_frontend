import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import template from './server/template';
import Home from './shared/views/home';

const server = express();
const port = 8080;

server.use('/static', express.static(path.join(__dirname, 'build/client')));

server.get('/', (req, res) => {
  const view = ReactDOMServer.renderToString(React.createElement(Home, null, null));
  res.send(template(view));
});

server.use((req, res) => {
  res.send('Error 404: Page not found');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
