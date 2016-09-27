'use strict'

const path = require('path')

const test = require('ava')

const lib = require('../index.js')

const MISSING_DIRECTORY = path.join(__dirname, 'directory-that-does-not-exist')

test.cb('rmdir() on missing directory', (t) => {
  lib.rmdir(MISSING_DIRECTORY, (err) => {
    t.ifError(err)
    t.end()
  })
})

test('rmdir() on missing directory', (t) => {
  return lib.rmdir(MISSING_DIRECTORY)
})

test('rmdirSync() on missing directory', (t) => {
  t.notThrows(() => {
    lib.rmdirSync(MISSING_DIRECTORY)
  })
})

if (process.platform.indexOf('win') !== 0) {
  // https://github.com/nodejs/node/issues/8797
  const FILE_PATH = __filename

  test.cb('rmdir() on file instead of directory', (t) => {
    lib.rmdir(FILE_PATH, (err) => {
      t.truthy(err)
      t.end()
    })
  })

  test('rmdir() on file instead of directory', (t) => {
    return lib.rmdir(FILE_PATH)
      .then(() => t.fail('should reject'), () => t.pass('does reject'))
  })

  test('rmdirSync() on file instead of directory', (t) => {
    t.throws(() => {
      lib.rmdirSync(FILE_PATH)
    })
  })
}
