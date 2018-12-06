var driver = require('../pageObjects/pageLocators.js');

describe('Actions and Windows Handle', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Alert Check', function () {
        return browser.waitForAngularEnabled(false).then(function () {
            driver.getalertApp().then(function () {
                return element(by.id("confirmbtn")).click().then(function () {
                    //Accept for positive buttons
                    return browser.switchTo().alert().accept().then(function () {
                        return browser.sleep(5000);
                        // or else accordingly comment any one while running

                        //Dismiss for negative buttons

                        //	browser.switchTo().alert().dismiss().then(function(){
                        //		browser.sleep(5000);
                        //	});

                    });
                });
            });
        });

    });

    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});