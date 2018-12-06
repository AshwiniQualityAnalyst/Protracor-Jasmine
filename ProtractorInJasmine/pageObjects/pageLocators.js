var allPageLocators = function () {

    this.getApp = function () {
        return browser.get('http://juliemr.github.io/protractor-demo/');
    };
    this.getNonangularApp = function () {
        return browser.get('https://www.google.com/');
    };

    this.getPosseApp = function () {
        return browser.get('https://posse.com/');
    };

    this.getalertApp = function () {
        return browser.get('http://qaclickacademy.com/practice.php');
    };

    this.firstInput = function (EnterText) {
        return element(by.model('first')).sendKeys(EnterText);
    };

    this.secondInput = function (EnterText) {
        return element(by.model('second')).sendKeys(EnterText);
    };

    this.goButton = function () {
        return element(by.id("gobutton")).click();
    };

    this.getTextAfterAdd = function () {
        return element(by.css("h2[class='ng-binding']")).getText();
    };

    this.getTextAfterAddCheckTable = function () {
        return element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
    };

    this.getCountOfTable = function () {
        return element.all(by.repeater("result in memory")).count();
    };

    this.getListOfDataInTable = function () {
        return element.all(by.repeater("result in memory")).each(function (AllRecordsOfTable) {
            AllRecordsOfTable.element(by.css("td:nth-child(3)")).getText().then(function (GetTextOfTableRecords) {
                console.log("Get text of table records: " + GetTextOfTableRecords);
            });
        });
    };

    this.addFunction = function (EnterText, EnterText1) {
        return element(by.model('first')).sendKeys(EnterText).then(function () {
            return element(by.model('second')).sendKeys(EnterText1).then(function () {
                return element(by.id("gobutton")).click();
            });
        });
    };

    this.addFunctionModify = function (EnterText, EnterText1) {
        return element(by.model('first')).sendKeys(EnterText).then(function () {
            return element(by.model('second')).sendKeys(EnterText1);
        });
    };

    this.selectDropDown = function (EnterValue) {
        return element.all(by.tagName('option')).each(function (DropDowns) {
            return DropDowns.getAttribute('value').then(function (DropDownTexts) {
                if (DropDownTexts == EnterValue) {
                    return DropDowns.click();
                }
            });
        });
    };

    this.userInputQuery = function (EnterText) {
        return element(by.model("userInputQuery")).sendKeys(EnterText);
    };

    this.locationQuery = function (EnterText) {
        //Operations 
        //1.First move your mouse to the point
        return browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys(EnterText)).perform();
    };

    this.usingKeyboardGoDown = function () {
        //2.Using keyboard go down
        return browser.actions.sendKeys(protractor.Key.ARROW_DOWN).perform();
    };

    this.usingKeyboardHitEnterButton = function () {
        //2.Using keyboard go down
        return browser.actions.sendKeys(protractor.Key.ENTER).perform();
    };


}

module.exports = new allPageLocators();