/**
 * gobbmovies angular application.
 */
define([
        'angular'
    ],
    function(angular) {

        //
        // Create angular application.
        //
        var gobbmovies = angular.module('gobbmovies', []);

        //
        // Configure httpProvider to use cross domain ajax request.
        //
        gobbmovies.config(['$httpProvider',
            function($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
            }
        ]);

        return gobbmovies;
    });