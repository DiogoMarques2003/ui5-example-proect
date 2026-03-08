sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  (Controller, MessageToast, Fragment) => {
    'use strict';

    return Controller.extend('ui5.ui5proj.controller.HelloPanel', {
      onShowHello() {
        // Read message from i18n model
        const oBundle = this.getView().getModel('i18n').getResourceBundle();
        const sRecipient = this.getView().getModel().getProperty('/recipient/name');
        const sMessage = oBundle.getText('helloMessage', [sRecipient]);

        // Display message
        MessageToast.show(sMessage);
      },
      async onOpenDialog() {
        this.oDialog ??= await this.loadFragment({
          name: 'ui5.ui5proj.view.HelloDialog',
        });

        this.oDialog.open();
      },
      onCloseDialog() {
        this.byId('helloDialog').close();
      },
    });
  }
);
