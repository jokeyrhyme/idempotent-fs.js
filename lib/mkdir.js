/* @flow */
'use strict'

const fs = require('graceful-fs')
const pify = require('pify')

const EEXIST = 'EEXIST'

function mkdir (
  path /* : string */,
  mode /* : number | (err :? Error) => void */,
  callback /* : (err :? Error) => void */
) {
  let fn
  if (typeof mode === 'function') {
    fn = fs.mkdir.bind(fs, path)
    callback = mode
  } else {
    fn = fs.mkdir.bind(fs, path, mode)
  }

  fn((err) => {
    if (typeof callback === 'function') {
      if (err && err.code !== EEXIST) {
        callback(err)
      } else {
        callback(null)
      }
    }
  })
}

function mkdirSync (path /* : string */, mode /* :? number */) {
  try {
    fs.mkdirSync(path, mode)
  } catch (err) {
    if (err.code !== EEXIST) {
      throw err
    }
  }
}

module.exports = {
  mkdir: pify(mkdir),
  mkdirSync
}
