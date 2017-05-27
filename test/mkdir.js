'use strict';

const path = require('path');

const test = require('ava');

const asyncHelper = require('./helpers/async.js');
const lib = require('../index.js');

const EXISTING_DIRECTORY = __dirname;

asyncHelper.assertAsyncNoError(
  test,
  lib.mkdir,
  [EXISTING_DIRECTORY],
  'mkdir() on existing directory'
);

test('mkdirSync() on existing directory', t => {
  t.notThrows(() => {
    lib.mkdirSync(EXISTING_DIRECTORY);
  });
});

const EXISTING_FILE = __filename;

asyncHelper.assertAsyncError(
  test,
  lib.mkdir,
  [EXISTING_FILE],
  'mkdir() on existing file'
);

test('mkdirSync() on existing file', t => {
  t.throws(() => {
    lib.mkdirSync(EXISTING_FILE);
  });
});

const NESTED_MISSING_DIRECTORY = path.join(__dirname, 'missing', 'missing');

asyncHelper.assertAsyncNoError(
  test,
  lib.mkdir,
  [NESTED_MISSING_DIRECTORY],
  'mkdir() on missing directory within missing directory'
);

test('mkdirSync() on missing directory within missing directory', t => {
  t.notThrows(() => {
    lib.mkdirSync(NESTED_MISSING_DIRECTORY);
  });
});
