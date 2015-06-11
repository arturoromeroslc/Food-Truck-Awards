(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $log, $firebaseObject, MainService, cupbopData, waffluvData, fb) { 
		// $scope.cupbopData = cupbopData;
		// $scope.waffluvData = waffluvData;
		$scope.instagramUsers = MainService.getInstagramUsersArray();	
		var ref = new Firebase(fb.url);		
		var obj = $firebaseObject(ref);

		obj.$loaded()
		  .then(function(data) {
		  	obj.$bindTo($scope, "data");

		  })
		  .catch(function(error) {
		    console.error("Error:", error);
		  });


		$scope.addVotes = function(userId) {
			var ref = new Firebase(fb.url + '/users/' + userId);		
			var obj = $firebaseObject(ref);
    	obj.$bindTo($scope, "data")
    		.then(function() {
    			console.log($scope.data.$id);
    			if (!$scope.data.voteCount) {
						console.log('First');
					  $scope.data.voteCount = 1;
					} else {
					  	var value = parseInt($scope.data.voteCount)
					  	var newValue = value + 1; 
					  	return $scope.data.voteCount = newValue;	
						}
    		});
		};	
	});   
}());    