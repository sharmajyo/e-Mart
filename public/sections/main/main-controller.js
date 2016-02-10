'use strict';
(function(){
	var myController=angular.module('myControllers',[]);

	myController.controller('MainController',['$rootScope','$state','$scope',
	function($rootScope,$state,$scope){
		$scope.logOutUser=function(){
			if(confirm("Are you sure you want to logout !")==true){
				$rootScope.hasUserLoggedIn=false;
				$state.go('login');
			}
		}
	
	}])
}) ();