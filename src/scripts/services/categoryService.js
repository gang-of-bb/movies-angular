define(['app'], function(gobbmovies) {
    gobbmovies.service('categoryService', ['$http',
        function($http) {

            var host = 'http://gangofbb.bhtz.fr/api/categories';

            //
            // get all categories service function.
            //
            this.getAll = function(callback) {
                $http.get(host).success(function(data, status, headers, config) {
                    callback(data);
                });
            };
        }
    ]);
});