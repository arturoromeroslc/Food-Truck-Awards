(function() {
	'use strict';
	angular
		.module('foodTruckApp')
		.controller('VoteCtrl', 

	function VoteController($scope, $log, VoteService) {
		$scope.logClick = function() {
			$log.log('Hello From Vote Controller');
		};
	
	});
}());