var myApp = angular.module('myApp',[]);

myApp.controller('LunchController', ['$scope', function ($scope){
		console.log("Hello World from LunchController");
		$scope.$watch('lunchMenu', function() {
			console.log('form model has been changed');
			var re = /\s?,+\s?/;
			var new_string = $scope.lunchMenu.split(re);
			console.log(new_string);
			$scope.message = new_string;

		}, true);

		}])


