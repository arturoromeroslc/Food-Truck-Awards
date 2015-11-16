(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $firebaseObject, InstagramService, FIREBASE) { 

		$scope.instagramUsers = InstagramService.getInstagramUsersArray();	
		
		var ref = new Firebase(FIREBASE.url);		
		$scope.data = $firebaseObject(ref);

		$scope.addVotes = function(userId) {
			$scope.data.$loaded().then(function(){
				$scope.data.users = $scope.data.users || {};
				$scope.data.users[userId] = $scope.data.users[userId] || {voteCount: 0}
				$scope.data.users[userId].voteCount = $scope.data.users[userId].voteCount + 1;
				$scope.data.$save();
			})

		};	
		
		$scope.foodTruckName   = '';		
	});   
}());    