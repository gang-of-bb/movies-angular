define([
	'app',
	'services/userService'
	],
	function(gobbmovies, userService){
		gobbmovies.controller('userShowController' , ['$scope', '$routeParams', 'userService' , function ($scope, $routeParams, userService) {
			
			var userId = $routeParams.id;

			/**
			 * Attributes
			 */
			$scope.profile = {};

			userService.getUserById(userId, function(user){
				$scope.profile = user;
			});
	}]);
});