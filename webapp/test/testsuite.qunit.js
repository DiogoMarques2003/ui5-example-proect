sap.ui.define(() => {
  'use strict';
  return {
    name: 'QUnit test suite for UI5',
    defaults: {
      page: 'ui5://test-resources/ui5/ui5proj/Test.qunit.html?testsuite={suite}&test={name}',
      qunit: {
        version: 2,
      },
      ui5: {
        theme: 'sap_horizon',
      },
      loader: {
        paths: {
          'ui5/ui5proj': '../',
        },
      },
    },
    tests: {
      'unit/unitTests': {
        title: 'UI5 - Unit Tests',
      },
      'integration/opaTests': {
        title: 'UI5 - Integration Tests',
      },
    },
  };
});
