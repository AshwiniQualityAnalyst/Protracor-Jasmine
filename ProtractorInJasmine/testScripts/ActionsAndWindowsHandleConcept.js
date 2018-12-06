var driver = require('../pageObjects/pageLocators.js');

describe('Actions and Windows Handle', function () {

    var originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    xit('Alerts and Windows Handle', function () {
        driver.getPosseApp().then(function () {
            return driver.userInputQuery("river").then(function () {
                //Operations 
                //1.First move your mouse to the point
                return driver.locationQuery("london").then(function () {
                    //2.Using keyboard go down
                    return driver.usingKeyboardGoDown().then(function () {
                        //3.Using keyboard hit enter button
                        return driver.usingKeyboardHitEnterButton().then(function () {
                            //Here i gave promise becuase i need to check after hitting enter which page i have visit becuase protractor is very fast
                            return browser.sleep(5000).then(function () {
                                // Jasmine Assertions
                                expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7).then(function () {
                                    //Now let's click on one of the link
                                    return element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click().then(function () {
                                        return element.all(by.css("a[ng-href*='London/River Island']")).get(0).then(function () {
                                            //Now clicking on the link it will open another window and that is why we are handling promise because protractor is very fast and we want to see new window open	
                                            return browser.sleep(500).then(function () {
                                                //COOL STUFF
                                                //Lets print the TITLE of PARENT Window
                                                return browser.getTitle().then(function (BrowserTitle) {
                                                    console.log("Print Browser Title after switching: " + BrowserTitle).then(function () {
                                                        //Now learn GET WINDOW HANDLES Method meaning dealing with Multiple windows or tabs
                                                        return browser.getAllWindowHandles().then(function (WindowTabs) {
                                                            return browser.switchTo.window(WindowTabs[1]).then(function () {
                                                                //Lets print the TITLE of CHILD Window
                                                                return browser.getTitle().then(function (BrowserTitle) {
                                                                    console.log("Print Browser Title after switching: " + BrowserTitle).then(function () {
                                                                        return browser.switchTo.window(WindowTabs[0]).then(function () {
                                                                            return browser.getTitle().then(function (BrowserTitle) {
                                                                                console.log("Print Browser Title 3rd time after switching to parent again : " + BrowserTitle);
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });

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