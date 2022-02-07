sap.ui.define(
   [
      'sap/ui/core/mvc/Controller',
      'sap/m/MessageToast',
      'sap/ui/model/json/JSONModel',
      'sap/ui/model/resource/ResourceModel',
   ],
   /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.m.MessageToast} MessageToast
    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    */
   function (Controller, MessageToast, JSONModel, ResourceModel) {
      'use strict'

      return Controller.extend(
         'de.icontec.antonstadie.walkthrough.controller.App',
         {
            onInit: function () {},
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
