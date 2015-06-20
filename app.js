(function() {
	angular
		.module('foodTruckApp', [
			'ngRoute',
			'firebase',
			'uiGmapgoogle-maps',
			'ui.bootstrap',
			'ngTouch'
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

		.controller('CarouselDemoCtrl', function ($scope) {
		  $scope.myInterval = 5000;
		  var slides = $scope.slides = [];
		  $scope.addSlide = function() {
		    var newWidth = 600 + slides.length + 1;
		    slides.push({
		      image: 'http://placekitten.com/' + newWidth + '/300',
		      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
		        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		    });
		  };
		  for (var i=0; i<4; i++) {
		    $scope.addSlide();
		  }
		});
})();