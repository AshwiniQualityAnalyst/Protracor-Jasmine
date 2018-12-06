var driver = require('../pageObjects/pageLocators.js');

describe('Chain Locators', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Chain Locators Concept---Repeater Locator', function () {
        driver.getApp().then(function () {
            driver.firstInput("2").then(function () {
                driver.secondInput("3").then(function () {
                    driver.goButton().then(function () {
                        driver.getTextAfterAddCheckTable().then(function (GetText) {
                            console.log("Get text is: " + GetText);
                            expect(GetText).toBe("5");
                        });
                    });
                });
            });
        });
    });

    it('Get count and print the list', function () {
        return driver.addFunction("2", "9").then(function () {
            return driver.addFunction("3", "5").then(function () {
                return driver.getCountOfTable().then(function (GetCount) {
                    console.log("Count is equal to: " + GetCount);
                });
            });
        });
    });

    it('Get text and print the list', function () {
        return driver.getListOfDataInTable();
    });



    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});