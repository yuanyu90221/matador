var util = require('util')

module.exports = function (app, config) {
  var ApplicationController = app.getController('Application', true)

  /** @constructor */
  function HomeController() {
    ApplicationController.call(this)
  }

  util.inherits(HomeController, ApplicationController)

  HomeController.prototype.index = function (req, res) {
    var data = {title: 'The Matador Framework'}
    var query = require('url').parse(req.url, true).query
    if (query.fragment) data.layout = false
    this.render(res, 'views.index.welcome', data)
  }

  return HomeController
}
