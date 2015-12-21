(function() {
	'use strict';
	angular
		.module('foodTruckApp')
		.service('LocationService', 

	function LocationService($log, $firebaseObject, FIREBASE) {
	
        var self            = this,
            //TODO make a session service
            userSessionJSON = localStorage.getItem('firebase:session::foodtruckawards'),
            userSession     = JSON.parse(userSessionJSON),
    	    ref             = new Firebase('https://foodtruckawards.firebaseio.com/users/' + userSession.uid),     
            data            = $firebaseObject(ref);

        self.getLocation = function() {
            console.log('loading location...')
            navigator.geolocation.getCurrentPosition(function gettingLocation(position){
              var location = {};
              location.lat = position.coords.latitude;
              location.lon = position.coords.longitude;
              self.saveLocationToFirebase(location);
            });
        };

        self.saveLocationToFirebase = function(location) {
          data.$loaded().then(function(){
              data.location = location || {};
              // data.instagramId = 200882079;   
              data.$save();
          });
        };
	})
})();