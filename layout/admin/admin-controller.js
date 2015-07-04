(function () {
	angular
		.module('foodTruckApp')
		.controller('AdminCtrl',

	function AdminController($scope, MainService) {
		
		console.log('hello from admin controller');

    $scope.getLocation = function() {
	    console.log('loading location...')
	    navigator.geolocation.getCurrentPosition(function gettinLocation(position){
	     var location = {}
	     location.lat = position.coords.latitude;
	     location.lon = position.coords.longitude;
	     // $scope.setMarker(location);
	     MapCtrl.getLocationFromFireBase(location);
	     console.log(location)
	    });
		};
	});

}());