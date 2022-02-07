sap.ui.define(
   [
      'sap/ui/core/mvc/Controller',
      'sap/m/MessageToast',
      'sap/ui/model/json/JSONModel',
   ],
   /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.m.MessageToast} MessageToast
    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    */
   function (Controller, MessageToast, JSONModel) {
      'use strict'

      return Controller.extend(
         'de.icontec.antonstadie.walkthrough.controller.App',
         {
            onInit: function () {
               var myModel = {
                  recipient: {
                     name: 'World',
                  },
               }
            },
            onShowHello: function () {
               MessageToast.show('Hello World')
               //alert('Hello World')
            },
         }
      )
   }
)
