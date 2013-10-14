define(['app', 'services/userService'], function(gobbmovies, userService){
	gobbmovies.directive('ngFavoriteMovies', function($rootScope, userService){
	    return {
	    	restrict: 'AEC',
            replace: true,
        	link: function($scope, $attrs, $element) {
                $scope.favoriteMovies = [];

                /**
                 * watch for rootscope user change.
                 */
                $rootScope.$watch('user', function () {
                    if($rootScope.user){
                        userService.getFavoriteMovies($rootScope.user.id, function(movies){
                            $scope.favoriteMovies = movies;
                        });                     
                    }
                });

                /**
                 * listen for addFavoriteMovie 
                 * @param  {event} event
                 * @param  {movie} movie
                 */
            	$scope.$on('addFavoriteMovie', function(event, movie) {
                	$scope.favoriteMovies.push(movie);
            	});

                /**
                 * listen for removeFavoriteMovie
                 * @param  {event} event
                 * @param  {movie} movie
                 */
                $scope.$on('removeFavoriteMovie', function(event, movie) {
                    for(i=0;i<$scope.favoriteMovies.length;i++){
                        if($scope.favoriteMovies[i].id == movie.id){
                          $scope.favoriteMovies.splice(i, 1);
                        }
                    }
                });
        	},
        	templateUrl: '/templates/movie/favoriteMovies.html'
    	};
	});
});