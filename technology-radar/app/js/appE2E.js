angular.module('myAppE2E', ['myApp', 'ngMockE2E'])
    .run(['$httpBackend', function ($httpBackend) {
        var technologies = [
                {
                    "name": "testacular",
                    "evaluation": "2",
                    "year": "2010",
                    "tendency": "down",
                    "_id": "51685e098bd0a4400a000001"
                },
                {
                    "name": "bootstrap",
                    "evaluation": "2",
                    "year": "2010",
                    "tendency": "up",
                    "_id": "51685e098bd0a4400a000002"
                }
            ];

        $httpBackend.when('OPTIONS', /technologies/).respond(200);
        $httpBackend.whenGET(/technologies$/).respond(technologies);

        $httpBackend.whenGET(RegExp('technologies\/' + technologies[0]._id)).respond(technologies[0]);
        $httpBackend.whenGET(RegExp('technologies\/' + technologies[1]._id)).respond(technologies[1]);

        $httpBackend.whenGET(/.*/).passThrough();
    }]);
