const Authentication = require('../controllers/authentication')

module.exports = function(app) {
  app.post('/singup', Authentication.singup)
}
