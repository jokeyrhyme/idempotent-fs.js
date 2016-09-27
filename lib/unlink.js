/* @flow */
'use strict'

const fs = require('graceful-fs')
const pify = require('pify')

const ENOENT = 'ENOENT'

function unlink (path /* : string */, callback) {
  fs.unlink(path, (err) => {
    if (err && err.code !== ENOENT) {
      callback(err)
    } else {
      callback(null)
    }
  })
}

function unlinkSync (path /* : string */) {
  try {
    fs.unlinkSync(path)
  } catch (err) {
    if (err.code !== ENOENT) {
      throw err
    }
  }
}

module.exports = {
  unlink: pify(unlink),
  unlinkSync
}
