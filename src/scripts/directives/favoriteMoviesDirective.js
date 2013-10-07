define(['app'], function(gobbmovies){
	gobbmovies.directive('ngFavoriteMoviesDirective', [, function(){
	    return {
	    	restrict: 'A',
        	controller: function($scope, $attrs) {
        		alert('directive instantiate');
            	$scope.$on('handleBroadcast', function() {
                	alert('broadcast received');
            	});
        	},
        	template: '<div class="favoriteMovies">List here</div>'
    	}
	}]);
});