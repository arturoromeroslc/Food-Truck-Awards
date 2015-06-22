(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .service('MainService', 

	function MainService($log, $http, $firebase, $firebaseArray, $firebaseObject, fb) { 
		var instagramUsersCalled = {};
		var instagramUsersArray = [];

		this.getInstagramUser = function(userId) { 
			if (instagramUsersCalled.userId === true) {
				return
			} else {
			return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '?client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function instagramUserDataCallback(res) {
					var instagramUserData = res.data.data;
					instagramUsersCalled.userId = true;
					instagramUsersArray.push(instagramUserData);
				});
			}	
		}

		this.getInstagramUsersArray = function() {
			return instagramUsersArray;
		}
		
		this.getInstagramFeed = function(userId) {
			return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '/media/recent?count=40&client_id=f1537afabc07455c820f6a2566076008&callback=JSON_CALLBACK')
				.then(function dataReturned(res) {
					var data = res.data.data;
						var i, max, a = [], b;
						for (i = 0, max = data.length; i < max; i++) { 
      				b = { image: data[i].images.thumbnail.url };
				      	a.push(b);
				      }				    
					return a;
				});
		}
	})
})();