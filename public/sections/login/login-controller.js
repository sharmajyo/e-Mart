'use strict';
(function() {
    angular.module('myControllers').
    controller('LoginController', ['$rootScope', '$scope', '$state', 'Login', '$http',
        function($rootScope, $scope, $state, Login, $http) {
            $scope.user = {
                email: 'test@user.com',
                password: 'user'
            };
			$scope.apiError = '';

            $scope.showSignup = function(){
				$state.go('signup');
            }

            $scope.authenticateUser = function() {

                if ($scope.user.name == '' || $scope.user.password == '') {
                    $scope.apiError = "Please entre email and password";
                } else {
                	$scope.apiError = '';
                    Login.login({
                            email: $scope.user.email,
                            password: $scope.user.password
                        },
                        function(success) {
                            $rootScope.hasUserLoggedIn = true;
                            $rootScope.loggedInUser = success.local;
                            $state.go('main.product.overview');
                        },
                        function(error) {
                            $scope.apiError = error.message;
                        }
                    )
                }
            }
        }
    ])
})();
