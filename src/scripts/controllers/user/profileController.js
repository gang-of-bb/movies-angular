define([
	'app',
	'toastr',
	'directives/user/userFormDirective',
	'directives/comment/commentsDirective'
	], function(gobbmovies, toastr, userFormDirective, commentsDirective){
	gobbmovies.controller('profileController' , ['$scope', '$rootScope', 'userService' ,
		function ($scope, $rootScope, userService) {
	
		/**
		 * Attributes
		 */
		$scope.profile = {};
		$scope.editMode = false;

		/**
         * watch for rootscope user change.
         */
        $rootScope.$watch('user', function () {
            if($rootScope.user){
				$scope.profile = $rootScope.user;
            }
        });

		/**
		 * toggle value of editMode boolean.
		 */
		$scope.toggleMode = function(){
			$scope.editMode = !$scope.editMode;
		}
	}]);
});