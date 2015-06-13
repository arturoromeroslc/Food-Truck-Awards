(function() {
	angular
		.module('foodTruckApp', [
			'ngRoute',
			'firebase'
		])
		.constant('fb', {
			url: 'https://foodtruckawards.firebaseio.com'
		})
		.config(function($routeProvider) {
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
		})
})();