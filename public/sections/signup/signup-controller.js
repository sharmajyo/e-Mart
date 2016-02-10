'use strict';
(function() {
    angular.module('myControllers').
    controller('SignupController', ['$rootScope', '$scope','Login','$state',
        function($rootScope, $scope,Login,$state) {
            $scope.user = {
                email: '',
                password: '',
                confirmPassword: ''
            };
            $scope.apiError = '';
            $scope.showLogin = function(){
                $state.go('login');
            }

            $scope.createUser = function() {
                if ($scope.user.name == '' || $scope.user.password == '') {
                    $scope.apiError = "Please enter email and password";
                } else if ($scope.user.password != $scope.user.confirmPassword) {
					$scope.apiError = "Password and confirm password are not same";
                } else {
                    $scope.apiError = '';
                    Login.signup({
                            email: $scope.user.email,
                            password: $scope.user.password
                        },
                        function(success) {
                            $rootScope.hasUserLoggedIn = true;
                            $rootScope.loggedInUser = success.user;
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
