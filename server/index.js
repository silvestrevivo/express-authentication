'use strict'
// Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./routes/router')
const mongoose = require('mongoose')
const cors = require('cors')

// DB Setup
mongoose.connect(
  'mongodb://localhost:27017/auth',
  { useNewUrlParser: true },
)
mongoose.set('useCreateIndex', true)

// App setup
app.use(morgan('combined')) //logging framework for debugging
app.use(cors()) // allow cors to work in development
app.use(bodyParser.json({ type: '*/*' })) // parse incomming requests
// { type: '*/*' } => parse on any request
router(app)

// Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)

console.log(`server listening on: ${port}`)
