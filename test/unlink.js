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
