module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
					{expand: true, cwd: 'assets/', src: ['**'], dest: 'www/'}
				]
			},
			vendors: {
				files: [
					{src: 'bower_components/jquery/jquery.min.js', dest: 'www/scripts/jquery.min.js'}
				]
			},
			dev: {
			
			}
		},
		
		clean: {
			run: ['www/*']
		},

		uglify: {
			release: {
				files: {
					'www/scripts/app.js': ['src/scripts/*.js']
				}
			}
		}		
  });


  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', []);
	grunt.registerTask('run', ['copy:assets', 'copy:vendors', 'connect']);
	grunt.registerTask('build:release', ['copy:assets', 'copy:vendors', 'uglify:release']);
	grunt.registerTask('rebuild:release', ['clean:run', 'build:release']);
	
};