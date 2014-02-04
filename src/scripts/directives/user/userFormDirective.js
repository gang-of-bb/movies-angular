define([
        'app',
        'toastr',
        'services/userService'
    ],
    function(gobbmovies, toastr, userService) {
        gobbmovies.directive('ngUserForm', ['userService',
            function(userService) {
                return {
                    restrict: 'AEC',
                    replace: true,
                    scope: {
                        profile: '='
                    },
                    link: function($scope, $element, $attrs) {

                        $scope.$watch('profile', function() {
                            $scope.user = angular.copy($scope.profile);
                        });

                        //
                        // update user profile.
                        //
                        $scope.updateUser = function(userForm) {
                            toastr.options = {
                                "positionClass": "toast-bottom-full-width"
                            };
                            if (userForm.$valid) {
                                userService.update($scope.user, function(data) {
                                    $scope.profile.firstname = data.firstname;
                                    $scope.profile.lastname = data.lastname;
                                    $scope.profile.email = data.email;
                                    $scope.profile.city = data.city;
                                    $scope.profile.birthday = data.birthday;
                                    toastr.success('', 'Profile updated !');
                                });
                            } else {
                                toastr.error('', 'Invalid profile');
                            }
                        }
                    },

                    templateUrl: '/templates/user/userForm.html'
                };
            }
        ]);
    });