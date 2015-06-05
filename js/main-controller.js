(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', function MainCtrl($scope, $log, MainService) { 
		
		MainService.getInstagramFeed();
		
		$scope.getInstagramUser = function() {
			MainService.getInstagramUser()
				.then(function(userData) {
					$scope.userData = userData;
					console.log('this is the $scope.userData', $scope.userData);
				})
		}

		$scope.getInstagramUser();


	});   
}());    