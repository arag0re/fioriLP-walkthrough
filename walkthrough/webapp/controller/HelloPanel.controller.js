sap.ui.define(
   ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],

   /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.m.MessageToast} MessageToast
    */

   function (Controller, MessageToast) {
      'use strict'

      return Controller.extend(
         'de.icontec.antonstadie.walkthrough.controller.HelloPanel',
         {
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
