module.exports = {
	dev: {
	  files: [
	    {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= configs.vendors %>/bootstrap.js'},
	    {src: '<%= configs.bower %>/jquery/jquery.js', dest: '<%= configs.vendors %>/jquery.js'},
	    {src: '<%= configs.bower %>/angular/angular.js', dest: '<%= configs.vendors %>/angular.js'},
	    {src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
	    {src: '<%= configs.bower %>/toastr/toastr.js', dest: '<%= configs.vendors %>/toastr.js'},
	    {src: '<%= configs.bower %>/ngInfiniteScroll/ng-infinite-scroll.js', dest: '<%= configs.vendors %>/ng-infinite-scroll.js'},

		{expand: true, cwd: 'src/scripts/',src: ['**'], dest: '<%= configs.wwwFolder %>/scripts/'},	            

	    {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.wwwFolder %>/styles/bootstrap.css'},
	    {src: '<%= configs.bower %>/toastr/toastr.css', dest: '<%= configs.wwwFolder %>/styles/toastr.css'},
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

}