(function () {
	'use strict';
		angular
	    .module('foodTruckApp')
			.directive("owlCarousel", 

		function() {
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
							  stagePadding: 100,
							  responsive: {
						        0:{
						            items:1,
						            nav:false
						        },
						        200:{
						            items:3,
						            nav:false
						        },
						        1000:{
						            items:5,
						            nav:true,
						        }
						    }
							});
					};
				}
			};
		})
		.directive('owlCarouselItem', [
			function() {
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