sap.ui.define(
   [
      'sap/ui/core/mvc/Controller',
      'sap/ui/model/json/JSONModel',
      'sap/ui/model/Filter',
      'sap/ui/model/FilterOperator',
      '../model/formatter',
   ],
   function (Controller, JSONModel, Filter, FilterOperator, formatter) {
      'use strict'

      return Controller.extend(
         'de.icontec.antonstadie.walkthrough.controller.InvoiceList',
         {
            formatter: formatter,
            onInit: function () {
               var currencyModel = new JSONModel({
                  currency: 'EUR',
               })
               this.getView().setModel(currencyModel, 'view')
            },
            onFilterInvoices: function (oEvent) {
               var aFilter = []
               var sQuery = oEvent.getParameter('query')
               if (sQuery) {
                  aFilter.push(
                     new Filter('ProductName', FilterOperator.Contains, sQuery)
                  )
               }
               var oList = this.byId('invoiceList')
               var oBinding = oList.getBinding('items')
               oBinding.filter(aFilter)
            },
            onChangerOrderButtonPress: function () {
               this.byId('invoiceList')
            },
         }
      )
   }
)
