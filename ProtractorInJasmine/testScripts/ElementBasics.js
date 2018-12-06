var driver = require('../pageObjects/pageLocators.js');

describe('Protractor element demo', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Add 2 and 3', function () {
        driver.getApp().then(function () {
            driver.firstInput("2").then(function () {
                driver.secondInput("3").then(function () {
                    driver.goButton().then(function () {
                        driver.getTextAfterAdd().then(function (GetText) {
                            console.log("Get text: " + GetText);
                            expect(GetText).toBe("5");
                        });
                    });
                });
            });
        });
    });

    xit('Add 2 and 4', function () {
        driver.firstInput("2").then(function () {
            driver.secondInput("4").then(function () {
                driver.goButton().then(function () {
                    driver.getTextAfterAdd().then(function (GetText) {
                        console.log("Get text: " + GetText);
                        expect(GetText).toBe("6");
                    });
                });
            });
        });
    });

    xit('Add 2 and 5', function () {
        driver.firstInput("2").then(function () {
            driver.secondInput("5").then(function () {
                driver.goButton().then(function () {
                    driver.getTextAfterAdd().then(function (GetText) {
                        console.log("Get text: " + GetText);
                        expect(GetText).toBe("7");
                    });
                });
            });
        });
    });

    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});