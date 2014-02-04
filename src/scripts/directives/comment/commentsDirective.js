define([
        'app',
        'services/commentService'
    ],
    function(gobbmovies, commentService) {
        gobbmovies.directive('ngComments', ['commentService',
            function(commentService) {
                return {
                    // support tag and class notation.
                    restrict: 'AEC',
                    replace: true,
                    scope: {
                        comments: '=',
                        movieId: "=",
                        userId: "="
                    },
                    link: function($scope, $element, $attrs) {

                        //
                        // Attributes.
                        //
                        $scope.newComment = {
                            content: ""
                        };

                        //
                        // send comment attach to movie.
                        //
                        $scope.sendComment = function() {
                            $scope.newComment.movieId = $scope.movieId;
                            $scope.newComment.userId = $scope.userId;

                            commentService.add($scope.newComment, function(comment) {
                                $scope.newComment.content = "";
                                $scope.comments.items.unshift(comment);
                            });
                        };

                        //
                        // remove own comment.
                        //
                        $scope.removeComment = function(comment) {
                            commentService.delete(comment, function() {
                                $scope.comments.items.splice($scope.comments.items.indexOf(comment), 1);
                            });
                        };
                    },

                    // Associated template url.
                    templateUrl: '/templates/comment/commentsTemplate.html'
                };
            }
        ]);
    });