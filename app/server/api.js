const express = require('express')
const path = require('path')
const perf = require('../services/performance.js')
import {jsonResponseHandler} from '../utils/ExpressResponseHandlers.js'
const jsonRouter = express.Router()
import appRouter from './router.js';



jsonRouter.get('/db', (req, res) => {
  perf.fetchPerformanceData(jsonResponseHandler(req, res))
})

const staticMiddleware = express.static(path.join(__dirname, '../public/'))
module.exports = (req, res, next) => {
  staticMiddleware(req, res, () => {
    if(/application\/json/g.test(req.headers.accept)) {
      jsonRouter(req, res, next)
    } else {
      appRouter(req, res, next)
    }
  })
}