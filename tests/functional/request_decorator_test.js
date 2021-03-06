// Copyright 2014. A Medium Corporation

var request = require('../support/functional')

var matador = require('../../src/matador')
  , RequestMessage = require('../../src/RequestMessage')

exports.testRequestDecorator = function (test) {
  var app = matador.createApp(__dirname, {})
  app.useCommonMiddleware()
  app.use(function (req, res, next) {
    res.redirect('github.com')
  })
  app.start()

  request(app)
  .get('/')
  .end(function (res) {
    test.equal(302, res.statusCode)
    test.done()
  })
}

exports.testRequestDecoratorBogusPath = function (test) {
  var app = matador.createApp(__dirname, {})
  app.useCommonMiddleware()
  app.use(function (req, res, next) {
    res.redirect('github.com')
  })
  app.start()

  request(app)
  .get('/%20/%94')
  .end(function (res) {
    test.equal(302, res.statusCode)
    test.done()
  })
}
