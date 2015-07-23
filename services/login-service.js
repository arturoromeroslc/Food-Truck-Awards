(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.service('LoginService',

		function LoginService($location, $firebaseAuth, $firebaseObject, fb) {
			var ref = new Firebase(fb.url);
			var saveObj = $firebaseObject(ref);
			var authObj = $firebaseAuth(ref);	
			
			

			this.isLoggedIn = function() {
				var info = authObj.$getAuth();
				
				if (info) {
					$location.path('admin');
				} else {
					$location.path('login');
				}
			}; 

			this.LoginWithGoogle = function() {

				authObj.$authWithOAuthPopup('google')
					.then(function(authData) {
						console.log('the logged data', authData);
						// console.log('logged in as', authData.google.displayName);
						saveObj = {} 
						console.log(saveObj);
						console.log('authObj:', authObj, 'ref:', ref);
						// saveObj.$save();
						$location.path('admin')
					})
					.catch(function(error) {
						if (error.code === "TRANSPORT_UNAVAILABLE") {
      // fall-back to browser redirects, and pick up the session
      // automatically when we come back to the origin page
      ref.authWithOAuthRedirect("google", function(error) { /* ... */ });
    }
						console.error('authentication error', error)
					})
			};

			this.logout = function() {
				authObj.$unauth();
				$location.path('/')
			};

		})
})()