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

		.controller('MainCtrl2', function($scope) {
 $scope.items2 = [1,2,3,4,5,6,7,8,9,10];
}).directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel({
  margin: 10,
  loop: true,
  items: 1,
  stagePadding: 100
});
			};
		}
	};
})
.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);

})();