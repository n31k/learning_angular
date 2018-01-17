var myApp = angular.module('myApp',[]);

myApp.controller('LunchController', ['$scope', function ($scope){
		console.log("Hello World from LunchController");
		$scope.$watch('lunchMenu', function() {
			console.log('form model has been changed');
			var re = /\s?,+\s?/;
			var new_string = $scope.lunchMenu.split(re);
			console.log(new_string);
			var len = new_string.length;
			if (new_string[0] != '' && len < 3){
			  $scope.message = 'Enjoy!';
			}
			if (new_string[0] != '' && len > 3){
			  $scope.message = 'Too much!';
					} 
			if (new_string[0] == ''){
			  $scope.message = 'Enter some foodstuffs!';
					} 

		}, true);

		}])


