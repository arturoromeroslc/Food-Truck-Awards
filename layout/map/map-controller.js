(function () {
	'use strict';
	angular
		.module('foodTruckApp')
		.controller('MapCtrl',

	function MapCtrl($scope, $log, $timeout) {
        $scope.vendorLocation = {};

        $scope.map = {
            center: {
                latitude: 40.1451, 
                longitude: -99.6680 
            }, 
            zoom: 8 
        };
        
        $scope.marker = {
          id: 0,
          coords: {
            latitude: 40.1451,
            longitude: -99.6680
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
        })
    }
     
      });
}())