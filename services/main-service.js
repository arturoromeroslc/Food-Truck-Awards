(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .service('MainService', 

	function MainService($log, $http) { 
		
		this.getInstagramFeed = function(userId) {
			return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '/media/recent?count=40&client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function dataReturned(res) {
					var data = res.data.data;
					// $log.log('returned from MainService.getInstagramFeed', data);
					return data;
				});
		}

		this.getInstagramUser = function(userId) { 
			return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '?client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function instagramUserData(res) {
					var data = res.data.data;
					// $log.log('returned from MainService.getInstagramUser', data);
					return data;
				})
		}









	



//Don't Need This From Controller!
			// $scope.getInstagramUser = function(userId) {
		// 	MainService.getInstagramUser(userId)
		// 		.then(function(userData) {
		// 			$scope.userData = userData;
		// 			$scope.username = $scope.userData.username;
		// 			// console.log('this is the $scope.userData', $scope.userData);
		// 		})
		// }
		
	})
})();