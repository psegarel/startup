requirejs.config({

    "baseUrl": "js/lib",

    "paths": {

        "jquery"    : "jquery/1.11.1/jquery.min",
        "startup"   : "../app/startup",
        "angular"   : "angular/angular.min",
        "uirouter"  : "angular/angular-ui-router.min"
    },

    "shim": {
        "angular"   : ["jquery"],
        "uirouter"  : ["angular"],
        "startup"   : {
            deps: ["jquery" , "angular" , "uirouter"],
            exports: "startup"
        }
    }
});

require(['startup'],

  function() {
    angular.bootstrap(document, ['startup']);
  }

);
