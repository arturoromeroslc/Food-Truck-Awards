(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.service('LoginService',

		function LoginService($location, $firebaseAuth, $firebaseObject, FIREBASE) {
			var ref = new Firebase(FIREBASE.url);
			var saveObj = $firebaseObject(ref);
			var authObj = $firebaseAuth(ref);	
			
			

			this.isLoggedIn = function() {
				var info = authObj.$getAuth();
				info ? $location.path('admin') : $location.path('login'); 
			}; 

			this.LoginWithGoogle = function() {

				authObj.$authWithOAuthPopup('google')
					.then(function(authData) {
						console.log('the logged data', authData);
						saveObj = {} 
						// console.log(saveObj);
						// console.log('authObj:', authObj, 'ref:', ref);
						// saveObj.$save();
						$location.path('admin')
					})
					.catch(function(error) {
			      // fall-back to browser redirects, and pick up the session for mobile browsers
			      // automatically when we come back to the origin page
						if (error.code === "TRANSPORT_UNAVAILABLE") {
				      authObj.$authWithOAuthRedirect("google")
				      .then(function(authData) {
								console.log('mobile error was able to login in', authData);
								saveObj = {} 
								// console.log(saveObj);
								// console.log('authObj:', authObj, 'ref:', ref);
								// saveObj.$save();
								$location.path('admin')
							})
				    } else {
								console.error('authentication error', error);
							}	
					})
			};

			this.logout = function() {
				authObj.$unauth();
				$location.path('/')
			};

		})
})()