sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'Version.AssociationDisplay',
            componentId: 'idTabList',
            entitySet: 'idTab'
        },
        CustomPageDefinitions
    );
});