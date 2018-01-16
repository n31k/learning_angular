var myApp = angular.module('myApp',[]);

myApp.controller('LunchController', ['$scope', function ($scope){
		console.log("Hello World from LunchController");
		$scope.lunchMenu = "list comma separated dishes you usually have for lunch"
		$scope.message = "How much was that you filthy pig?";

	}])


