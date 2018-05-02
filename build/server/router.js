'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = router;

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _renderFullPage = require('./renderFullPage.js');

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _App = require('../components/App.js');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var perf = require('../services/performance.js');

function router(req, res) {

  var match = _routes2.default.reduce(function (acc, route) {
    return (0, _reactRouterDom.matchPath)(req.url, { path: route, exact: true }) || acc;
  }, null);

  if (!match) {
    res.status(404).send('page not found');
    return;
  }
  var context = {};
  perf.fetchPerformanceData(function (err, data) {

    if (err) console.error(err);
    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: context, location: req.url },
      _react2.default.createElement(_App2.default, { data: data })
    ));
    res.status(200).send((0, _renderFullPage2.default)(html, data));
  });
};