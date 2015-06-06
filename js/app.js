(function() {
	angular
		.module('foodTruckApp', ['ngRoute'])
		.config(function($routeProvider) {
			$routeProvider
				
				.when('/main', {
					templateUrl: '/pages/main/main.html',
					controller: 'MainCtrl',
					resolve: {
										cupbopData: function($route, MainService) {
											return MainService.getInstagramUser('1160261459');
										}
					}
				})

				.when('/feed/:user', {
					templateUrl: '/pages/feed/feed.html'
				})

				.otherwise({
					redirectTo: '/main'
				})
		})
})();