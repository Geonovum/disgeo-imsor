# Metadata framework voor de SOR

## Doel metadata in de SOR

- Gebruikers extra informatie geven?
- Normkwaliteit *automatisch* controleren?
- ...

## Metadata op informatiemodel-niveau

Dit is metadata met betrekking op objecttypes en kenmerken (attribuutsoorten en relatiesoorten) in het informatiemodel. Te denken valt aan een aantal punten benoemd in 3.4.1/3.4.2:
- Het vastleggen van de verplichtheid van bepaalde objecttypes/attribuuttypes
- Het beschrijven van de populatie die wordt opgenomen in de SOR, per objecttype
- De termijn waarbinnen een object van bepaalde type beschikbaar moet zijn in de SOR, na zijn ontstaan
- Minimale geometrie die van toepassing is voor een objecttype (2D, 2.5D, 3D)
- Het beschrijven van de actualiteit / nauwkeurigheidsklasse van een bepaald attribuuttype

Standaarden die van toepassing zijn: 
- MIM
- ISO 19131 Geographic information — Data product specifications
- ISO 19110 Methodology for feature cataloguing

Voor het specificeren van metadata voor informatiemodel-elementen is MIM als uitgangspunt genomen. Hierbij wordt metadata per objecttype / attribuuttype bijgehouden - dit wordt beschreven in [3.2.1 Modellering metagegevens voor objecten en attributen in UML](https://docs.geostandaarden.nl/mim/mim/#modellering-metagegevens-voor-objecten-en-attributen-in-uml). MIM maakt gebruik van een *tagged values* waarmee je metadata op dit niveau kunt specificeren, per objecttype/kenmerk, zie hieronder:

Aspect | Domein | Toelichting
------ | ------ | -----------
Naam   | Tekst  | Naam van het informatiemodel-element 
Begrip | URI    | Verwijzing naar begrip(pen) waarop het informatiemodel-element is gebaseerd
Datum opname | Datum (jjjjmmdd) | De datum waarop het informatiemodel-element is opgenomen in het informatiemodel.
Populatie | Tekst | Beschrijving van de exemplaren van het gedefinieerde objecttype die in de desbetreffende registratie voorhanden zijn.
Kwaliteit | Tekst | Beschrijving van de mate waarin in de registratie opgenomen objecten van het desbetreffende type **volledig, juist, actueel, nauwkeurig en betrouwbaar** zijn.

Niet alle punten (die op dit metadata niveau worden benoemd in EMSO) kunnen op passende wijze worden verwerkt middels de huidige MIM tagged values - echter kunnen we altijd nieuwe values toevoegen. ISO 19131 specificeert een aantal thema's die gebruikt kunnen worden om de verschillende eisen/beschrijvingen mee uit te drukken:
- Referentie systemen: specificeren van ruimtelijke/temporele referentiesystemen die gebruikt worden in het kader van een product specificatie; 
- Data kwaliteit: specificeren van kwaliteitseisen en conformiteitsniveaus - dit laatste gaat om het specificeren van acceptabele verschillen tussen de data zelf en de verwachtingen vanuit het model;
- Inwinning (capture & production): specificeren van instructies, eisen of beschrijvingen omtrent de inwinning van de data;
- Data onderhoud: specificeren van instructies, eisen of beschrijvingen omtrent de onderhoud van de data, na de inwinning. Het gaat bijvoorbeeld om hoe vaak een product veranderingen/toevoegingen ondergaat. 

Daarnaast lijken eisen gekoppeld aan de kwaliteit erg van belang, daarom adviseren wij om het MIM aspect Kwaliteit verder uit te splitsen. ISO 19157 maakt onderscheid in een aantal aspecten, onder andere: 
 - Nauwkeurigheid: ruimtelijk, temporeel, thematisch, positioneel
 - Volledigheid: dataset, object, historie
 - Actualiteit: frequentie
 - ... etc.

*Per informatiemodel-element:*

Aspect | Domein | Toelichting
------ | ------ | -----------
|Naam   | Tekst  | Naam van het informatiemodel-element |
|Begrip | URI    | |
Volledigheid | Getal | Bv: minimaal percentage
Actualiteit | Getal | Bv: [x] maanden
Nauwkeurigheidsklasse | Domeinwaarde | Bv: Hoog / Midden / Laag*
Controlefrequentie | Getal | Bv: 1 keer per [x] jaar
Inwinningswijze | Domeinwaarde | Bv: Luchtfoto / Terrestrisch / etc.

*Nauwkeurigheidsklasse*
- Hoog = centimeter tot decimeter
- Midden = decimeter tot meter
- Laag = meter tot hectometer

### Voorbeeld

#### Objecttype Abri

Aspect | Waarde | 
------ | ------ |
Naam   | Abri  
|Begrip | https://begrippen.geostandaarden.nl/sor/nl/page/abri
Volledigheid | 99 procent
Actualiteit | 12 maanden
Nauwkeurigheidsklasse | Midden 
Controlefrequentie | 2 jaar
Inwinningswijze | Luchtfoto 


## Metadata op dataset-niveau
Standaarden die metadata op dit niveau beschrijven focussen dus op het beschrijven van datasets (en dataset series). Op dit niveau valt te denken aan eisen omtrent:
- Beschrijvingen van een dataset: titel, thema's, versie informatie, herkomst en kwaliteit (op het niveau van de dataset), standaarden die van toepassing zijn
- Beschrijvingen van rechten: wie is verantwoordelijk voor de dataset, wat is de verantwoordelijkheid

Standaarden die van toepassing zijn:
- ISO 19131 Geographic information — Data product specifications (Data content and structure)
- Nederlands profiel op ISO 19115 Geographic information — Metadata
- DCAT & GeoDCAT-AP 
- PROV-O
- DQV

*Voor een dataset (aspecten uit GeoDCAT, dcat:Dataset):*

Aspect | Toelichting
------ | -----------
Ontstaansdatum | Datum waarop de dataset is ontstaan
Thema | Thema's die van toepassing zijn (gebaseerd op INSPIRE lijst) 
Ruimtelijke resolutie | Resolutie van dataset, in meters | 
Rechten (rightsHolder/creator) | Degene verantwoordelijk voor de dataset + de verantwoordelijkheid: eigenaar, provider, publicerende partij, autheur (Uit ISO 19115 lijst)

## Metadata op object- of attribuutniveau
Op dit niveau gaat het specifiek om metadata over informatieobjecten en hun gegevens:
- Bronverwijzingen: vastleggen van de reden van wijziging van een attribuutwaarde, of onderbouwing van gegevens.
- Kwaliteit: beschrijving van de daadwerkelijke nauwkeurigheid(sklasse), controledatum, etc

Standaarden die van toepassing zijn: 
- ISO 19156 Observations & Measurements (en SSN)
- PROV-O

Voor voorbeelden hiervan, zie [de uitgewerkte 'IMBoom' casus](https://geonovum.github.io/disgeo-imsor/casus/imboom)
Note: De vastlegging van metadata op attribuutniveau in het informatiemodel wordt nog besproken, zie [issue 14](https://github.com/Geonovum/disgeo-imsor/issues/14) voor meer context.
