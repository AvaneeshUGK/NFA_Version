sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Version/VersionInfo/test/integration/FirstJourney',
		'Version/VersionInfo/test/integration/pages/VersionInfoList',
		'Version/VersionInfo/test/integration/pages/VersionInfoObjectPage'
    ],
    function(JourneyRunner, opaJourney, VersionInfoList, VersionInfoObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Version/VersionInfo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVersionInfoList: VersionInfoList,
					onTheVersionInfoObjectPage: VersionInfoObjectPage
                }
            },
            opaJourney.run
        );
    }
);