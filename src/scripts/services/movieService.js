define(['app'], function(gobbmovies) {

    gobbmovies.service('movieService', ['$http',
        function($http) {

            var host = 'http://gangofbb.bhtz.fr/api/movies';

            //
            // Get all movie.
            //
            this.getAll = function(query, callback) {
                $http.get(host, {
                    params: query
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            //
            // Get movie by Id.
            //
            this.get = function(movieId, callback) {
                $http.get(host + '/' + movieId, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            //
            // Like movie by id.
            //
            this.like = function(movieId, callback) {
                $http.post(host + '/' + movieId + '/like', {}, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            //
            // Dislike movie by id.
            //
            this.dislike = function(movieId, callback) {
                $http.post(host + '/' + movieId + '/dislike', {}, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };
        }
    ]);

});