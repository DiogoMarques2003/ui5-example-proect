sap.ui.define(['sap/ui/core/mvc/Controller'], (Controller) => {
  'use strict';

  return Controller.extend('ui5.ui5proj.controller.App', {
    onInit() {
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    },
  });
});
