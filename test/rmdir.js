'use strict'

const path = require('path')

const test = require('ava')

const asyncHelper = require('./helpers/async.js')
const lib = require('../index.js')

const MISSING_DIRECTORY = path.join(__dirname, 'directory-that-does-not-exist')

asyncHelper.assertAsyncNoError(test, lib.rmdir, [ MISSING_DIRECTORY ], 'rmdir() on missing directory')

test('rmdirSync() on missing directory', (t) => {
  t.notThrows(() => {
    lib.rmdirSync(MISSING_DIRECTORY)
  })
})

if (process.platform.indexOf('win') !== 0) {
  // https://github.com/nodejs/node/issues/8797
  const FILE_PATH = __filename

  asyncHelper.assertAsyncError(test, lib.rmdir, [ FILE_PATH ], 'rmdir() on file instead of directory')

  test('rmdirSync() on file instead of directory', (t) => {
    t.throws(() => {
      lib.rmdirSync(FILE_PATH)
    })
  })
}
