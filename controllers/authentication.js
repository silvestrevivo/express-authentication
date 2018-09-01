'use strict'
const User = require('../models/user')

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
      res.json(user)
    })
  })
}

module.exports = { singup }
