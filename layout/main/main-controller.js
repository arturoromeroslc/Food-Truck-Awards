(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('MainCtrl', 

  function MainCtrl($scope, $log, MainService, cupbopData, waffluvData) { 
				
		$scope.cupbopData = cupbopData;
		$scope.waffluvData = waffluvData;

	});   
}());    