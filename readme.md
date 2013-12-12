# grunt-haychtml [![Build Status](https://travis-ci.org/timrwood/grunt-haychtml.png?branch=master)](https://travis-ci.org/timrwood/grunt-haychtml)

> A template agnostic static site generator.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-haychtml --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-haychtml');
```

## The "haychtml" task

### Overview

This task recursively renders templates from a source folder to a destination folder.

```
src/index.jade            > dest/index.html
src/subfolder/index.jade  > dest/subfolder/index.html
```

It ignores files and folders that start with an underscore.

```
src/_base.jade             >
src/_includes/header.jade  >
src/index.jade             > dest/index.html
```

It can strip extensions for cleaner urls.

This way, you can link to other pages using `/about/` instead of `/about.html`.

```
src/index.jade > dest/index.html
src/about.jade > dest/about/index.html
```


In your project's Gruntfile, add a section named `haychtml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  haychtml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.src (required)
Type: `String`

The folder in which to find the source files.

#### options.dest (required)
Type: `String`

The folder in which to place rendered files.

#### options.engine (required)
Type: `String`

The template engine to use to render the files.
The template engine must be supported by [consolidate.js](https://github.com/visionmedia/consolidate.js/).

#### options.extenstion
Type: `String`
Default: `".html"`

The source files extenstion. This defaults to `.html`, but can be changed
depending on the type of template engine used (e.g. `.jade`).

Only files with this extension will be rendered.

#### options.data
Type: `Object`

Global data to be passed to each template.

#### options.stripExtension
Type: `Boolean`
Default: `true`

Whether or not to strip `.html` from the source files. Defaults to `true`.

If `stripExtension` is `true`, this will try to save files in a subfolder
as an `index.html` file. Because of this transformation, it is possible to
have two source files that map to the same destination path. If this happens,
an error will be thrown to help debug.

Examples with `stripExtension = true`.

```
index.html       > index.html
about.html       > about/index.html
about/index.html > about/index.html
```

If `stripExtension` is `false`, the destination path will directly mirror the
source path.

Examples with `stripExtension = false`.

```
index.html       > index.html
about.html       > about.html
about/index.html > about/index.html
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 : Initial release
