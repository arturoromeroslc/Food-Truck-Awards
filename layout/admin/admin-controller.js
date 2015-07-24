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
	  	LocationService.getLocation();
		};

		$scope.logout = function() {
			LoginService.logout();
		}
	});

}());