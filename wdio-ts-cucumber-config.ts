import { reporting } from 'qcoe-fedex-ui-test-wdio';
import options from './utils/cucumber.report.options';

exports.config = {
  runner: 'local',
  specs: [
    './features/petDetails.feature',
  ],
  maxInstances: 1,
  
  capabilities: [{
    browserName: 'chrome',
	'goog:chromeOptions': {
       //below code for jenkins pipeline 
      //args: ['--headless','--proxy-server=http://10.205.187.100:9090', '--disable-dev-shm-usage', '--no-sandbox', '--start-maximized', '--verbose'],
    }
  }],
  
  logLevel: 'info',
  logLevels: {
    webdriver: 'warn',
    '@wdio/cucumber-framework': 'info',
    '@wdio/local-runner': 'info'
  },
  
  framework: 'cucumber',
  cucumberOpts: {
    require: [
      "./step-definitions/*.ts"
    ],
    backtrace: true,
    failFast: false,
    tagsInTitle: true,
    timeout: 60000
  },
  reporters: [
    ['cucumberjs-json', {
      jsonFolder: './reports',
      language: 'en',
    }]
  ],
  services: ['chromedriver'],
  chromeDriverArgs: ['--port=9999'],
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    }
  },
  onPrepare: async function () {
    reporting.setupReporter(this);
  },

  onComplete: function (exitCode: number, config: unknown, capabilities: unknown, results: unknown) {
    reporting.generateReport(config, options);
  },

}