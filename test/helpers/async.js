'use strict'

function assertAsyncError (test, fn, args, msg) {
  test.cb(`${msg} (callback)`, (t) => {
    fn.apply(null, args.concat([ (err) => {
      t.truthy(err)
      t.end()
    } ]))
  })

  test(`${msg} (promise)`, (t) => {
    return fn.apply(null, args)
      .then(() => t.fail('should reject'), () => t.pass('does reject'))
  })
}

function assertAsyncNoError (test, fn, args, msg) {
  test.cb(`${msg} (callback)`, (t) => {
    fn.apply(null, args.concat([ (err) => {
      t.ifError(err)
      t.end()
    } ]))
  })

  test(`${msg} (promise)`, (t) => {
    return fn.apply(null, args).then(() => t.pass())
  })
}

module.exports = {
  assertAsyncError,
  assertAsyncNoError
}
