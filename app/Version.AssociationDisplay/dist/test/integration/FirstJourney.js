sap.ui.define(["sap/ui/test/opaQunit"],function(i){"use strict";var e={run:function(){QUnit.module("First journey");i("Start application",function(i,e,t){i.iStartMyApp();t.onTheidTabList.iSeeThisPage()});i("Navigate to ObjectPage",function(i,e,t){e.onTheidTabList.onFilterBar().iExecuteSearch();t.onTheidTabList.onTable().iCheckRows();e.onTheidTabList.onTable().iPressRow(0);t.onTheidTabObjectPage.iSeeThisPage()});i("Teardown",function(i,e,t){i.iTearDownMyApp()})}};return e});
//# sourceMappingURL=FirstJourney.js.map