/**
 * gobbmovies angular application.
 */
define([
        'angular'
    ],
    function(angular) {
        var gobbmovies = angular.module('gobbmovies', []);

        gobbmovies.config(['$httpProvider',
            function($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
            }
        ]);

        return gobbmovies;
    });