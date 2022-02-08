sap.ui.define(
   [
      'sap/ui/core/UIComponent',
      'de/icontec/antonstadie/walkthrough/model/models',
      'sap/ui/model/json/JSONModel',
   ],
   /**
    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    */
   function (UIComponent, models, JSONModel) {
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

            metadata: {
               interfaces: ['sap.ui.core.IAsyncContentCreation'],
               manifest: 'json',
            },
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

               // enable routing
               this.getRouter().initialize()

               // set the device model
               this.setModel(models.createDeviceModel(), 'device')
            },
         }
      )
   }
)
