define(['app'], function(gobbmovies) {
    gobbmovies.service('userService', ['$http',
        function($http) {

            var host = 'http://gangofbb.bhtz.fr/api/users/self';

            //
            // get authenticated user.
            //
            this.getUser = function(callback) {
                $http.get(host, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    if (status == 403) {
                        callback(null);
                    } else {
                        callback(data);
                    }
                });
            };

            //
            // Get user by id.
            //
            this.getUserById = function(userId, callback) {
                var url = "http://gangofbb.bhtz.fr/api/users/" + userId;
                $http.get(url, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            //
            // Get favorite movies by user id.
            //
            this.getFavoriteMovies = function(userId, callback) {
                var url = 'http://gangofbb.bhtz.fr/api/users/' + userId + '/movies';
                $http.get(url, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            //
            // Update user info.
            //
            this.update = function(user, callback) {
                $http.put(host, user, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };
        }
    ]);
});