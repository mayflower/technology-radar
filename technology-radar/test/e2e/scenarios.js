'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {

    beforeEach(function () {
        browser().navigateTo('/index.html');
    });


    it('should start with root', function () {
        expect(browser().location().url()).toBe("/view1");
    });

    describe('technology resource list', function () {

        var detailPath = '/detail/5167f9288e2d6d3214000001';

        it('should have a detail link', function () {
            expect(element('#technologies a', 'link one').count()).toBeGreaterThan(0);
        });

        it('should redirect to detail view', function () {

            element('#technologies a:first', 'detail link').click();
            expect(browser().location().url()).toEqual(detailPath);

        });

        it('should redirect to detail view', function () {

            element('#technologies a:first', 'detail link').click();
            expect(browser().location().url()).toEqual(detailPath);

        });

        describe('Detail View should have an edit link', function() {
            expect(element('#technologies a:first', 'edit link').count()).toBe(1);
        });
    });
});
