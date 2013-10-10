var File = require("../../index").File;

exports.file = {
	"source" : function (t) {
		var a = new File("a/path.html"),
			b = new File("b/path.html");

		t.equal(a.src, "a/path.html", "It should set the source attribute based on the first arg");
		t.equal(b.src, "b/path.html", "It should set the source attribute based on the first arg");

		t.done();
	}
};
