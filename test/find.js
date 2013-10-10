var find = require("../index").find,
	path = require("path");

function keysFromFiles (files) {
	var keys = {};
	files.forEach(function (file) {
		keys[file.src] = file;
	});
	return keys;
}

exports.find = {
	"find html" : function (t) {
		var dirname = path.join(__dirname, 'templates'),
			files = find(dirname),
			keys = keysFromFiles(files);

		t.notEqual(keys['public.html'], undefined, "Should include root level html files");
		t.equal(keys['public.jade'], undefined, "Should not include root level jade files");
		t.equal(keys['public.swig'], undefined, "Should not include root level swig files");

		t.equal(keys['.dotfile'], undefined, "Should not include dotfiles");

		t.notEqual(keys['a/a1.html'], undefined, "Should include nested html files");
		t.notEqual(keys['a/e/e1.html'], undefined, "Should include nested html files");

		t.equal(keys['private.html'], undefined, "Should not include private root html files");
		t.equal(keys['_private.html'], undefined, "Should not include private root html files");

		t.equal(keys['a/a2.html'], undefined, "Should not include nested private files");
		t.equal(keys['a/_a2.html'], undefined, "Should not include nested private files");

		t.equal(keys['a/_d/d1.html'], undefined, "Should not include nested private folders");
		t.equal(keys['a/d/d1.html'], undefined, "Should not include nested private folders");

		t.equal(keys['a/e/_e2.html'], undefined, "Should not include nested private folders");
		t.equal(keys['a/e/e2.html'], undefined, "Should not include nested private folders");

		t.equal(keys['b/b1.html'], undefined, "Should not include nested private folders");
		t.equal(keys['_b/b1.html'], undefined, "Should not include nested private folders");

		t.equal(keys['b/c/c1.html'], undefined, "Should not include nested private folders");
		t.equal(keys['_b/c/c1.html'], undefined, "Should not include nested private folders");

		t.done();
	},

	"find jade" : function (t) {
		var dirname = path.join(__dirname, 'templates'),
			files = find(dirname, ".jade"),
			keys = keysFromFiles(files);

		t.equal(keys['public.html'], undefined, "Should not include root level html files");
		t.notEqual(keys['public.jade'], undefined, "Should include root level jade files");
		t.equal(keys['public.swig'], undefined, "Should not include root level swig files");

		t.done();
	},

	"find swig" : function (t) {
		var dirname = path.join(__dirname, 'templates'),
			files = find(dirname, ".swig"),
			keys = keysFromFiles(files);

		t.equal(keys['public.html'], undefined, "Should not include root level html files");
		t.equal(keys['public.jade'], undefined, "Should not include root level jade files");
		t.notEqual(keys['public.swig'], undefined, "Should include root level swig files");

		t.done();
	}
};
