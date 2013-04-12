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

        var detailPath = '/detail/5167f93f706ee71514000001';

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
        describe('Detail View should have an edit link', function () {

            beforeEach(function () {
                browser().navigateTo('/index.html#' + detailPath);
            });

            it('should have a minimum of one link', function () {
                expect(element('#technologies td a', 'edit link').count()).toBe(1);
            });

//            it('should redirect to detail view with edit form', function () {
//                element('#technologies a:first', 'detail link').click();
//                expect(element('form').count()).toBe(1);
//            });
        });

    });
});
