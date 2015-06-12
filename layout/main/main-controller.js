(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $log, $firebaseObject, MainService, cupbopData, waffluvData, fb) { 

		$scope.instagramUsers = MainService.getInstagramUsersArray();	
		
		var ref = new Firebase(fb.url);		
		$scope.data = $firebaseObject(ref);

		$scope.addVotes = function(userId) {
			$scope.data.$loaded().then(function(){
				$scope.data.users = $scope.data.users || {};
				$scope.data.users[userId] = $scope.data.users[userId] || {voteCount: 0}
				$scope.data.users[userId].voteCount = $scope.data.users[userId].voteCount + 1;
				$scope.data.$save();
			})

		};	

	});   
}());    