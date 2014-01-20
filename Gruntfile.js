module.exports = function(grunt) {

    var configs = require('./grunt_tasks/config');
    var copy = require('./grunt_tasks/copy');
    var connect = require('./grunt_tasks/connect');
    var stylus = require('./grunt_tasks/stylus');
    var concat = require('./grunt_tasks/concat');
    var uglify = require('./grunt_tasks/uglify');
    var clean = require('./grunt_tasks/clean');
    var watch = require('./grunt_tasks/watch');

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        configs: configs,
        stylus: stylus,
        copy: copy,
        connect: connect,
        concat: concat,
        clean: clean,
        uglify: uglify,
        watch: watch,
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
    grunt.loadNpmTasks('grunt-contrib-stylus');

    /**
     * register tasks
     */
    grunt.registerTask('default', ['debug']);

    grunt.registerTask('debug', ['build:dev', 'connect']);
    grunt.registerTask('move', ['copy:assets', 'copy:src', 'copy:vendors']);
    grunt.registerTask('build', ['clean', 'move', 'stylus:dev', 'concat']);
    grunt.registerTask('debug', ['build', 'connect:debug', 'watch']);
};