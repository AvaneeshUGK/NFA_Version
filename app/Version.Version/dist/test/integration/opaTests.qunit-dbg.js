sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Version/Version/test/integration/FirstJourney',
		'Version/Version/test/integration/pages/VersionList',
		'Version/Version/test/integration/pages/VersionObjectPage'
    ],
    function(JourneyRunner, opaJourney, VersionList, VersionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Version/Version') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVersionList: VersionList,
					onTheVersionObjectPage: VersionObjectPage
                }
            },
            opaJourney.run
        );
    }
);