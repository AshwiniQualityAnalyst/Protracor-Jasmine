var driver = require('../pageObjects/pageLocators.js');

describe('Actions and Windows Handle', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Alert Check', function () {
        return browser.waitForAngularEnabled(false).then(function () {
            return browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html').then(function () {
                return element(by.css("a[href*='loadAjax']")).click().then(function () {
                    //Define Expected conditon below meaning Explicit Wait concept just like we deal in Selenium
                    var ExplicitWait = protractor.ExpectedConditions;
                    return browser.wait(ExplicitWait.invisibilityOf(element(by.id("loader"))), 8000).then(function () {
                        //Cool Stuff
                        return element(by.id("results")).getText().then(function (GetText) {
                            console.log("Get text: " + GetText);
                        });
                    });
                });
            });
        });
    });

    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});