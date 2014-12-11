( function()
{
	var app = angular.module('startup' , 
		[	'ngRoute',
			'ui.bootstrap'
	]);
	
	app.config( function($routeProvider , $locationProvider ){
		
		$routeProvider
			.when('/' , {
				templateUrl: 'views/index.html'
			})
			.otherwise({
				templateUrl: 'views/pagenotfound.html',
				controller: 'UtilsController'
			});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	});

	app.controller('UtilsController' , function($scope, $route, $routeParams, $location){
		
		$scope.route = $route;
		$scope.routeParams = $routeParams;
		$scope.location = $location;
		$scope.home = function(){
			$location.path('/');
		};
	});
}
)();