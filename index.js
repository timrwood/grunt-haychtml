
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

module.exports = {
	find : find,
	File : File
};
