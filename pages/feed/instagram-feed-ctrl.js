(function () {
	'use strict';
	angular
    .module('foodTruckApp')
		.controller('InstagramFeedCtrl', function InstagramFeedCtrl($scope, $log, $location, $routeParams, MainService) {

			$log.log('hello from InstagramFeedCtrl');
			$scope.getInstagramFeed = function() {
				MainService.getInstagramFeed()
					.then(function dataReturned(res) {
						$scope.feedData = res;
						$log.log('this is the $scope.feedData', $scope.feedData);
					})
			}
			$scope.getInstagramFeed();
	

	});   
}()); 