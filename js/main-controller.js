(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', MainCtrl);

	function MainCtrl($log, MainService) { 
		$log.log('Hello')
	}
})();