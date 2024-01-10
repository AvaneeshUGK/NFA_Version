using VersionService as service from '../../srv/service';

annotate service.VersionInfo with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'event_id',
            Value : event_id,
        },
    ]
);
annotate service.VersionInfo with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
