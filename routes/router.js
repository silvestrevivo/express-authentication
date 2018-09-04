const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
// this means, when the user is authenticated, don't make a session

const requireSignin = passport.authenticate('local', { session: false })
// this means, when the user is is logged by local, don't make a session

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' })
  })

  app.post('/signin', requireSignin, Authentication.signin)

  app.post('/signup', Authentication.signup)
}
