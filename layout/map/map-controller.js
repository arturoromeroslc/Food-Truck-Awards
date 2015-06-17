(function () {
	// 'use strict';
	angular
		.module('foodTruckApp')
		.controller('MapCtrl',

	function MapCtrl($scope, $log, $routeParams, uiGmapGoogleMapApi) {	
		// uiGmapGoogleMapApi.then(function(maps) {
	$scope.setLat = function(lat) {
        $scope.vendorLocation.latitude = lat;
        console.log($scope.vendorLocation.latitude)
        var map_canvas = document.getElementById('map');
        var map = new google.maps.Map(map_canvas, map_options);
        return $scope.vendorLocation.latitude;
    }

    $scope.vendorLocation = {
    	latitude: '',
    	longitude: '-111.89027442131191'
    };

    $scope.map = {
        center: {
          latitude: $scope.vendorLocation.latitude,
        	longitude: $scope.vendorLocation.longitude
        },
        zoom: 16,
        panControl: false,
    		zoomControl: false,
    		scaleControl: true
    }

    $scope.marker = {
            coords: {
                latitude: $scope.vendorLocation.latitude,
                longitude: $scope.vendorLocation.longitude
            }, 

            options: { draggable: true },
            
            show: false,
            
            id: 0,
            
            events: {
		        	click: function (marker, eventName, args) {
		        		// marker.draggable = false;
		        		// marker.setDraggable = false;
			          $log.log(marker.getPosition().lat());
    					}
    				}	
    };

    // $scope.$watch('latitude + longitude', function (newValue, oldValue) {
    //     if (newValue !== oldValue) { 
    //       var center = map.getCenter(),
    //         latitude = center.lat(),
    //         longitude = center.lng();
    //       if ($scope.latitude !== latitude || $scope.longitude !== longitude)
    //         map.setCenter(new google.maps.LatLng($scope.latitude, $scope.longitude));
    //     }
    //   });
    // }

    $scope.windowOptions = {
            visible: false
    };
    $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };    
  	$scope.closeClick = function() {
            $scope.windowOptions.visible = false;
    };
    $scope.title = 'Cubpob';    
        
    });
	// });
}())