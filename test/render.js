var render = require("../index").render,
	path = require("path"),
	fs = require("fs");

exports.find = {
	"render swig" : function (t) {
		var srcDirname = path.join(__dirname, 'swig/src'),
			destDirname = path.join(__dirname, 'swig/dest'),
			expectedDirname = path.join(__dirname, 'swig/expected');

		t.expect(6);

		function testFile (filename) {
			var destPath = path.join(destDirname, filename),
				expectedPath = path.join(expectedDirname, filename);

			t.ok(fs.existsSync(destPath), "Destination file should exist.");
			t.ok(fs.existsSync(expectedPath), "Expected file should exist.");

			t.deepEqual(
				fs.readFileSync(destPath, 'utf8').split('\n'),
				fs.readFileSync(expectedPath, 'utf8').split('\n'),
				filename + " should match the expected output."
			);
		}

		function done () {
			testFile("index.html");
			testFile("about/index.html");

			t.done();
		}

		render({
			src : srcDirname,
			dest : destDirname,
			data : {
				SOMEKEY : "somevalue"
			},
			engine : "swig"
		}, done);
	},

	"throwing errors" : function (t) {
		t.throws(function () {
			render({});
		}, "Missing a source should throw an error");

		t.throws(function () {
			render({
				src : 'a'
			});
		}, "Missing a destination should throw an error");

		t.throws(function () {
			render({
				src : 'a',
				dest : 'b'
			});
		}, "Missing an engine should throw an error");

		t.throws(function () {
			render({
				src : 'a',
				dest : 'b',
				engine : 'NON SENSICAL ENGINE NAME'
			});
		}, "Using an uninstalled engine should throw an error");

		t.done();
	}
};
