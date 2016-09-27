'use strict'

module.exports = Object.assign(
  module.exports,
  require('./lib/mkdir.js'),
  require('./lib/rmdir.js'),
  require('./lib/unlink.js')
)
