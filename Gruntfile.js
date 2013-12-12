/*
 * grunt-haychtml
 * https://github.com/tim.wo
 *
 * Copyright (c) 2013 Tim Wood
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		clean: {
			tests: [
				'test/swig/dest',
				'test/jade/dest'
			],
		},

		haychtml: {
			swig : {
				src : 'test/swig/src',
				dest : 'test/swig/dest',
				data : {
					SOMEKEY : "somevalue"
				},
				engine : "swig"
			}
		},

		nodeunit: {
			tests: ['test/*_test.js'],
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'haychtml', 'nodeunit', 'clean']);
	grunt.registerTask('default', ['jshint', 'test']);

};
