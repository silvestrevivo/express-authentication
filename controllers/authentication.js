'use strict'
const jwt = require('jwt-simple')
const User = require('../models/user')
const config = require('../config')

function tokenForUser(user) {
  // we use id because that doesn't change ever
  // sub is a convention => tokens have a sub object
  const timeStamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret)
  // the first parameters define the token, and those values has to be unique
}

const singup = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' })
  }

  // See if a user with a given mail exists.
  User.findOne({ email: email }, (err, existinUser) => {
    if (err) {
      return next(err)
    }

    if (existinUser) {
      // If a user with email does exist, return an error
      return res.status(422).send({ error: 'Email is in use' })
    }

    // If a user with a email does Not exist, create and save a user record
    const user = new User({
      email: email,
      password: password,
    })
    user.save(err => {
      if (err) return next(err)
      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) })
    })
  })
}

module.exports = { singup }
