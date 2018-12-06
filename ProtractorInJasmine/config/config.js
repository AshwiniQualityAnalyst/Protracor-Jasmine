var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../testScripts/ElementBasics.js'],

    capabillities: {
        'browserName': 'Chrome'
    },

    allScriptsTimeout: 20000,

    onPrepare: function () {
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },

    suites: {
        Smoke: ['file1.js', 'file2.js'],
        Regression: 'file3.js'
    },

    jasmineNodeOpts: {
        showColors: true,
        onComplete: null,
        isVerbose: false,
        includeStackTrace: true
    }

}