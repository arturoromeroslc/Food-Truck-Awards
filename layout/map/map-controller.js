(function () {
	// 'use strict';
	angular
		.module('foodTruckApp')
		.controller('MapCtrl',

	function MapCtrl($scope, $log, uiGmapGoogleMapApi) {
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
    }
    
    $scope.marker = {
            coords: {
                latitude: $scope.vendorLocation.latitude,
                longitude: $scope.vendorLocation.longitude
            },
            show: false,
            id: 0
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
    $scope.title = "Window Title!";    
        


		
		uiGmapGoogleMapApi.then(function(maps) {

    });

	})
}())