module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		configs:{
			vendorsFilesToCopy : {src: 'bower_components/jquery/jquery.min.js', dest: 'www/scripts/jquery.min.js'},
			assetsFilesToCopy : {expand: true, cwd: 'assets/', src: ['**'], dest: 'www/'},
			filesToUglify : {'www/scripts/app.js': ['src/scripts/*.js']},
			folderToClean : ['www/*']
		},

		connect: {
		  server: {
		    options: {
		      	port: 3000,
		      	base: 'www',
				keepalive: true
		    }
		  }
		},
			
		copy: {
			assets: {
				files: [
					'<%= configs.assetsFilesToCopy %>'
				]
			},
			vendors: {
				files: [
					'<%= configs.vendorsFilesToCopy %>'
				]
			},
			dev: {
			
			}
		},
			
		clean: {
			run: '<%= configs.folderToClean %>'
		},

		uglify: {
			release: {
				files: '<%= configs.filesToUglify %>'
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
  	grunt.registerTask('default', []);
	grunt.registerTask('run', ['copy:assets', 'copy:vendors', 'connect']);
	grunt.registerTask('build:release', ['copy:assets', 'copy:vendors', 'uglify:release']);
	grunt.registerTask('rebuild:release', ['clean:run', 'build:release']);	
};