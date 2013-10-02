define(['app'], function(gobbmovies){

	gobbmovies.controller('movieController' , ['$scope' , function ($scope) {

		/**
		 * Attributes
		 */
		$scope.title = "cool angularjs";
    	$scope.movies = ["themouette","fredgate","bhtz", "cireme"];

    	/**
    	 * functions
    	 */
    	$scope.remove = function(movie){
    		$scope.movies.splice($scope.movies.indexOf(movie), 1 );
    	}
  	}]);

});

