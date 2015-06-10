(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $log, MainService, cupbopData, waffluvData, $firebaseObject, fb) { 
		$scope.cupbopData = cupbopData;
		$scope.waffluvData = waffluvData;
		$scope.instagramUsers = MainService.getInstagramUsersArray();	

		$scope.addVotes = function(userId) {
			var ref = new Firebase(fb.url + '/users/' + userId);		
			var obj = $firebaseObject(ref);
    	obj.$bindTo($scope, "data")
    		.then(function() {
    			console.log($scope.data);
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