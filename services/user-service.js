(function() {

  'use strict';

  angular
    .module('foodTruckApp')
    .factory('User', UserService);

  function UserService($firebaseObject, FIREBASE) {

    function newUserRef(user) {
      var ref = new Firebase("https://foodtruckawards.firebaseio.com/users/" + user.uid);
      return $firebaseObject(ref);
    }

    function getUserData(user) {
      var ref = new Firebase("https://foodtruckawards.firebaseio.com/users/" + user);
      return $firebaseObject(ref);
    }

    function getLoggedInUser() {
      var user = localStorage.getItem('firebase:session::foodtruckawards');
      if(user) {
        return JSON.parse(user);
      }
    }

    return {
      newUserRef: newUserRef,
      getUserData: getUserData,
      getLoggedInUser: getLoggedInUser
    }
  }

})();