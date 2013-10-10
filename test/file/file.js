var File = require("../../index").File;

exports.file = {
	"source" : function (t) {
		var a = new File("a/path.html"),
			b = new File("b/path.html");

		t.equal(a.src, "a/path.html", "The src attribute should equal the first arg.");
		t.equal(b.src, "b/path.html", "The src attribute should equal the first arg.");

		t.done();
	},

	"adding data" : function (t) {
		var file = new File("a.html");

		t.deepEqual(Object.keys(file.data), [], "Data should be empty to start.");

		file.addData({
			one : 1
		});

		t.deepEqual(Object.keys(file.data), ["one"], "Data should add values if not already set.");
		t.equal(file.data.one, 1, "Data should use the passed value to set values.");

		file.addData({
			one : 2
		});

		t.equal(file.data.one, 1, "Data should not overwrite the existing value.");

		file.addData({
			one : 3
		}, true);

		t.equal(file.data.one, 3, "Data should overwrite the existing value if the second arg is true.");

		file.addData({
			one : 4,
			two : 5
		});

		t.equal(file.data.one, 3, "Data should not overwrite the existing value.");
		t.equal(file.data.two, 5, "Even if another value was set, new values should be set.");

		file.addData();

		t.equal(file.data.one, 3, "File#addData should be able to handle a null data set.");

		t.done();
	}
};
