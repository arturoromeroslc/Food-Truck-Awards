(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.service('LoginService',

		function LoginService($location, $firebaseAuth, fb) {
			var ref = new Firebase(fb.url);
			var authObj = $firebaseAuth(ref);	
			
			

			this.isLoggedIn = function() {
				var info = authObj.$getAuth();
				
				if (info) {
					$location.path('admin');
				} else {
					$location.path('login');
				}
			} 

			this.LoginWithGoogle = function() {

				authObj.$authWithOAuthPopup('google')
					.then(function(authData) {
						console.log('logged in as', authData.google.displayName)
						$location.path('admin')
					})
					.catch(function(error) {
						console.error('authentication error', error)
					})
			};

			this.logout = function() {
				authObj.$unauth();
				$location.path('/')
			}

		})
})()