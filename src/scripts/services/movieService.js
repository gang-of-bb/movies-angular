define(['app'], function(gobbmovies) {

    gobbmovies.service('movieService', ['$http',
        function($http) {

            var host = 'http://gangofbb.bhtz.fr/api/movies';

            /**
             * get all movie.
             * @return {[type]}
             */
            this.getAll = function(query, callback) {
                $http.get(host, {
                    params: query
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            /**
             * get movie by Id.
             * @param  {Integer}   movieId
             * @param  {Function} callback
             */
            this.get = function(movieId, callback) {
                $http.get(host + '/' + movieId, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            /**
             * like movie by id.
             * @param  {[type]}   movieId
             * @param  {Function} callback
             */
            this.like = function(movieId, callback) {
                $http.post(host + '/' + movieId + '/like', {}, {
                    withCredentials: true
                }).success(function(data, status, headers, config) {
                    callback(data);
                });
            };

            /**
             * dislike movie by id.
             * @param  {[type]}   movieId
             * @param  {Function} callback
             */
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