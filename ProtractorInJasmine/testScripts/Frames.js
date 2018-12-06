var driver = require('../pageObjects/pageLocators.js');

describe('Actions and Windows Handle', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Alert Check', function () {
        return browser.waitForAngularEnabled(false).then(function () {
            return browser.driver.manage().window().maximize().then(function () {
                driver.getalertApp().then(function () {
                    return browser.switchTo().frame("courses-iframe").then(function () {
                        return element(by.css("a[href*='sign_in']")).getText().then(function (GetText) {
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