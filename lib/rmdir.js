/* @flow */
'use strict';

const fs = require('graceful-fs');
const pify = require('pify');

const ENOENT = 'ENOENT';

function rmdir(path /* : string */, callback) {
  fs.rmdir(path, err => {
    if (err && err.code !== ENOENT) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

function rmdirSync(path /* : string */) {
  try {
    fs.rmdirSync(path);
  } catch (err) {
    if (err.code !== ENOENT) {
      throw err;
    }
  }
}

module.exports = {
  rmdir: pify(rmdir),
  rmdirSync
};
