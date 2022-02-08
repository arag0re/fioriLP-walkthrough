sap.ui.define(
   ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],

   function (Controller, MessageToast, Fragment) {
      'use strict'

      return Controller.extend(
         'de.icontec.antonstadie.walkthrough.controller.HelloPanel',
         {
            onOpenDialog: function () {
               //dialog code
               if (!this.pDialog) {
                  this.pDialog = this.loadFragment({
                     name: 'de.icontec.antonstadie.walkthrough.view.HelloDialog',
                  })
               }
               this.pDialog.then(function (oDialog) {
                  oDialog.open()
               })
            },

            onCloseDialog: function () {
               this.byId('helloDialog').close()
            },

            onShowHello: function () {
               var i18nBundle = this.getView()
                  .getModel('i18n')
                  .getResourceBundle()
               var modelRecipient = this.getView()
                  .getModel()
                  .getProperty('/recipient/name')
               var modelMsg = i18nBundle.getText('helloMsg', [modelRecipient])
               MessageToast.show(modelMsg)
               //alert('Hello World')
            },
         }
      )
   }
)
