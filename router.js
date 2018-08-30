module.exports = function(app) {
  app.get('/', (req, res, next) => {
    res.send(JSON.stringify(['a', 'b', 'c']))
  })
}
