var driver = require('../pageObjects/pageLocators.js');

describe('Non Angular Application', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Non Angular Web Application', function () {
        browser.waitForAngularEnabled(false);
        driver.getNonangularApp().then(function () {
            var pageTitle = browser.getTitle();
            expect(pageTitle).toBe("Google");
        });
    });


    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});