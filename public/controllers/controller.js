var myApp = angular.module('myApp',[]);

myApp.controller('LunchController', ['$scope', function ($scope){
		console.log("Hello World from LunchController");
	    $scope.lunchMenu = '';
	    $scope.message = 'Enter some items!';
		$scope.checkLunch = function() {
			console.log('form model has been changed');
			var re = /\s?,+\s?/;
			var new_string = $scope.lunchMenu.split(re);
			new_string = new_string.filter(function(word) word != '');
			var len = new_string.length;
			console.log(new_string);
			if (len == 0){
			  $scope.message = 'Enter some items first!';
			}
			if (len > 0 && len <= 3){
			  $scope.message = 'Enjoy!';
			}
			if (len > 3){
			  $scope.message = 'Too much!';
					} 
		
		};
	$scope.myStyle = function(){
		if ($scope.message == 'Enjoy!'){
			return {
				"color" : "green"			
			};
		}
		if ($scope.message == 'Too much!'){
			return {
				"color" : "red"
			};
		}
	};
		}])


