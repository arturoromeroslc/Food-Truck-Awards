(function() {
	angular
		.module('foodTruckApp', ['ngRoute'])
		.config(function($routeProvider) {
			$routeProvider
				.when('/main', {
					templateUrl: '/pages/main/main.html'
				})
				.when('/feed/:user', {
					templateUrl: '/pages/feed/waffle.html'
				})
				.otherwise({
					redirectTo: '/main'
				})
		})
})();