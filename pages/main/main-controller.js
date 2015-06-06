(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', function MainCtrl($scope, $log, MainService, cupbopData, waffluvData) { 
		
		MainService.getInstagramFeed();
		
		$scope.getInstagramUser = function(userId) {
			MainService.getInstagramUser(userId)
				.then(function(userData) {
					$scope.userData = userData;
					$scope.username = $scope.userData.username;
					console.log('this is the $scope.userData', $scope.userData);
				})
		}

		$scope.cupbopData = cupbopData;
		$scope.waffluvData = waffluvData;

	


	});   
}());    