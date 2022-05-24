import { reporting } from 'qcoe-fedex-ui-test-wdio';
import options from './utils/cucumber.report.options';

exports.config = {
  runner: 'local',
  specs: [
    './features/petDetails.feature',
    './features/AddOwnerValidation.feature',
    './features/AddNewPet.feature',
    './features/AddVisit.feature',
    './features/AddOwner.feature'
  ],
  maxInstances: 1,
  
  capabilities: [{
    browserName: 'chrome'
  }],
  
  logLevel: 'info',
  logLevels: {
    webdriver: 'warn',
    '@wdio/cucumber-framework': 'info',
    '@wdio/local-runner': 'info'
  },
  
  framework: 'cucumber',
  ignoreUndefinedDefinitions:true,
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