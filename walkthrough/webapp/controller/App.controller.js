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
            onInit: function () {
               var myData = {
                  recipient: {
                     name: 'World',
                  },
               }
               var myModel = new JSONModel(myData)
               this.getView().setModel(myModel)
               var i18nModel = new ResourceModel({
                  bundleName: 'de.icontec.antonstadie.walkthrough.i18n.i18n',
               })
               this.getView().setModel(i18nModel, 'i18n')
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
