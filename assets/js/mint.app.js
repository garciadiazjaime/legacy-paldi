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
angular.module('mint.app.NavigationController', [])
	.controller('NavigationController', ['$scope', function($scope) {

		$scope.$on('loadPage', function(_, data) {
			console.log(data);
		});

		var init = function() {
			console.log('NavigationController');
		};

		init();
	}]);
angular.module('mint.app.SectionController', [])
	.controller('SectionController', ['$scope', function($scope) {

		var init = function() {
			console.log('SectionController');

		};

		init();
	}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInJvdXRlcy5qcyIsImNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3NlY3Rpb24vc2VjdGlvbi1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1pbnQuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1pbnRBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWludEFwcCcsIFtcblx0XHQndWkucm91dGVyJyxcblx0XHQndWkuYm9vdHN0cmFwJyxcblx0XHQnbmdBbmltYXRlJyxcblx0XHQnbWludC5hcHAuUm91dGVzJyxcblx0XHQnbWludC5hcHAuTmF2aWdhdGlvbkNvbnRyb2xsZXInLFxuXHRcdCdtaW50LmFwcC5TZWN0aW9uQ29udHJvbGxlcidcblx0XSlcblx0LmNvbmZpZyhbJyRsb2NhdGlvblByb3ZpZGVyJywgJyRpbnRlcnBvbGF0ZVByb3ZpZGVyJyxcblx0XHRmdW5jdGlvbigkbG9jYXRpb25Qcm92aWRlciwgJGludGVycG9sYXRlUHJvdmlkZXIpIHtcblx0XHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdHJlcXVpcmVCYXNlOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0XHQkaW50ZXJwb2xhdGVQcm92aWRlci5zdGFydFN5bWJvbCgnW1snKS5lbmRTeW1ib2woJ11dJyk7XG5cdFx0fVxuXHRdKVxuXHQucnVuKFsnJHN0YXRlJyxcblx0XHRmdW5jdGlvbigkc3RhdGUpIHtcblx0XHRcdCRzdGF0ZS5nbygnYXBwLmhvbWUnKTtcblx0XHR9XG5cdF0pOyIsImFuZ3VsYXIubW9kdWxlKCdtaW50LmFwcC5Sb3V0ZXMnLCBbXSlcblx0LmNvbmZpZyhbXG5cdFx0JyRzdGF0ZVByb3ZpZGVyJyxcblx0XHQnJHVybFJvdXRlclByb3ZpZGVyJyxcblx0XHRmdW5jdGlvbigkc3RhdGVQcm92aWRlcixcblx0XHRcdCR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG5cdFx0XHQkc3RhdGVQcm92aWRlclxuXHRcdFx0XHQuc3RhdGUoJ2FwcCcsIHtcblx0XHRcdFx0XHR1cmw6ICcvJyxcblx0XHRcdFx0XHRhYnN0cmFjdDogdHJ1ZSxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2hlYWRlci12aWV3Jzoge1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL2hlYWRlcidcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnbWFpbi12aWV3Jzoge1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL21haW4nXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2Zvb3Rlci12aWV3Jzoge1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wYXJ0aWFsL2Zvb3Rlcidcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zdGF0ZSgnYXBwLmhvbWUnLCB7XG5cdFx0XHRcdFx0dXJsOiAnJyxcblx0XHRcdFx0XHR2aWV3czoge1xuXHRcdFx0XHRcdFx0J2NvbnRlbnQtdmlld0BhcHAnOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdTZWN0aW9uQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BhcnRpYWwvaG9tZSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cblx0XHRcdC8vIFRPRE86IEFjdGl2ZSB0aGlzIG9uY2UgYWxsIHJvdXRlcyBhcmUgc2V0IHVwXG5cdFx0XHQvLyAkdXJsUm91dGVyUHJvdmlkZXIud2hlbignJywgJy8nKTtcblx0XHRcdC8vICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblx0XHR9XG5cdF0pOyIsImFuZ3VsYXIubW9kdWxlKCdtaW50LmFwcC5OYXZpZ2F0aW9uQ29udHJvbGxlcicsIFtdKVxuXHQuY29udHJvbGxlcignTmF2aWdhdGlvbkNvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG5cdFx0JHNjb3BlLiRvbignbG9hZFBhZ2UnLCBmdW5jdGlvbihfLCBkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHR9KTtcblxuXHRcdHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTmF2aWdhdGlvbkNvbnRyb2xsZXInKTtcblx0XHR9O1xuXG5cdFx0aW5pdCgpO1xuXHR9XSk7IiwiYW5ndWxhci5tb2R1bGUoJ21pbnQuYXBwLlNlY3Rpb25Db250cm9sbGVyJywgW10pXG5cdC5jb250cm9sbGVyKCdTZWN0aW9uQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1NlY3Rpb25Db250cm9sbGVyJyk7XG5cblx0XHR9O1xuXG5cdFx0aW5pdCgpO1xuXHR9XSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9