sap.ui.define(['sap/ui/core/mvc/ControllerExtension',"sap/m/Column","sap/m/ColumnListItem"], function (ControllerExtension,Column,ColumnListItem) {
	'use strict';

	return ControllerExtension.extend('Version.AssociationDisplay.ext.controller.Version', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf Version.AssociationDisplay.ext.controller.Version
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
							oModel = oExtensionAPI.getModel();
							// sFunctionName = "readSrcEvents";
							// oFunction = oModel.bindContext(`/${sFunctionName}(...)`);
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
							let oTableP = oExtensionAPI.byId('fe::table::verLink::LineItem::VersionInfo::Table');
							// let oTableDP = oExtensionAPI.byId('fe::table::questionaire::LineItem::Details::Table');
							let oTable = oTableP.getContent().mAggregations._content;
							// let oTableD = oTableDP.getContent().mAggregations._content;

							oTable.destroyItems();
							// oTableD.destroyItems();
							oTable.destroyColumns();
							let detailsColumns = ["Version"];
							// oTableD.destroyColumns();
							let colArray = [];
							let verData = data.data;
							verData.forEach(ver => {
								let keyval = Object.keys(ver);
								
								detailsColumns.forEach(col => {
									if(!colArray.includes(col)){
										var oColumn = new Column({
											header: new sap.m.Label({
												text: col
											}),
											// width: "100px"
										});
										oTable.addColumn(oColumn);
										colArray.push(col)
									}
								})

								keyval.forEach(key => {
									if(!colArray.includes(key)){
										if(key == data.low_flag){
											var oColumn = new Column({
												header: new sap.m.Label({
													text: key
												}),
												styleClass: "columncolor"
											});
										} else {
											var oColumn = new Column({
												header: new sap.m.Label({
													text: key
												})													
											});
										}	
										oTable.addColumn(oColumn);
										colArray.push(key)
									}
								})
							});

							let oCells = [];
							let oRow
							let tempvals
							debugger
							if(data != undefined || data != 'not found'){
								for(let i = 0; i < verData.length; i++){

									for(let j = 0; j < detailsColumns.length; j++){
										oCell = new sap.m.Text({
											text: verData[i][detailsColumns[j]]													
										});	
										oCells.push(oCell);
										delete verData[i][detailsColumns[j]]
									}

								tempvals = Object.values(verData[i]);
								let len = tempvals.length
								tempvals.forEach((val,index) => {
									// if(index != len){
										oCell = new sap.m.Text({
											text: val
										});
										oCells.push(oCell);
									// }
								})
								oRow = new ColumnListItem({
									cells: oCells
								  });
								oTable.addItem(oRow);
								oCells = [];
								}
							}

							sap.ui.core.BusyIndicator.hide();						
						
						
						},


					})


				}

			}

		}
	});
});