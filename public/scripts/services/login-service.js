'use strict';
(function () {
    angular.module('myServices', ['ngResource'])
        .factory('Login', ['$resource','API_URL',
            function ($resource,API_URL) {

                return $resource(API_URL+'auth',{}, {
                    login: {
                        method: 'GET',
                        params: {format: 'json'},
                        isArray: false,
                        url:API_URL+'auth'
                    },
                    signup: {
                        method: 'POST',
                        params: {format: 'json'},
                        isArray: false,
                        url:API_URL+'signup'
                    }
                })

            }])
})()