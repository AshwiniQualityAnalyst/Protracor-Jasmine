var driver = require('../pageObjects/pageLocators.js');

describe('Drop Down implementation', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Play with Drop Down---ADDITION', function () {
        driver.getApp().then(function () {
            return driver.addFunctionModify("2", "3").then(function () {
                return driver.selectDropDown("ADDITION").then(function () {
                    return driver.goButton();
                });
            });
        });
    });

    it('Play with Drop Down---DIVISION', function () {
        driver.getApp().then(function () {
            return driver.addFunctionModify("2", "3").then(function () {
                return driver.selectDropDown("DIVISION").then(function () {
                    return driver.goButton();
                });
            });
        });
    });

    it('Play with Drop Down---MODULO', function () {
        driver.getApp().then(function () {
            return driver.addFunctionModify("2", "3").then(function () {
                return driver.selectDropDown("MODULO").then(function () {
                    return driver.goButton();
                });
            });
        });
    });

    it('Play with Drop Down---MULTIPLICATION', function () {
        driver.getApp().then(function () {
            return driver.addFunctionModify("2", "3").then(function () {
                return driver.selectDropDown("MULTIPLICATION").then(function () {
                    return driver.goButton();
                });
            });
        });
    });

    it('Play with Drop Down---SUBTRACTION', function () {
        driver.getApp().then(function () {
            return driver.addFunctionModify("2", "3").then(function () {
                return driver.selectDropDown("SUBTRACTION").then(function () {
                    return driver.goButton();
                });
            });
        });
    });


    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});