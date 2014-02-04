module.exports = function(grunt) {

    var configs = require('./grunt_tasks/config');
    var copy = require('./grunt_tasks/copy');
    var connect = require('./grunt_tasks/connect');
    var stylus = require('./grunt_tasks/stylus');
    var concat = require('./grunt_tasks/concat');
    var clean = require('./grunt_tasks/clean');
    var watch = require('./grunt_tasks/watch');
    var requirejs = require('./grunt_tasks/requirejs');
    var sloc = require('./grunt_tasks/sloc');
    var docco = require('./grunt_tasks/docco');

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        configs: configs,
        stylus: stylus,
        copy: copy,
        connect: connect,
        concat: concat,
        clean: clean,
        watch: watch,
        requirejs: requirejs,
        sloc: sloc,
        docco: docco
    });

    /**
     * loading npm tasks
     */
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-sloc');
    grunt.loadNpmTasks('grunt-docco');

    /**
     * register tasks
     */
    grunt.registerTask('default', ['debug']);

    grunt.registerTask('docs', ['docco', 'connect:docs']);
    grunt.registerTask('debug', ['build:dev', 'connect']);
    grunt.registerTask('move', ['copy:assets', 'copy:src', 'copy:vendors']);
    grunt.registerTask('build', ['clean', 'move', 'stylus:dev', 'concat']);
    grunt.registerTask('debug', ['build', 'connect:debug', 'watch']);
    grunt.registerTask('production', [
        'clean',
        'build',
        'concat:production',
        'copy:production',
        'stylus:production',
        'requirejs',
        'connect:release'
    ]);
};