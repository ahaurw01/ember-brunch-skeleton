// karm configuration

// base path, that will be used to resolve files and exclude
basePath = '.';


// list of files / patterns to load in the browser
files = [
  'test/assets/test/scripts/jquery-2.0.2.min.js',
  'public/scripts/vendor.js',
  'public/scripts/ember.js',
  'public/scripts/app.js',
  'public/test/scripts/test-vendor.js',
  MOCHA,
  MOCHA_ADAPTER,
  'public/test/scripts/test-browser.js',
  'public/test/scripts/test.js',
  'public/test/scripts/load-tests.js'
];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible[ values: dots || progress || junit || growl || coverage
reporter = ['progress'];


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = [];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
