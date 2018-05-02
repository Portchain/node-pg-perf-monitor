'use strict';

var _ExpressResponseHandlers = require('../utils/ExpressResponseHandlers.js');

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var path = require('path');
var perf = require('../services/performance.js');

var jsonRouter = express.Router();


jsonRouter.get('/db', function (req, res) {
  perf.fetchPerformanceData((0, _ExpressResponseHandlers.jsonResponseHandler)(req, res));
});

var staticMiddleware = express.static(path.join(__dirname, '../public/'));
module.exports = function (req, res, next) {
  staticMiddleware(req, res, function () {
    if (/application\/json/g.test(req.headers.accept)) {
      jsonRouter(req, res, next);
    } else {
      (0, _router2.default)(req, res, next);
    }
  });
};