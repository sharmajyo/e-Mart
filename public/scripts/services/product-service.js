'use strict';
(function () {
    angular.module('myServices')
        .factory('Product', ['$resource','API_URL',
            function ($resource,API_URL) {

                return $resource(API_URL+'products',{id: '@id'}, {
                    get: {
                        method: 'GET',
                        params: {format: 'json'},
                        isArray: false
                    },
                    getById: {
                        method: 'GET',
                        params: {format: 'json'},
                        isArray: false,
                    }
                })

            }])
})()