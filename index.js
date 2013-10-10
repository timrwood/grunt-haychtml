

// Given a directory path, find all valid file names to render.
//
// Recursively search through the directory and create an array of
// valid file names.
//
// Valid file names end with the extension param, which defaults to ".html"
// Valid file names cannot start with an underscore, nor can they be contained
// within a directory that starts with an underscore.
//
// Valid examples:
// index.html
// about.html
// contact/form.html
//
// Invalid examples
// _header.html
// _includes/post.html
// about/_partials/footer.html

function files (dir, extension) {

}

module.exports = {
	files : files
};
