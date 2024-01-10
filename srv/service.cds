using { Version as my } from '../db/schema';

using Version from '../db/schema';

@path : '/service/Version'
service VersionService
{
    @readonly
    entity Version as
        projection on my.Version;

    // @odata.draft.enabled
    entity VersionInfo as
        projection on my.VersionInfo;

    // @odata.draft.enabled
    @readonly
    entity idTab as
        projection on my.idTab;

    @readonly
    entity Evt as
        projection on my.Evt;
}
