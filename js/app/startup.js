define( 
	function startup()
	{
		var app = angular.module('startup' , [
			'ui.router'
		]);
		
		app.config([ 		'$stateProvider' , '$urlRouterProvider' , 
					function( $stateProvider ,   $urlRouterProvider ){
			
			$stateProvider
				.state('index' , {
					url : '/',
					templateUrl: 'views/index.html'
				})
				.state('contacts' , {
					url : '/contacts',
					templateUrl: 'views/contacts.html'
				});
			
			$urlRouterProvider.otherwise('/');
		}]);
		
		app.controller('MainController' , function($scope){
			console.log(jQuery);
		});
	}
);
