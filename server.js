/**
 * Babel register
 */
require('babel-register')({
  ignore: ['node_modules']
});

const express = require('express');
const http = require('http');

const appRouting = require('./server/appRouting.jsx');
const apiRouting = require('./server/apiRoutes.js');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/api', apiRouting);

app.get('*', appRouting);

const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
  console.log('Listening on 3003');
});