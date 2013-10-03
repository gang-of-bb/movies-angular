define(['app', 'services/movieService', 'services/categoryService'], function(gobbmovies, movieService, categoryService){

	gobbmovies.controller('movieController' , ['$scope', 'movieService', 'categoryService' , function ($scope, movieService, categoryService) {

		/**
		 * Attributes
		 */
    	$scope.movies = [];
        $scope.categories = [];

        /**
         * initialization
         */
        movieService.getAll(function(data){
            $scope.movies = data;
        });

        categoryService.getAll(function(data){
           $scope.categories = data;
        });

    	/**
    	 * functions
    	 */

  	}]);

});

