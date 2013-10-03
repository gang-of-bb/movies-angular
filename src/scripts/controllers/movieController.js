define(['app', 'services/movieService', 'services/categoryService'], 
  function(gobbmovies, movieService, categoryService){

	gobbmovies.controller('movieController' , ['$scope', 'movieService', 'categoryService' , 
    function ($scope, movieService, categoryService) {

		/**
		 * Attributes
		 */
    	$scope.movies = [];
      $scope.categories = [];

      /**
       * initialization
       */
      movieService.getAll(null, function(data){
          $scope.movies = data;
      });

      categoryService.getAll(function(data){
         $scope.categories = data;
      });

      /**
       * get movies by category id
       * @param  {[type]} categoryId
       */
      $scope.getMoviesByCategory = function(categoryId){
          var query = '?categoryId='+categoryId;
          movieService.getAll(query, function(data){
              $scope.movies = data;
          });
      };

      /**
       * get all movies
       */
      $scope.getAllMovies = function(){
          movieService.getAll(null, function(data){
              $scope.movies = data;
          });
      };

  	}]);

});

