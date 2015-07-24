(function () {
	angular
		.module('foodTruckApp')
		.controller('AdminCtrl',

	function AdminController($scope, $location, LocationService, LoginService) {
		
		//TODO centralize in service
		if ($location.path() === '/admin') { 
		  LoginService.isLoggedIn();	
		};
		//
	
    $scope.getLocation = function() {
	    navigator.geolocation.getCurrentPosition(function gettingLocation(position){
	     var location = {}
	     location.lat = position.coords.latitude;
	     location.lon = position.coords.longitude;
	     // $scope.setMarker(location);
	     LocationService.getLocationFromFireBase(location);
	     console.log(location)
	    });
		};

		$scope.logout = function() {
			LoginService.logout();
		}
	});

}());