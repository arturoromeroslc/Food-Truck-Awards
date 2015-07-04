// <form>
//   <input type="text" ng-model="location.lat" />
//   <input type="text" ng-model="location.lon" />
//   <button ng-click="setMarker(location)">Sumbit</button>
// </form>
// <button ng-click="getLocation()">Get Location</button>
// <button ng-click="getLocationFromFireBase()">Push to Firebase</button> 

(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.controller('MapCtrl',

	function MapCtrl($scope, $log, $firebaseObject, fb) {
        var ref = new Firebase(fb.url);     
        $scope.data = $firebaseObject(ref);
        
    $scope.FbLocation = $scope.data.$loaded().then(function(){
        var FbLocation = $scope.data.location
        $log.log(FbLocation)

        $scope.map = {
            center: {
                latitude: FbLocation.lat, 
                longitude: FbLocation.lon 
            }, 
            zoom: 18 
        };
        
        $scope.marker = {
          id: 0,
          coords: {
            latitude: FbLocation.lat,
            longitude: FbLocation.lon
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
         $scope.marker.coords.latitude = location.lat;
         $scope.marker.coords.longitude = location.lon;
         $scope.map.center.latitude = location.lat;
         $scope.map.center.longitude = location.lon;
         $scope.map.zoom = 18;
    }; 
     
    $scope.getLocation = function() {
        console.log('loading location...')
        navigator.geolocation.getCurrentPosition(function gettinLocation(position){
         var location = {}
         location.lat = position.coords.latitude;
         location.lon = position.coords.longitude;
         $scope.setMarker(location);
         $scope.getLocationFromFireBase(location);
        });
    };

    $scope.getLocationFromFireBase = function(location) {
        $scope.data.$loaded().then(function(){
            console.log(location)
            $scope.data.location = location || {};
            $scope.data.$save();
        });
    };
     
      });
}());