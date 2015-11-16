(function() {

  'use strict';

  angular
    .module('foodTruckApp')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth ) {
    var ref = new Firebase('https://foodtruckawards.firebaseio.com');
    return $firebaseAuth(ref);
  }

})();