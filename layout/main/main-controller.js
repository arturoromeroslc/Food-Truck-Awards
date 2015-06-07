(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $log, MainService, cupbopData, waffluvData, $firebaseObject) { 
		$scope.cupbopData = cupbopData;
		$scope.waffluvData = waffluvData;
		$scope.instagramUsers = MainService.getInstagramUsersArray();

		var ref = new Firebase("https://foodtruckawards.firebaseio.com");		
		// download the data into a local object
		var obj = $firebaseObject(ref);
	  // synchronize the object with a three-way data binding
    obj.$bindTo($scope, "data");
		
		$scope.addVotes = function() {
		
			if (!$scope.data.foo) {
				console.log('First');
				return $scope.data.foo = 1;
			}
		  else {
		  	var value = parseInt($scope.data.foo)
		  	var newValue = value + 1; 
		  	return $scope.data.foo = newValue;	
			}
		};	

	});   
}());    