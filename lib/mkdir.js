/* @flow */
'use strict'

const fs = require('graceful-fs')
const mkdirp = require('mkdirp')
const pify = require('pify')

const EEXIST = 'EEXIST'

function mkdir (
  path /* : string */,
  mode /* : number | (err :? Error) => void */,
  callback /* : (err :? Error) => void */
) {
  let fn
  if (typeof mode === 'function') {
    fn = mkdirp.bind(null, path, { fs })
    callback = mode
  } else {
    fn = mkdirp.bind(null, path, { fs, mode })
  }

  fn((err) => {
    if (typeof callback === 'function') {
      if (err && err.code === EEXIST) {
        fs.stat(path, (statErr, stat) => {
          if (statErr) {
            callback(statErr)
            return
          }
          callback(stat.isDirectory() ? null : err)
          return
        })
        return
      }
      callback(err)
    }
  })
}

function mkdirSync (path /* : string */, mode /* :? number */) {
  try {
    mkdirp.sync(path, { fs, mode })
  } catch (err) {
    if (err.code === EEXIST) {
      if (fs.statSync(path).isDirectory()) {
        return
      }
    }
    throw err
  }
}

module.exports = {
  mkdir: pify(mkdir),
  mkdirSync
}
