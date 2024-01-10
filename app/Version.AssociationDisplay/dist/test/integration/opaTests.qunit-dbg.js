sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Version/AssociationDisplay/test/integration/FirstJourney',
		'Version/AssociationDisplay/test/integration/pages/idTabList',
		'Version/AssociationDisplay/test/integration/pages/idTabObjectPage',
		'Version/AssociationDisplay/test/integration/pages/EvtObjectPage'
    ],
    function(JourneyRunner, opaJourney, idTabList, idTabObjectPage, EvtObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Version/AssociationDisplay') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheidTabList: idTabList,
					onTheidTabObjectPage: idTabObjectPage,
					onTheEvtObjectPage: EvtObjectPage
                }
            },
            opaJourney.run
        );
    }
);