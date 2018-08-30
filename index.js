"use strict"
const express = require('express');
const http = require('http');
const app = express();

// Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)

console.log('server listening on: ' + port)
