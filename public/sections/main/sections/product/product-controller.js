'use strict';
(function(){
	angular.module('myControllers')
	.controller('ProductController',['$rootScope','$scope',
		function($rootscope,$scope){
			$scope.categorySelected=function(productsInCat){
				$scope.$broadcast('categorySelected', {"products": productsInCat });
			}
		}
	])
}
)();