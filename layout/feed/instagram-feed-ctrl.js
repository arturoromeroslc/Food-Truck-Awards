(function () {
	'use strict';
	angular
    .module('foodTruckApp')
		.controller('InstagramFeedCtrl', 

	function InstagramFeedCtrl($scope, $routeParams, InstagramService) {

			$scope.getInstagramFeed = function(userId) {
				InstagramService.getInstagramFeed(userId)
					.then(function dataReturned(res) {			    
				      $scope.groupedSlides = res;
					})
			}

			if ($routeParams.instagramUser === 'cupbop') { 
			$scope.getInstagramFeed('1160261459');
			} else if ($routeParams.instagramUser === 'waffluv') {
				$scope.getInstagramFeed('200882079');
			};

	});   
}()); 