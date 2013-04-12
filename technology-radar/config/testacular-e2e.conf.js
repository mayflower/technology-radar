basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js',
  {pattern: 'app/**/*', included: false}
];

autoWatch = true;

browsers = ['PhantomJS'];

singleRun = false;

proxies = {
  '/': 'http://192.168.10.81:8000/technology-radar/app/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
