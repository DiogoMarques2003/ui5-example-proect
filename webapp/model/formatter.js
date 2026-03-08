sap.ui.define([], () => {
  'use strinct';

  return {
    statusText(sStatus) {
      oResourceBundle = this.getOwnerComponent().getModel('i18n').getResourceBundle();
      switch (sStatus) {
        case 'A':
          return oResourceBundle.getText('invoiceStatusA');
        case 'B':
          return oResourceBundle.getText('invoiceStatusB');
        case 'C':
          return oResourceBundle.getText('invoiceStatusC');
        default:
          return sStatus;
      }
    },
  };
});
