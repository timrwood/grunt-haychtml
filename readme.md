# HaychTML

A template agnostic static site generator.

[![Build Status](https://travis-ci.org/timrwood/haychtml.png?branch=master)](https://travis-ci.org/timrwood/haychtml)

## HaychTML recursively renders templates from a source folder to a destination folder.

```
src/index.jade            > dest/index.html
src/subfolder/index.jade  > dest/subfolder/index.html
```

## HaychTML ignores files and folders that start with an underscore.

```
src/_base.jade             >
src/_includes/header.jade  >
src/index.jade             > dest/index.html
```

## HaychTML can strip extensions for cleaner urls.

This way, you can link to other pages using `/about/` instead of `/about.html`.

```
src/index.jade > dest/index.html
src/about.jade > dest/about/index.html
```

## HaychTML works with grunt.

```javascript
grunt.initConfig({
	haychtml : {
		target1 : {
			engine: 'jade',
			extension: '.jade',
			src: 'src',
			dest: 'dest',
			data : {
				STATIC_URL : '/static/'
			}
		},
		target2 : {
			engine: 'swig',
			src: 'project/templates',
			dest: 'deploy',
			stripExtension: false,
			data : {
				STATIC_URL : '/static/'
			}
		}
	}
});
```

## Options

```javascript
var haychtml = require('haychtml');

haychtml.render({
	src: "pages",
	dest: "deploy",
	engine: "jade",
	extension: ".jade",
	stripExtension: true,
	data : {
		CDN_BASE_URL : "http://cdn.example.com/"
	}
});
```

### src (required)

The folder in which to find the source files.

### dest (required)

The folder in which to place rendered files.

### engine (required)
The template engine to use to render the files.
The template engine must be supported by [consolidate.js](https://github.com/visionmedia/consolidate.js/).

### stripExtension

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

### extension

The source files extenstion. This defaults to `.html`, but can be changed
depending on the type of template engine used (e.g. `.jade`).

Only files with this extension will be rendered.

### data

Global data to be passed to each template.

## License : MIT
