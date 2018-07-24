'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  URL_API: '"http://localhost:8081/api"',
  GOOGLE_APP_CLIENT_ID: devEnv.GOOGLE_APP_CLIENT_ID
})
