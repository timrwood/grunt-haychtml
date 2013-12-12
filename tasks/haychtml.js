/*
 * grunt-haychtml
 * https://github.com/timrwood/grunt-haychtml
 *
 * Copyright (c) 2013 Tim Wood
 * Licensed under the MIT license.
 */

'use strict';

var haychtml = require('../lib/haychtml');

module.exports = function(grunt) {
	grunt.registerMultiTask('haychtml', 'Render static html files.', function() {
		haychtml.render(this.data, this.async());
	});
};
