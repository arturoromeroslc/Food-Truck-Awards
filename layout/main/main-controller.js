(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $log, $firebaseObject, MainService, cupbopData, waffluvData, fb) { 

		$scope.instagramUsers = MainService.getInstagramUsersArray();	
		
		var ref = new Firebase(fb.url);		
		$scope.data = $firebaseObject(ref);

	});   
}());    