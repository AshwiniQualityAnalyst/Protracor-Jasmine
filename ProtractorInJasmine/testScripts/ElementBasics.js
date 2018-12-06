var driver = require('../pageObjects/pageLocators.js');

describe('Protractor element demo', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('Add 2 and 3', async function () {
        await driver.getApp();
        await driver.firstInput('2');
        //driver.secondInput('3');
        //driver.goButton();
    });



    afterEach(function () {  //after Each block starts
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});