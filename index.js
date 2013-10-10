
/****************************  File  *******************************

An object to store a template source path, destination path, and data.
*/

function File (src) {
	this.src = src;
	this.data = {};
}

/*
Given a data object, this method will loop through and copy all
properties onto the data object.

Only if force is true will this method overwrite values on this.data
if there is an existing value already.
*/

File.prototype.addData = function (data, force) {

};

/*
Given a destination base path, return the path where the rendered template
should be saved.

If stripExtension is true, this will try to save files in a subfolder
as an index.html file. Because of this transformation, it is possible to
have two source files that map to the same destination path. If this happens,
an error will be thrown to help debug.

Examples with stripExtension = true;
index.html       > index.html
about.html       > about/index.html
about/index.html > about/index.html

If stripExtension is false, the destination path will directly mirror the
source path.

Examples with stripExtension = true;
index.html       > index.html
about.html       > about.html
about/index.html > about/index.html
*/

File.prototype.dest = function (basePath, stripExtension) {

};



/**************************  Crawler  *******************************

Given a directory path, find all valid file names to render.

Returns an array of File objects.

Recursively search through the directory and create an array of
valid file names.

Valid file names end with the extension param, which defaults to ".html"

Valid file names cannot start with an underscore, nor can they be contained
within a directory that starts with an underscore.

Valid examples:
index.html
about.html
contact/form.html

Invalid examples
_header.html
_includes/post.html
about/_partials/footer.html
*/

function find (dir, extension) {

}

/*
Given an array of File objects, a destination base path, a global data
object to apply to each file, and a template rendering engine, render
all files to their destination.
*/

function render (files, dest, data, engine) {

}

/*
This is the main entry point for external use.

* config.src
The folder in which to find the source files.

* config.dest
The folder in which to place rendered files.

* config.stripExtension
Whether or not to strip .html from the source files. See File#dest for
more info. Defaults to true.

* config.extension
The source files extenstion. This defaults to .html, but can be changed
depending on the type of template engine used (e.g. .jade)

* config.engine
The template engine to use to render the files.
The template engine must be supported by consolidate.

github.com/visionmedia/consolidate.js

When using a template engine, you should also add that to your package.json
dependancies with something like the following.

npm install --save-dev jade
npm install --save-dev swig

*/

function alone (config) {
	if (!config.src) {
		throw new Error("No source directory provided. " +
			"Set config.src to a directory that contains source templates.");
	}
	if (!config.dest) {
		throw new Error("No destination directory provided. " +
			"Set config.dest to a directory in which to render and save templates.");
	}
	if (!config.engine) {
		throw new Error("No template engine provided. " +
			"Set config.engine to a consolidate.js supported template engine. " +
			"You may also want to add it to your package.json.");
	}
}

/*
Export everything.
*/
module.exports = alone;
alone.File = File;
alone.find = find;
alone.render = render;
