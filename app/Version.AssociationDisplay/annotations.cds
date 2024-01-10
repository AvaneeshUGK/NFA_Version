using VersionService as service from '../../srv/service';

annotate service.idTab with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Createdby,
            Label : 'Createdby',
        },
        {
            $Type : 'UI.DataField',
            Value : Desc,
            Label : 'Desc',
        },
        {
            $Type : 'UI.DataField',
            Value : Srcevtname,
            Label : 'Srcevtname',
        },
        {
            $Type : 'UI.DataField',
            Value : status,
            Label : 'status',
        },
        {
            $Type : 'UI.DataField',
            Value : Version,
            Label : 'Version',
        },
    ]
);
annotate service.idTab with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'event_id',
                Value : event_id,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Version',
            ID : 'VersionInfo',
            Target : 'verLink/@UI.LineItem#VersionInfo',
        },
    ]
);
annotate service.idTab with @Common.SemanticKey : [ event_id ] ;

annotate service.Evt with @(
    UI.LineItem #VersionInfo : [
        {
            $Type : 'UI.DataField',
            Value : Version,
            Label : 'Version',
        },
        {
            $Type : 'UI.DataField',
            Value : Guruprasad,
            Label : 'Guruprasad',
        },
        {
            $Type : 'UI.DataField',
            Value : Supplier_Demo2,
            Label : 'Supplier_Demo2',
        },]
);
annotate service.idTab with @(
    UI.FieldGroup #Ver : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : verLink.Guruprasad,
                Label : 'Guruprasad',
            },{
                $Type : 'UI.DataField',
                Value : verLink.Supplier_Demo2,
                Label : 'Supplier_Demo2',
            },{
                $Type : 'UI.DataField',
                Value : verLink.Version,
                Label : 'Version',
            },],
    }
);
annotate service.idTab with @(
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Price Comparison',
            ID : 'ProjectDetails',
            Target : '@UI.FieldGroup#ProjectDetails',
        },
    ],
    UI.FieldGroup #ProjectDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Srcevtname,
                Label : 'Source Event Name',
            },{
                $Type : 'UI.DataField',
                Value : Desc,
                Label : 'Description',
            },],
    }
);
