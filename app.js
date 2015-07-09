(function() {
	angular
		.module('foodTruckApp', [
			'ngRoute',
			'firebase',
			'uiGmapgoogle-maps',
			'ngTouch',
			'ngAnimate',
			'ngMaterial'
		])
		.constant('fb', {
			url: 'https://foodtruckawards.firebaseio.com'
		})
		.config(function($routeProvider, uiGmapGoogleMapApiProvider) {
			$routeProvider
				.when('/main', {
					templateUrl: '/layout/main/main.html',
					controller: 'MainCtrl',
					resolve: {
										cupbopData: function($route, MainService) {
											 MainService.getInstagramUser('1160261459');
										},
										waffluvData: function($route, MainService) {
											return MainService.getInstagramUser('200882079');
										}
					}
				})
				.when('/login', {
					templateUrl: '/layout/login/login.html',
					controller: 'loginCtrl'
				})
				.when('/feed/:instagramUser', {
					templateUrl: '/layout/feed/feed.html',
					controller: 'InstagramFeedCtrl'
				})
				.when('/admin', {
					templateUrl: '/layout/admin/admin.html',
					controller: 'AdminCtrl'
				})

				.otherwise({
					redirectTo: '/main'
				})

		  uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBhzHAgDTYOe5iGRFs2B0_bN30mWSGJly8',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    	});		
		})
		.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
	    $scope.toggleLeft = buildToggler('left');
	    $scope.toggleRight = buildToggler('right');
	    /**
	     * Build handler to open/close a SideNav; when animation finishes
	     * report completion in console
	     */
	    function buildToggler(navID) {
	      var debounceFn =  $mdUtil.debounce(function(){
	            $mdSidenav(navID)
	              .toggle()
	              .then(function () {
	                $log.debug("toggle " + navID + " is done");
	              });
	          },300);
	      return debounceFn;
	    }
  	})

  	.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	    $scope.close = function () {
	      $mdSidenav('left').close()
	        .then(function () {
	          $log.debug("close LEFT is done");
	        });
	    };
  	});
  
})();