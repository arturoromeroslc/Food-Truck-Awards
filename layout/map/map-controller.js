(function () {
	// 'use strict';
	angular
		.module('foodTruckApp')
		.controller('MapCtrl',

	function MapCtrl($scope, $log, $routeParams, uiGmapGoogleMapApi) {
    $scope.vendorLocation = {
    	latitude: '40.761852337766335',
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
    $log.log($scope.map)
    $scope.marker = {
            coords: {
                latitude: $scope.vendorLocation.latitude,
                longitude: $scope.vendorLocation.longitude
            },
            
            show: false,
            
            id: 0,
            
            events: {
		        	click: function (marker, eventName, args) {
			          $log.log('marker clicked');
    					}
    				}	
    };
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
        


		
		uiGmapGoogleMapApi.then(function(maps) {
			$log.log('after promigse', uiGmapGoogleMapApi)
    });

	})
}())