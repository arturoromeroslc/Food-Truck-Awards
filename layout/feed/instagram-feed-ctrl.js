(function () {
	'use strict';
	angular
    .module('foodTruckApp')
		.controller('InstagramFeedCtrl', 

	function InstagramFeedCtrl($scope, $log, $location, $routeParams, MainService) {

			$scope.getInstagramFeed = function(userId) {
				MainService.getInstagramFeed(userId)
					.then(function dataReturned(res) {
						$scope.feedData = res;
					})
			}

			if ($routeParams.user === 'cupbop') { 
			$scope.getInstagramFeed('1160261459');
			} else if ($routeParams.user === 'waffluv') {
				$scope.getInstagramFeed('200882079');
				};

	

	});   
}()); 