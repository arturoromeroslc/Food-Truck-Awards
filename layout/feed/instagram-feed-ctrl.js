(function () {
	'use strict';
	angular
    .module('foodTruckApp')
		.controller('InstagramFeedCtrl', 

	function InstagramFeedCtrl($scope, $log, $location, $routeParams, MainService) {

			$scope.getInstagramFeed = function(userId) {
				MainService.getInstagramFeed(userId)
					.then(function dataReturned(res) {			    
				      $scope.groupedSlides = res;
					})
			}

			if ($routeParams.instagramUser === 'cupbop') { 
			$scope.getInstagramFeed('1160261459');
			} else if ($routeParams.instagramUser === 'waffluv') {
				$scope.getInstagramFeed('200882079');
				};

			 $scope.myInterval = 3000;
		   var slides = $scope.slides = [];
		   
		   $scope.addSlide = function() {
		   	var newWidth = 600 + slides.length + 1;
		  };
		  for (var i=0; i<4; i++) {
		    $scope.addSlide();
		  }	


	});   
}()); 