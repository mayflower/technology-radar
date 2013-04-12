'use strict';

/* jasmine specs for controllers go here */

describe('ListController', function(){
    beforeEach(module('myApp.technologyService'));

    var service;

    beforeEach(inject(function(Technologies) {
        service=Technologies;
    }));

    iit("can be instantiated", function() {
        expect(service).not.toBeNull();
    });
});
