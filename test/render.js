var alone = require("../index"),
	path = require("path"),
	fs = require("fs");

exports.find = {
	"render swig" : function (t) {
		var srcDirname = path.join(__dirname, 'swig/src'),
			destDirname = path.join(__dirname, 'swig/dest'),
			expectedDirname = path.join(__dirname, 'swig/expected');

		t.expect(1);

		function testFile (filename) {
			var destContents = fs.readFileSync(path.join(destDirname, filename), 'utf8'),
				expectedContents = fs.readFileSync(path.join(expectedDirname, filename), 'utf8');

			t.deepEqual(
				destContents.split('\n'),
				expectedContents.split('\n'),
				filename + " should match the expected output."
			);
		}

		function done () {
			testFile("index.html");

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
