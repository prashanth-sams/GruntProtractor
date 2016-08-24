exports.config = {

  // seleniumServerJar: 'node_modules/grunt-protractor-runner/node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  seleniumAddress: 'http://localhost:9515/wd/hub',
  // chromeDriver: 'node_modules/grunt-protractor-runner/node_modules/protractor/selenium/chromedriver_2.21',
  // seleniumArgs: ['-Dwebdriver.ie.driver=./node_modules/gulp-protractor/node_modules/protractor/selenium/IEDriverServer.exe'],
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['tests/specs/sample.js'],

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000
  },

  allScriptsTimeout: 200000
};
