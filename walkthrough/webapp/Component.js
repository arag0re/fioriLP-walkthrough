sap.ui.define(
   [
      'sap/ui/core/UIComponent',
      'sap/ui/Device',
      'de/icontec/antonstadie/walkthrough/model/models',
      'sap/ui/model/json/JSONModel',
      'sap/ui/model/resource/ResourceModel',
   ],
   /**
    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    */
   function (UIComponent, Device, models, JSONModel, ResourceModel) {
      'use strict'

      return UIComponent.extend(
         'de.icontec.antonstadie.walkthrough.Component',
         {
            metadata: {
               interfaces: ['sap.ui.core.IAsyncContentCreation'],
               rootView: {
                  viewName: 'sap.ui.demo.walkthrough.view.App',
                  type: 'XML',
                  /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
                  id: 'app',
                  manifest: 'json',
               },
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
               // call the base component's init function
               UIComponent.prototype.init.apply(this, arguments)

               var myData = {
                  recipient: {
                     name: 'World',
                  },
               }
               var myModel = new JSONModel(myData)
               this.setModel(myModel)
               var i18nModel = new ResourceModel({
                  bundleName: 'de.icontec.antonstadie.walkthrough.i18n.i18n',
               })
               this.setModel(i18nModel, 'i18n')

               // enable routing
               this.getRouter().initialize()

               // set the device model
               this.setModel(models.createDeviceModel(), 'device')
            },
         }
      )
   }
)
