angular.module('mint.app.Routes', [])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider,
			$urlRouterProvider) {

			$stateProvider
				.state('app', {
					url: '/',
					abstract: true,
					views: {
						'header-view': {
							templateUrl: '/partial/header'
						},
						'main-view': {
							templateUrl: '/partial/main'
						},
						'footer-view': {
							templateUrl: '/partial/footer'
						}
					}
				})
				.state('app.home', {
					url: '',
					views: {
						'content-view@app': {
							controller: 'SectionController',
							templateUrl: '/partial/home'
						}
					}
				});


			// TODO: Active this once all routes are set up
			// $urlRouterProvider.when('', '/');
			// $urlRouterProvider.otherwise('/');
		}
	]);