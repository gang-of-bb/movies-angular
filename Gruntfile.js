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
      		vendors: 'www/scripts/vendors',
      		templatesDest : 'www/templates/',
      		templatesSrc : 'src/scripts/templates/'
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

		concat: {
			dev:{
				src: ['src/scripts/require-config.js', 'src/scripts/kernel.js'],
				dest: 'www/scripts/index.js'
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
	            {src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},

				{expand: true, cwd: 'src/scripts/',src: ['**'], dest: '<%= configs.wwwFolder %>/scripts/'},	            

	            {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.wwwFolder %>/styles/bootstrap.css'},
	            {expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: '<%= configs.wwwFolder %>/fonts/'},

	            {expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: '<%= configs.wwwFolder %>/'},

	            {expand: true, cwd: '<%= configs.templatesSrc %>', src: ['**'], dest: '<%= configs.templatesDest %>'}
	          ]
			},
	      release: {
	          files: [
	            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.min.js', dest: '<%= configs.vendors %>/bootstrap.js'},
	            {src: '<%= configs.bower %>/jquery/jquery.min.js', dest: '<%= configs.vendors %>/jquery.js'},
	            {src: '<%= configs.bower %>/angular/angular.min.js', dest: '<%= configs.vendors %>/angular.js'},
	            {src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},

	            {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.wwwFolder %>/styles/bootstrap.css'},
	            {expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: '<%= configs.wwwFolder %>/fonts/'},

	            {expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: '<%= configs.wwwFolder %>/'},

	            {expand: true, cwd: '<%= configs.templatesSrc %>', src: ['**'], dest: '<%= configs.templatesDest %>'}
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
	grunt.loadNpmTasks('grunt-contrib-concat');

	/**
	 * register tasks
	 */
  	grunt.registerTask('default', ['clean', 'copy:dev']);
	grunt.registerTask('run', ['build:dev', 'connect']);

 	grunt.registerTask('build:dev', ['clean', 'copy:dev', 'concat:dev']);
	grunt.registerTask('build:release', ['clean', 'copy:release', 'uglify:release']);

	grunt.registerTask('rebuild:release', ['clean:run', 'build:release']);
};