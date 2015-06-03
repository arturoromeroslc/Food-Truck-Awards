(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .service('MainService', MainService);

	function MainService($log) { 
		$log.log('Hello From Service')
	}
})();