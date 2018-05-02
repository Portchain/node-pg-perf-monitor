'use strict';

var db = require('./db.js');

function fetchPerformanceData(callback) {
  db.fetchPerformanceData(function (err, rows) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows ? rows[0] : null);
    }
  });
}

module.exports = {
  fetchPerformanceData: fetchPerformanceData
};