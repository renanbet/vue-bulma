'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL_API: '"http://localhost:8081/api"',
  GOOGLE_APP_CLIENT_ID: prodEnv.GOOGLE_APP_CLIENT_ID
})
