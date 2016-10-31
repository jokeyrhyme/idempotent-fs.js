# Change Log


## Unreleased


## 1.2.0 - 2016-10-31


### Changed

-   `mkdir()` now internally uses [mkdirp](https://github.com/substack/node-mkdirp)


### Fixed

-   `mkdir()` results in an "EEXIST" error if the existing path is a file

    -   no "EEXIST" error if the existing path is a directory


## 1.1.0 - 2016-09-28


### Added

-   [`mkdir()` and `mkdirSync()`](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_mkdir_path_mode_callback)

    -   but without desired mode checking so far
