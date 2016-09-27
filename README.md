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


### `mkdir()` and `mkdirSync()`

See the [upstream `mkdir()` and `mkdirSync`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_mkdir_path_mode_callback) "fs" functions in Node.js.

-   **Changed**: No "EEXIST" error. Trying to `mkdir()` a directory that already exists is not an error. Mission accomplished!


### `rmdir()` and `rmdirSync()`

See the [upstream `rmdir()` and `rmdirSync`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_rmdir_path_callback) "fs" functions in Node.js.

-   **Changed**: No "ENOENT" error. Trying to `rmdir()` a directory that is already gone is no longer an error. Mission accomplished!


### `unlink()` and `unlinkSync()`

See the [upstream `unlink()` and `unlinkSync`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_unlink_path_callback) "fs" functions in Node.js.

-   **Changed**: No "ENOENT" error. Trying to `unlink()` a file that is already gone is no longer an error. Mission accomplished!


## Roadmap

-   [ ] [`chmod()`, `fchmod()`, `lchmod()`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_chmod_path_mode_callback) ??

-   [ ] [`chown()`, `fchown()`, `lchown()`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_chown_path_uid_gid_callback) ??

-   [ ] [`link()`, `symlink()`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_link_srcpath_dstpath_callback)

-   [ ] [`mkdir()`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_mkdir_path_mode_callback) should also test provided mode (if any)
