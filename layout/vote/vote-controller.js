(function() {
	'use strict';
	angular
		.module('foodTruckApp')
		.controller('VoteCtrl', 

	function VoteController($scope, $log, VoteService) {
		
		$scope.addVotes = function(userId) {
			$scope.data.$loaded().then(function(){
				$scope.data.users = $scope.data.users || {};
				$scope.data.users[userId] = $scope.data.users[userId] || {voteCount: 0}
				$scope.data.users[userId].voteCount = $scope.data.users[userId].voteCount + 1;
				$scope.data.$save();
				console.log($scope.data)
			})

		};	
	
	});
}());