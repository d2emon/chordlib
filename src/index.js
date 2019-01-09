#!/usr/bin/env babel-node

/**
 * Module dependencies.
 */
import Debug from 'debug';
import http from 'http';
import config from './config';
import app from './app';
import { normalizePort } from './helpers';

const debug = Debug(config.appName);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/*
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
*/

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);

server.on('error', (error) => {
  /**
   * Event listener for HTTP server "error" event.
   */
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  /**
   * Event listener for HTTP server "listening" event.
   */
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});
