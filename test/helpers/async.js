'use strict'

function assertAsyncError (test, fn, args, msg) {
  test.cb(`${msg} (callback)`, (t) => {
    fn(...args, (err) => {
      t.truthy(err)
      t.end()
    })
  })

  test(`${msg} (promise)`, (t) => {
    return fn(...args)
      .then(() => t.fail('should reject'), () => t.pass('does reject'))
  })
}

function assertAsyncNoError (test, fn, args, msg) {
  test.cb(`${msg} (callback)`, (t) => {
    fn(...args, (err) => {
      t.ifError(err)
      t.end()
    })
  })

  test(`${msg} (promise)`, (t) => {
    return fn(...args)
  })
}

module.exports = {
  assertAsyncError,
  assertAsyncNoError
}
