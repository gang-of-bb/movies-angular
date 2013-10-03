module.exports = function(grunt) {

	var config = require('./grunt_tasks/config');
	var copy = require('./grunt_tasks/copy');
	var connect = require('./grunt_tasks/connect');
	var concat = require('./grunt_tasks/concat');
	var uglify = require('./grunt_tasks/uglify');
	var clean = require('./grunt_tasks/clean');
	var watch = require('./grunt_tasks/watch');
	var concurrent = require('./grunt_tasks/concurrent');

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

	    /**
	     * configuration
	     */
		configs: config,

	    /**
	     * copy task
	     */
		copy: copy,

		/**
		 * connect config task
		 */
		connect: connect,

		/**
		 * concat config  tasks
		 */
		concat: concat,
		
	    /**
	     * clean config  tasks
	     */
		clean: clean,

	    /**
	     * minify css config tasks
	     */
	    uglify : uglify,

	    /**
	     * watch task
	     */
	    watch : watch,

	    /**
	     * concurrent task
	     */
	    concurrent : concurrent
	});

	/**
	 * loading npm tasks
	 */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');

	/**
	 * register tasks
	 */
  	grunt.registerTask('default', ['clean', 'copy:dev']);
	/*grunt.registerTask('run', ['concurrent:run', 'concurrent:watch']);*/
	grunt.registerTask('run', ['build:dev', 'connect']);

 	grunt.registerTask('build:dev', ['clean', 'copy:dev', 'concat:dev']);
	grunt.registerTask('build:release', ['clean', 'copy:release', 'uglify:release']);

	grunt.registerTask('rebuild:release', ['clean', 'build:release']);
};