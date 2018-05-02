
const db = require('./db.js');

function fetchPerformanceData(callback) {
  db.fetchPerformanceData((err, rows) => {
    if(err) {
      callback(err, null)
    } else {
      callback(null, rows ? rows[0] : null)
    }
  })
}

module.exports = {
  fetchPerformanceData
}