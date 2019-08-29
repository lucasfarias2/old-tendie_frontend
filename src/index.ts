import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import template from './server/template';
import Home from './shared/views/home';

const server = express();
const port = 8080;

server.use(express.static('/static'));

server.get('/', (req, res) => {
  const view = ReactDOMServer.renderToString(React.createElement(Home, null, null));
  res.send(template(view));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
