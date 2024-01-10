sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('Version.Version.ext.controller.Controller', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf Version.Version.ext.controller.Controller
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			viewstate: {
				onBeforeStateApplied: async function(oBindingContext) {
					debugger
				}
			},
			routing: {
                onAfterBinding: async function (oBindingContext) {
					debugger
				    const  oExtensionAPI = this.base.getExtensionAPI(),
							oModel = oExtensionAPI.getModel(),
							sFunctionName = "readSrcEvents",
							oFunction = oModel.bindContext(`/${sFunctionName}(...)`);
							let oCell
							let event_id = oBindingContext.sPath.replace(/[^0-9]/g, "")
							event_id = "Doc" + event_id;
					let detailsColumns = ["Itemname","Description","Quantity","Unit"];
					let questionsColumns = ["question"];
					debugger

					sap.ui.core.BusyIndicator.show(0);
					$.ajax({
						url: `https://nfa_app-grateful-duiker-kc.cfapps.us20.hana.ondemand.com/dev/getVersions?event_id=${event_id}`,
						type: "GET",
						success: function(data){

							debugger 
							let oTableP = oExtensionAPI.byId('fe::table::questionaire::LineItem::Questions::Table');
							let oTableDP = oExtensionAPI.byId('fe::table::questionaire::LineItem::Details::Table');
							let oTable = oTableP.getContent().mAggregations._content;
							let oTableD = oTableDP.getContent().mAggregations._content;

							oTable.destroyItems();
							oTableD.destroyItems();
							oTable.destroyColumns();
							oTableD.destroyColumns();


						














































						
						
						
						},


					})


				}

			}












		}
	});
});
