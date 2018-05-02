var pgJs = require('pg-js')
const conf = require('../utils/conf.js')

module.exports = pgJs(conf.db)