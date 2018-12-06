var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [''],
    
    allScriptsTimeout: 20000,

    commonCapabilities: {
        browserName: 'Chrome'
    },

    multiCapabilities: [{
        browserName: 'Chrome'
    }, {
        browserName: 'Firefox'
    }, {
        browserName: 'IE'
    }]
};

exports.config.multiCapabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = caps[i] || exports.config.commonCapabilities[i];
});