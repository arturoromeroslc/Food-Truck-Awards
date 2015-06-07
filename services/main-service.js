(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .service('MainService', 

	function MainService($log, $http, $firebase, $firebaseArray, $firebaseObject, fb) { 
		

		var instagramUsersArray = [];

		this.getInstagramFeed = function(userId) {
			return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '/media/recent?count=40&client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function dataReturned(res) {
					var data = res.data.data;
					return data;
				});
		}

		this.getInstagramUser = function(userId) { 
			return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '?client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function instagramUserData(res) {
					var data = res.data.data;
					instagramUsersArray.push(data);
					return data;
				})
		}

		this.getInstagramUsersArray = function() {
			return instagramUsersArray;
		}

	})
})();