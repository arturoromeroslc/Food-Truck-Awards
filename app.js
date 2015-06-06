(function() {
	angular
		.module('foodTruckApp', [
			'ngRoute'
		])
		.config(function($routeProvider) {
			$routeProvider
				
				.when('/main', {
					templateUrl: '/layout/main/main.html',
					controller: 'MainCtrl',
					resolve: {
										cupbopData: function($route, MainService) {
											return MainService.getInstagramUser('1160261459');
										},
										waffluvData: function($route, MainService) {
											return MainService.getInstagramUser('200882079');
										}
					}
				})

				.when('/feed/:user', {
					templateUrl: '/layout/feed/feed.html'
				})

				.otherwise({
					redirectTo: '/main'
				})
		})
})();