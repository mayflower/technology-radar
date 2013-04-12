'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.0.1').
  value('input', ['adopt', 'trial', 'assess', 'hold']);

angular.module('myApp.technologyService', ['ngResource']).
    factory('Technologies', function($resource){

        return $resource('http://192.168.10.81\\:3000/technologies/:id', {}, {
        });
    });

