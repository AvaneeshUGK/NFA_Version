const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    /*** SERVICE ENTITIES ***/
    const {
        idTab,
        Evt,
        Version, 
        VersionInfo       
    } = this.entities;

    
    const event_ids = [];

    const c4re = await cds.connect.to('iflow');
    var firstRead = true;
    var firstReadDup = true;

    /*** SERVICE HANDLERS ***/
    // this.before('READ',Version, async (req) => {
    //     try {
    //         if (firstRead) {
    //             const resp = await c4re.get('/dev/getVersions?event_id=Doc33123002');
    //             // cds.tx(req).run(DELETE(event_id));
    //             // const spaces = resp;
    //             const entries = [];
    //             resp.forEach(space => {
    //                 entries.push({
    //                    Version:space.Version,
    //                    Guruprasad:space.Guruprasad,
    //                    Supplier_Demo2:space.Supplier_Demo2
                        
    //                 });
    //             });
    //             await cds.tx(req).run(INSERT.into(Version).entries(entries));
    //             firstRead = false;
    //         }
    //         return req;
    //     } catch (err) {
    //         req.error(500, err.message);
    //     }
    // });

    // this.before('READ',VersionInfo, async (req) => {
    //     try {
    //         if (firstRead) {
    //             const event_id = 'Doc33123002';
    //             const resp = await c4re.get('/dev/getVersions?event_id=Doc33123002');
    //             // cds.tx(req).run(DELETE(event_id));
    //             // const spaces = resp;
    //             let entries = [];
    //             resp.forEach(space => {
    //                 entries.push({
    //                    Version:space.Version,
    //                    Guruprasad:space.Guruprasad,
    //                    Supplier_Demo2:space.Supplier_Demo2
    //                 });
    //             });
    //             let vInfo = [{event_id: event_id, VersionInf: entries}];
    //             await cds.tx(req).run(INSERT.into(VersionInfo).entries(vInfo));
    //             firstRead = false;
    //         }
    //         return req;
    //     } catch (err) {
    //         req.error(500, err.message);
    //     }
    // });

    // Composition test



    // this.before('READ', Evt, async (req) => {
    //     try {
    //         // if (firstReadDup) {
    //             const entries = [];
    //             const event_id = req.params[0].event_id
    //             // const event_id = "Doc40113288";
    //             cds.tx(req).run(DELETE(Evt));
    //             let query = '/dev/getVersions?event_id=' + event_id.toString();
    //             const resp = await c4re.get(query);
    //             if (resp.length == 0) {

    //             } else {
    //                 resp.forEach(space => {debugger
    //                     entries.push({
    //                        event_id: event_id,
    //                        Version:space.Version,
    //                        Guruprasad:space.Guruprasad,
    //                        Supplier_Demo2:space.Supplier_Demo2
    //                     });
    //                 });
    //                 await cds.tx(req).run(INSERT.into(Evt).entries(entries));
    //             }
                

    //             // event_ids.forEach(async eventid => {
    //             //     query = '/dev/getVersions?event_id=' + eventid.toString();
                    
    //             //     const resp = await c4re.get(query);
    //             //     resp.forEach(space => {
    //             //         entries.push({
    //             //            event_id: eventid,
    //             //            Version:space.Version,
    //             //            Guruprasad:space.Guruprasad,
    //             //            Supplier_Demo2:space.Supplier_Demo2
    //             //         });
    //             //     });
    //             // });
                
                
    //             // const spaces = resp;
                
                
                
    //             // firstReadDup = false;
    //         // }
    //         return req;
    //     } catch (err) {
    //         // req.error(500, err.message);
    //         return req;
    //     }
    // });


    this.before('READ',idTab, async (req) => {
        try {
            // if (firstSourceRead) {
                const resp = await c4re.get('/dev/GetSourceEvents');
                await cds.tx(req).run(DELETE(idTab));
                const spaces = resp.data;
                const entries = [];
                spaces.forEach(space => {
                    let criticality

                    if ( space.Srcevtname )
                    {
                        criticality = 5
                    }

                    if ( space.status === 'Completed' )
                     {
                        criticality = 3  
                     }                    
                    else if (space.status === 'Pending Selection' || space.status === 'Paused')
                    {
                        criticality = 2
                    }
                    else
                    {
                        criticality = 1
                    }
                    entries.push({
                        status:space.status,
                        Version:space.Version,
                        Srcevtname: space.Srcevtname,
                        Createdby: space.Createdby,
                        Desc: space.Desc,
                        event_id: space.event_id,
                        criticality: criticality
                    });                    
                });
                await cds.tx(req).run(INSERT.into(idTab).entries(entries));
                // firstSourceRead = false;
            // }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });
});