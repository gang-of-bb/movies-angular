module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

    /**
     * configuration
     */
		configs:{
			bower : 'bower_components',
			wwwFolder : 'www',
			assetsFolder : 'assets',
      vendors: 'www/scripts/vendors'
		},

    /**
     * connect task
     * expose base folder as public.
     */
		connect: {
		  server: {
		    options: {
		      	port: 3000,
		      	base: 'www',
				    keepalive: true
		    }
		  }
		},
		
    /**
     * copy task
     */
		copy: {
			dev: {
          files: [
            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= configs.vendors %>/bootstrap.js'},
            {src: '<%= configs.bower %>/jquery/jquery.js', dest: '<%= configs.vendors %>/jquery.js'},
            {src: '<%= configs.bower %>/angular/angular.js', dest: '<%= configs.vendors %>/angular.js'},

            {expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: '<%= configs.wwwFolder %>/'}
          ]
			},
      release: {
          files: [
            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.min.js', dest: '<%= configs.vendors %>/bootstrap.js'},
            {src: '<%= configs.bower %>/jquery/jquery.min.js', dest: '<%= configs.vendors %>/jquery.min.js'},
            {src: '<%= configs.bower %>/angular/angular.min.js', dest: '<%= configs.vendors %>/angular.min.js'},

            {expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: '<%= configs.wwwFolder %>/'}
          ]
      }
		},
		
    /**
     * clean tasks
     */
		clean: {
			run: ['<%= configs.wwwFolder %>/*']
		},

    /**
     * minify css tasks
     */
		uglify: {
			release: {
				files: {'<%= configs.wwwFolder %>/scripts/app.js': ['src/scripts/*.js']}
			}
		}
	});

	/**
	 * loading npm tasks
	 */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	/**
	 * register tasks
	 */
  grunt.registerTask('default', ['clean', 'copy:dev']);
	grunt.registerTask('run', ['build:dev', 'connect']);

  grunt.registerTask('build:dev', ['clean', 'copy:dev']);
	grunt.registerTask('build:release', ['clean', 'copy:release', 'uglify:release']);

	grunt.registerTask('rebuild:release', ['clean:run', 'build:release']);
};