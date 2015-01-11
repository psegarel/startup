requirejs.config({

    "baseUrl": "/",

    "paths": {

		"jquery"	: 'lib/jquery/1.11.1/jquery.min',
		"startup"	: "app/startup",
        "angular"	: 'lib/angular/angular.min',
        "uirouter"	: 'lib/angular/angular-ui-router.min'
    },

    "shim": {
    	"angular"	: ["jquery"],
        "uirouter"	: ["angular"],
        "startup"	: ["uirouter"],
    }
});

require(['startup'],

  function() {
    angular.bootstrap(document, ['startup']);
  }

);

