/**
 * @class
 * @name test.jasmine.JasmineLoader
 * @requires use!jasmine-html.js
 * @requires use!console-runner.js
 * @param {} specs
*/
define(['use!jasmine-html', 'use!console-runner'], function() {
    var JasmineLoader = function(specs) {

        // Allow JsTestDriver to capture errors
        window.jsErrors = [];
        window.onerror = function(errorMessage) {
            window.jsErrors.push(errorMessage);
        };

        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();
        jasmineEnv.addReporter(htmlReporter);

        var console_reporter = new jasmine.ConsoleReporter();
        // has to be named console_reporter or phantomjs will complain
        window.console_reporter = console_reporter;
        jasmineEnv.addReporter(console_reporter);

        var trivialReporter = new jasmine.TrivialReporter();
        jasmineEnv.addReporter(trivialReporter);

        /**
         * @name test.jasmine.JasmineLoader#specFilter
         * @function
         * @private
         * @param {} spec
         * @return {} htmlReporter.specFilter(spec)
        */
        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        require(specs, function() {
            if(!("$yetify" in window)) {
                jasmineEnv.execute();
            }
        });
    };

    return JasmineLoader;
});
