/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: 'bin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/**/*.fixture.js', '!src/**/*.scenario.js'],
    jslint: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/**/*.fixture.js', '!src/**/*.scenario.js'],
    jsunit: [ 'src/**/*.spec.js' ],

    jsfixture: [ 'src/**/*.fixture.js' ],
    jsscenario: [ 'src/**/*.scenario.js' ],

    
    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   */
  vendor_files: {
    js: [
      'vendor/angular/angular.js',
      'vendor/angular/angular-sanitize.js',
      'vendor/jquery/jquery.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js',
      'vendor/angular-mocks/angular-mocks.js',
      //Requirejs
      'vendor/requirejs/require.js',
      // Bootstrap
      'vendor/bootstrap/js/alert.js',
      'vendor/bootstrap/js/collapse.js',
      'vendor/bootstrap/js/transition.js',
      'vendor/bootstrap/js/modal.js',
      'vendor/bootstrap/js/tooltip.js',
      'vendor/bootstrap/js/popover.js',
      // bootstrap-tree
      'vendor/bootstrap-tree/js/bootstrap-tree.js',
      // bootstrap-datetimepicker
      'vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.lib.min.js',
      'vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js',
      // CanvasJS
      'vendor/canvasjs-1.3.0beta/source/canvasjs.js',
      'vendor/canvasjs-1.3.0beta/canvasjs-chart.js',
      'vendor/canvasjs-1.3.0beta/CanvasJSChartFormatter.js',
      // Google
      'vendor/google/crypto-js/sha1.js',
	  'vendor/google/gcharts/gcharts.js',
      // Zero Clipboard
      'vendor/zeroclipboard/ZeroClipboard.min.js'
    ],
    css: [
      // bootstrap-tree
      'vendor/bootstrap-tree/css/bootstrap-tree.css', 
      // bootstrap-datetimepicker
      'vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css', 
    ]
  },
};
