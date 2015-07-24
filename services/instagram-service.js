(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .service('InstagramService', 

	function InstagramService($log, $http, $firebase, $firebaseArray, $firebaseObject, fb) { 
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
					var feedData = res.data.data;
						var i, image, max = 33, arrayOfImages = [];
						for (i = 0; i < max; i++) { 
      				image = { image: feedData[i].images.thumbnail.url };
				      	arrayOfImages.push(image);
				      }				    
					return arrayOfImages;
				});
		}
	})
})();