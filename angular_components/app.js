var mintApp = angular.module('mintApp', [
		'ui.router',
		'ui.bootstrap',
		'ngAnimate',
		'mint.app.Routes',
		'mint.app.NavigationController',
		'mint.app.SectionController'
	])
	.config(['$locationProvider', '$interpolateProvider',
		function($locationProvider, $interpolateProvider) {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
			$interpolateProvider.startSymbol('[[').endSymbol(']]');
		}
	])
	.run(['$state',
		function($state) {
			$state.go('app.home');
		}
	]);