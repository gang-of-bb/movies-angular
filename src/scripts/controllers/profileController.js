define(['app', 'toastr'], function(gobbmovies, toastr){
	gobbmovies.controller('profileController' , ['$scope', '$rootScope', 'userService' ,
		function ($scope, $rootScope, userService) {
	
		/**
		 * Attributes
		 */
		$scope.profile = {};
		$scope.updateProfile = {};
		$scope.editMode = false;

		/**
         * watch for rootscope user change.
         */
        $rootScope.$watch('user', function () {
            if($rootScope.user){
				$scope.profile = angular.copy($rootScope.user);
				$scope.updateProfile = angular.copy($scope.profile);
            }
        });
	
		/**
		 * update user profile.
		 */
		$scope.updateUser = function(updateProfileForm){
			toastr.options = {"positionClass": "toast-bottom-full-width"};
			if(updateProfileForm.$valid){
				userService.update($scope.updateProfile, function(data){
					$scope.profile = data;
					$scope.editMode = false;
					toastr.success('', 'Profile updated !');
				});
			}else{
				toastr.error('', 'Invalid profile');
			}
		}

		/**
		 * toggle value of editMode boolean.
		 */
		$scope.toggleMode = function(){
			$scope.editMode = !$scope.editMode;
		}
	}]);
});