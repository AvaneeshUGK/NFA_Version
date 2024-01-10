namespace Version;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Version
{
    Version : String(100);
    Guruprasad : Decimal(8,2);
    Supplier_Demo2 : Decimal(8,2);
}

entity VersionInfo
{
    key event_id : String;
    VersionInf : Ver;
}

type Ver
{
}

entity Evt
{
    event_id: String;
    Version : String(100);
    Guruprasad : Decimal(8,2);
    Supplier_Demo2 : Decimal(8,2);
    idTab : Association to one idTab on idTab.event_id = event_id;
}

entity idTab
{
    key event_id : String;
    Srcevtname : String;
    Createdby : String(50);
    Desc : String(100);
    Version : String(10);
    status : String(100);
    criticality : Integer;
    verLink : Association to many Evt on verLink.idTab = $self;
}
