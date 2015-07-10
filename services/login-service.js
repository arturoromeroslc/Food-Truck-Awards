(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.service('LoginService',

		function LoginService($location, $firebaseAuth, fb) {
			
			this.LoginWithGoogle = function() {
				var ref = new Firebase(fb.url);
				var authObj = $firebaseAuth(ref);	

				authObj.$authWithOAuthPopup('google')
					.then(function(authData) {
						console.log('logged in as', authData.google.displayName)
						$location.path('/admin')
					})
					.catch(function(error) {
						console.error('authentication error', error)
					})
			};

			this.logout = function() {
				var ref = new Firebase(fb.url);
				var authObj = $firebaseAuth(ref);	
				authObj.$unauth();
				$location.path('/')
			}

		})
})()