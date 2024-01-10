using VersionService as service from '../../srv/service';

annotate service.Version with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Version,
            Label : 'Version',
        },
        {
            $Type : 'UI.DataField',
            Value : Supplier_Demo2,
            Label : 'Supplier_Demo2',
        },
        {
            $Type : 'UI.DataField',
            Value : Guruprasad,
            Label : 'Guruprasad',
        },
    ]
);
annotate service.Version with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Version inforation',
            ID : 'Versioninforation',
            Target : '@UI.FieldGroup#Versioninforation',
        },
    ],
    UI.FieldGroup #Versioninforation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Guruprasad,
                Label : 'Guruprasad',
            },{
                $Type : 'UI.DataField',
                Value : Supplier_Demo2,
                Label : 'Supplier_Demo2',
            },{
                $Type : 'UI.DataField',
                Value : Version,
                Label : 'Version',
            },],
    }
);
