(function() {
	angular
		.module('foodTruckApp', [
			'ui.router',
			'ngRoute',
			'firebase',
			'uiGmapgoogle-maps',
			'angular-md5',
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
						cupbopData: function($route, InstagramService) {
								InstagramService.getInstagramUser('1160261459');
						},
						waffluvData: function($route, InstagramService) {
							return InstagramService.getInstagramUser('200882079');
						}
					}
				})
				.when('/login', {
					templateUrl: '/layout/login/login.html',
					controller: 'AuthController as auth'
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
	                console.debug("toggle " + navID + " is done");
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