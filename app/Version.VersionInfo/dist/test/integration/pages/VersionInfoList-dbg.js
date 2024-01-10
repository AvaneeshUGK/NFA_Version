sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'Version.VersionInfo',
            componentId: 'VersionInfoList',
            entitySet: 'VersionInfo'
        },
        CustomPageDefinitions
    );
});