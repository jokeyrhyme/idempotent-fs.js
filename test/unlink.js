'use strict'

const path = require('path')

const test = require('ava')

const lib = require('../index.js')

const MISSING_FILE = path.join(__dirname, 'file-that-does-not-exist.js')

test.cb('unlink() on missing file', (t) => {
  lib.unlink(MISSING_FILE, (err) => {
    t.ifError(err)
    t.end()
  })
})

test('unlink() on missing file', (t) => {
  return lib.unlink(MISSING_FILE)
})

test('unlinkSync() on missing file', (t) => {
  t.notThrows(() => {
    lib.unlinkSync(MISSING_FILE)
  })
})

const DIRECTORY_PATH = __dirname

test.cb('unlink() on directory instead of file', (t) => {
  lib.unlink(DIRECTORY_PATH, (err) => {
    t.truthy(err)
    t.end()
  })
})

test('unlink() on directory instead of file', (t) => {
  return lib.unlink(DIRECTORY_PATH)
    .then(() => t.fail('should reject'), () => t.pass('does reject'))
})

test('unlinkSync() on directory instead of file', (t) => {
  t.throws(() => {
    lib.unlinkSync(DIRECTORY_PATH)
  })
})
