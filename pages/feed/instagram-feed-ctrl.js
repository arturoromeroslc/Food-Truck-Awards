(function () {
	'use strict';
	angular
    .module('foodTruckApp')
		.controller('InstagramFeedCtrl', function InstagramFeedCtrl($scope, $log, $location, $routeParams, MainService) {

			$scope.getInstagramFeed = function(userId) {
				MainService.getInstagramFeed(userId)
					.then(function dataReturned(res) {
						$scope.feedData = res;
						$log.log('this is the $scope.feedData', $scope.feedData);
					})
			}
			//$scope.getInstagramFeed('1160261459'); //cupbob
			//$scope.getInstagramFeed('200882079'); //waffluv

			if ($routeParams.user === 'cupbop') { 
			$scope.getInstagramFeed('1160261459');
			};

	

	});   
}()); 