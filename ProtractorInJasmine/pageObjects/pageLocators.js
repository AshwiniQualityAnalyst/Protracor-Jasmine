var allPageLocators = function () {

    this.getApp = function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.firstInput = function (EnterText) {
        element(by.model('first')).sendKeys(EnterText);
    };
}

module.exports = new allPageLocators();