'use strict';
(function(){
	angular.module('myControllers')
	.controller('OverviewController',['$rootScope','$scope','Product',
		function($rootscope,$scope,Product){
				
				$scope.$on('categorySelected', function (event,params){
					$scope.products=params.products;

				} );

				Product.get({},function(success){
					$scope.products=success.products;
					var category={"All products":$scope.products};					
					$scope.products.forEach(function(product){
						if(category.hasOwnProperty(product.category)){
							category[product.category].push(product);
						}
						else{
							category[product.category]=[product];	
						}
					})
					$rootscope.categories=category;
				},function(error){
					alert("product not recieved");
				}
			)
		}
	])
}
)();