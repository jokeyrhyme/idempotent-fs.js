'use strict'

const path = require('path')

const test = require('ava')

const asyncHelper = require('./helpers/async.js')
const lib = require('../index.js')

const MISSING_FILE = path.join(__dirname, 'file-that-does-not-exist.js')

asyncHelper.assertAsyncNoError(test, lib.unlink, [ MISSING_FILE ], 'unlink() on missing file')

test('unlinkSync() on missing file', (t) => {
  t.notThrows(() => {
    lib.unlinkSync(MISSING_FILE)
  })
})

const DIRECTORY_PATH = __dirname

asyncHelper.assertAsyncError(test, lib.unlink, [ DIRECTORY_PATH ], 'unlink() on directory instead of file')

test('unlinkSync() on directory instead of file', (t) => {
  t.throws(() => {
    lib.unlinkSync(DIRECTORY_PATH)
  })
})
