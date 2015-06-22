(function() {
	angular
		.module('foodTruckApp', [
			'ngRoute',
			'firebase',
			'uiGmapgoogle-maps',
			'ngTouch',
			'ngAnimate'
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
				.when('/feed/:instagramUser', {
					templateUrl: '/layout/feed/feed.html'
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
})();