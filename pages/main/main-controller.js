(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', function MainCtrl($scope, $log, MainService, cupbopData) { 
		
		MainService.getInstagramFeed();
		
		$scope.getInstagramUser = function(userId) {
			MainService.getInstagramUser(userId)
				.then(function(userData) {
					$scope.userData = userData;
					$scope.username = $scope.userData.username;
					console.log('this is the $scope.userData', $scope.userData);
				})
		}

		//$scope.getInstagramUser('1160261459'); //'1160261459' is Cupbop

		$scope.cupbopData = cupbopData;
	


	});   
}());    