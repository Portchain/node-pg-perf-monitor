const path = require('path');

module.exports = {
  db: {
    host: process.env.PGPM_DB_HOST || process.env.DB_HOST || '127.0.0.1',
    port: process.env.PGPM_DB_PORT || process.env.DB_PORT || 5432,
    database: process.env.PGPM_DB_NAME || process.env.DB_NAME || 'pgpm',
    user: process.env.PGPM_DB_USER || process.env.DB_USER || 'pgpm',
    password: process.env.PGPM_DB_PWD || process.env.DB_PWD || 'pgpm',
    queryDirectory: path.join(__dirname, '..', 'db', 'queries')
  }
};