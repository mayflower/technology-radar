'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/index.html');
  });


  it('should start with root', function() {
    expect(browser().location().url()).toBe("/view1");
  });

  describe('technology resource list', function() {

      it('should have a detail link', function() {
          expect(element('#technologies a', 'link one').count()).toBeGreaterThan(0);
      });

      it('should redirect to detail view', function() {

          element('#technologies a:first', 'detail link').click();
          expect(browser().location().url()).toEqual('/detail/5167f9288e2d6d3214000001');

      });
      
      it('should redirect to detail view', function() {

          element('#technologies a:first', 'detail link').click();
          expect(browser().location().url()).toEqual('/detail/5167f9288e2d6d3214000001');

      })
  });

  /*describe('Technologies', function() {
    it('should display 3 technologies', function() {
      expect(repeater('#technologies li').count()).toBe(4);
 
      input('query').enter('nodejs');
      expect(repeater('#technologies li').count()).toBe(1);
 
      input('query').enter('adopt');
      expect(repeater('#technologies li').count()).toBe(2);
    });
  });*/

});
