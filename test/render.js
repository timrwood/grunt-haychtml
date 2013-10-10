var alone = require("../index"),
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

		alone({
			src : srcDirname,
			dest : destDirname,
			data : {
				SOMEKEY : "somevalue"
			},
			engine : "swig",
			done : done
		});
	}
};
