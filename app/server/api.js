const express = require('express')
const perf = require('../services/performance.js')
import {jsonResponseHandler} from '../utils/ExpressResponseHandlers.js'
const jsonRouter = express.Router()
import appRouter from './router.js';


jsonRouter.get('/', (req, res) => {
  perf.fetchPerformanceData(jsonResponseHandler(req, res))
})

module.exports = (req, res, next) => {
  if(/application\/json/g.test(req.headers.accept)) {
    jsonRouter(req, res, next)
  } else {
    appRouter(req, res, next)
  }
}