sap.ui.define(['sap/ui/test/opaQunit', './pages/App'], (opaTest) => {
  'use strict';

  QUnit.module('Navigation');

  opaTest('Should open the Hello dialog', (Given, When, Then) => {
    // Arrangements
    Given.iStartMyUIComponent({
      componentConfig: {
        name: 'ui5.ui5proj',
      },
    });

    // Actions
    When.onTheAppPage.iPressTheSayHelloWithDialogButton();

    // Assertations
    Then.onTheAppPage.iShouldSeeTheHelloDialog();

    // Cleanup
    Then.iTeardownMyApp();
  });
});
