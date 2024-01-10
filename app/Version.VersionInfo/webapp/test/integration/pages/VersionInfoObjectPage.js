sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'Version.VersionInfo',
            componentId: 'VersionInfoObjectPage',
            entitySet: 'VersionInfo'
        },
        CustomPageDefinitions
    );
});