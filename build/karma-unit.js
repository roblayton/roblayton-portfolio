module.exports = function ( karma ) {
  karma.set({
    /** 
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'vendor/angular/angular.js',
      'vendor/angular/angular-sanitize.js',
      'vendor/jquery/jquery.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/requirejs/require.js',
      'vendor/bootstrap/js/alert.js',
      'vendor/bootstrap/js/collapse.js',
      'vendor/bootstrap/js/transition.js',
      'vendor/bootstrap/js/modal.js',
      'vendor/bootstrap/js/tooltip.js',
      'vendor/bootstrap/js/popover.js',
      'vendor/bootstrap-tree/js/bootstrap-tree.js',
      'vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.lib.min.js',
      'vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js',
      'vendor/canvasjs-1.3.0beta/source/canvasjs.js',
      'vendor/canvasjs-1.3.0beta/canvasjs-chart.js',
      'vendor/canvasjs-1.3.0beta/CanvasJSChartFormatter.js',
      'vendor/google/crypto-js/sha1.js',
      'vendor/google/gcharts/gcharts.js',
      'vendor/zeroclipboard/ZeroClipboard.min.js',
      'build/templates-app.js',
      'build/templates-common.js',
      
      'src/**/*.js',
      'src/**/*.coffee',
    ],

    exclude: [
        'src/common/com/codeboxsystems/canvas/**/*.js',
        'src/common/com/codeboxsystems/core/**/*.js',
        'src/common/com/codeboxsystems/dom/**/*.js',
        'src/common/com/codeboxsystems/test/**/*.js',
        'src/**/*.fixture.*',
        'src/**/*.scenario.*'
    ],

    frameworks: [ 'jasmine' ],
	proxies: {
	    '/': 'http://localhost'
	},
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-coffee-preprocessor' ],
    preprocessors: {
      '**/*.coffee': 'coffee'
    },

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /** 
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'Firefox'
    ]
  });
};

