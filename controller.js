var myApp=angular.module('myApp',[]);
myApp.controller('LunchController', LunchController)

LunchController.$inject = ['$scope'];
function LunchController ($scope){
	console.log("Hello World from LunchController");
	$scope.lunchMenu = "list comma separated dishes you usually have for lunch"

	}
