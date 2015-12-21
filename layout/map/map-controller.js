(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.controller('MapCtrl', MapCtrl);

	function MapCtrl($scope, $log, $firebaseObject, FIREBASE) {
    
        var userSessionJSON = localStorage.getItem('firebase:session::foodtruckawards'),
        userSession         = JSON.parse(userSessionJSON),
        ref                 = new Firebase('https://foodtruckawards.firebaseio.com/users/' + userSession.uid);
        $scope.data         = $firebaseObject(ref);
               
        $scope.data.$loaded().then(function(){
            var foodTrucklocation = $scope.data.location
            $log.log(foodTrucklocation)

            $scope.map = {
                center: {
                    latitude: foodTrucklocation.lat, 
                    longitude: foodTrucklocation.lon 
                }, 
                zoom: 18 
            };
        
            $scope.marker = {
                id: 0,
                coords: {
                    latitude: foodTrucklocation.lat,
                    longitude: foodTrucklocation.lon
                },
            
                options: { draggable: false },
        
                events: {
                    click: function (marker, eventName, args) {
                        $log.log('marker clicked');
                        var lat = marker.getPosition().lat();
                        var lon = marker.getPosition().lng();
                        $log.log(lat);
                        $log.log(lon);
                    }
                }
            };
        });

        $scope.setMarker = function(location) {
          $scope.data.$loaded().then(function(){
              $scope.data.location = location || {};
              // data.instagramId = 200882079;   
              $scope.data.$save();
          });
        };

        $scope.saveLocationToFirebase = function(location) {
            $scope.data.$loaded().then(function(){
                console.log(location)
                $scope.data.location = location || {};
                $scope.data.$save();
            });
        };

        $scope.getLocation = function() {
            console.log('loading location...')
            navigator.geolocation.getCurrentPosition(function gettinLocation(position){
              var location  = {}
              location.lat  = position.coords.latitude;
              location.lon  = position.coords.longitude;
              $scope.setMarker(location);
              $scope.saveLocationToFirebase(location);
            });
        };     
    };
})();