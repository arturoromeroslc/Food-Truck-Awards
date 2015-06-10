(function() {
	angular
		.module('foodTruckApp')
		.service('VoteService', 
			
	function VoteService($log) {
		$log.log('Hello From Vote Service');
	})
}());