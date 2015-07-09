(function () {
	angular
		.module('foodTruckApp')
		.controller('AdminCtrl',

	function AdminController($scope, MapService, LoginService) {
		
		console.log('hello from admin controller');

    $scope.getLocation = function() {
	    console.log('loading location...')
	    navigator.geolocation.getCurrentPosition(function gettinLocation(position){
	     var location = {}
	     location.lat = position.coords.latitude;
	     location.lon = position.coords.longitude;
	     // $scope.setMarker(location);
	     MapService.getLocationFromFireBase(location);
	     console.log(location)
	    });
		};

		MapService.logger();

		$scope.logout = function() {
			console.log('loging out...')
			LoginService.logout();
		}
	});

}());