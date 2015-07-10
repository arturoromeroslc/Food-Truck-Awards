(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('loginCtrl', 

  function loginCtrl($scope, $log, LoginService) { 

  	$scope.loginWithGoogle = function() {
  		LoginService.LoginWithGoogle();
  	}
	});   
}());    