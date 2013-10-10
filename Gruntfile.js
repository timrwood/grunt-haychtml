module.exports = function (grunt) {
	grunt.initConfig({
		nodeunit : {
			all : ["test/**/*.js"]
		},
		watch : {
			test : {
				files : ["index.js", "test/**/*.js"],
				tasks: ["nodeunit"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-nodeunit");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["nodeunit"]);
};
