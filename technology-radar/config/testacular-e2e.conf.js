basePath = '../';

files = [
  //ANGULAR_SCENARIO,
  'test/lib/angular/angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js',
  {pattern: 'app/**/*', included: false}
];

autoWatch = true;

browsers = ['PhantomJS'];

singleRun = false;

// karma internals
urlRoot = '/karma/';

//logLevel = LOG_DEBUG;

proxies = {
  '/': 'http://localhost:9876/base/app/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
