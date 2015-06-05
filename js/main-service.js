(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .service('MainService', 

	function MainService($log, $http) { 
		
		this.getInstagramFeed = function() {
			return $http.jsonp('https://api.instagram.com/v1/users/200882079/media/recent?count=40&client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function dataReturned(res) {
					var data = res.data;
					$log.log('returned from MainService.getInstagramFeed', data);
					return data;
				});
		}

		this.getInstagramUser = function() {
			return $http.jsonp('https://api.instagram.com/v1/users/200882079?client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function instagramUserData(res) {
					var data = res.data.data;
					$log.log('returned from MainService.getInstagramUser', data);
					return data;
				})
		}	
	})
})();