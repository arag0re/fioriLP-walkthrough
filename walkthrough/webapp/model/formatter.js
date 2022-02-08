sap.ui.define([], function () {
   'use strict'

   return {
      statusText: function (myStatus) {
         var resourceBundle = this.getView()
            .getModel('i18n')
            .getResourceBundle()
         switch (myStatus) {
            case 'A':
               return resourceBundle.getText('invoiceStatusA')
            case 'B':
               return resourceBundle.getText('invoiceStatusB')
            case 'C':
               return resourceBundle.getText('invoiceStatusC')
            default:
               return myStatus
         }
      },
   }
})
