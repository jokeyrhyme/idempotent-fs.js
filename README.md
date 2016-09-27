# idempotent-fs.js [![npm](https://img.shields.io/npm/v/idempotent-fs.svg?maxAge=2592000)](https://www.npmjs.com/package/idempotent-fs) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/45ddby01g9niu9w8?svg=true&branch=master)](https://ci.appveyor.com/project/jokeyrhyme/idempotent-fs-js) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/idempotent-fs.js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/idempotent-fs.js)

`fs.unlink()` that _won't_ throw if the file is missing + other outcome-aware Node.js "fs" functions


## What is this?

We have taken inspiration from [idempotent REST APIs](http://restcookbook.com/HTTP%20Methods/idempotency/).

The functions provided here intentionally mirror the "fs" module that Node.js provides,
but will _not_ throw errors under certain outcome-oriented conditions.

We've wrapped any asynchronous functions provided here with the wonderful [pify](https://github.com/sindresorhus/pify),
you can use either `Promise`-style or traditional callback-style.

Internally, we use [graceful-fs](https://github.com/isaacs/node-graceful-fs) instead of using the built-in "fs" module directly.


## Usage


### `unlink()` and `unlinkSync()`

See the [upstream `unlink()` and `unlinkSync`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_unlink_path_callback) "fs" functions in Node.js.

-   **Changed**: No "ENOENT" error. Trying to `unlink()` a file that is already gone is no longer an error. Outcome is already accomplished!
