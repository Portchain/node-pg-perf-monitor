'use strict';

var pgJs = require('pg-js');
var conf = require('../utils/conf.js');

module.exports = pgJs(conf.db);