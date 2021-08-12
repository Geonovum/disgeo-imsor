# Metadata framework voor de SOR

## Doel metadata in de SOR

- Gebruikers extra informatie geven
- Bronhouders extra informatie geven
- De traceerbaarheid van de informatie verhogen

## Terminologie
De term 'metadata' wordt op verschillende manieren gebruikt en geïnterpreteerd (zie de [definitie](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/#definities) in onze modelleerprincipes). In dit framework richten we ons op metadata op de volgende niveau's: 
- informatiemodel-elementen
- datasets
- informatieobjecten
- (object)gegevens

In het EMSO worden de termen *kwaliteitsnorm*, *normkwaliteit*, en *kwaliteitseis* door elkaar gebruikt. In dit framework hebben we het over *kwaliteitseis*. Daarnaast is er *gerealiseerde kwaliteit* op het niveau van gegevens.

Wat betreft bronhouderschap en autorisatie is het belangrijk deze drie zaken niet te verwarren: 
- Het hebben van formele verantwoordelijkheid = bronhouderschap. Dit speelt op informatiemodelniveau (maar ook op het niveau van wetgeving).
- Geautoriseerd zijn om iets mogen muteren valt onder *autorisatie*. Hier raken de datalaag en de architectuur elkaar. Autorisatie is niet puur een metadata-aspect van het informatiemodel.
- Wie (welke specifieke bronhouder) iets gewijzigd heeft. Dit noemen we ook wel *provenance*, ofwel *herkomst*. Dit speelt op gegevensniveau.

## Metadata op informatiemodel-niveau

Dit is metadata met betrekking op objecttypes en kenmerken (attribuutsoorten en relatiesoorten) in het informatiemodel. Te denken valt aan een aantal punten benoemd in 3.4.1/3.4.2:
- Het vastleggen van het verplichte karakter van bepaalde objecttypes/attribuuttypes
- Het beschrijven van de populatie die wordt opgenomen in de SOR, per objecttype
- De termijn waarbinnen een object van bepaald type beschikbaar moet zijn in de SOR, na zijn ontstaan
- Minimale geometrie die van toepassing is voor een objecttype (2D, 2.5D, 3D)
- Het beschrijven van de actualiteit / nauwkeurigheidsklasse van een bepaald attribuuttype

Standaarden die van toepassing zijn: 
- MIM
- ISO 19131 Geographic information — Data product specifications
- ISO 19110 Methodology for feature cataloguing

Voor het specificeren van metadata voor informatiemodel-elementen is MIM als uitgangspunt genomen. Hierbij wordt metadata per objecttype / attribuuttype bijgehouden - dit wordt beschreven in [3.2.1 Modellering metagegevens voor objecten en attributen in UML](https://docs.geostandaarden.nl/mim/mim/#modellering-metagegevens-voor-objecten-en-attributen-in-uml). MIM maakt gebruik van *tagged values* waarmee je metadata op dit niveau kunt specificeren, per objecttype/kenmerk, zie hieronder:

Aspect | Domein | Toelichting
------ | ------ | -----------
Naam   | Tekst  | Naam van het informatiemodel-element 
Begrip | URI    | Verwijzing naar begrip(pen) waarop het informatiemodel-element is gebaseerd
Datum opname | Datum (jjjjmmdd) | De datum waarop het informatiemodel-element is opgenomen in het informatiemodel.
Populatie | Tekst | Beschrijving van de exemplaren van het gedefinieerde objecttype die in de desbetreffende registratie voorhanden zijn.
Kwaliteit | Tekst | Beschrijving van de mate waarin in de registratie opgenomen objecten van het desbetreffende type **volledig, juist, actueel, nauwkeurig en betrouwbaar** zijn.

### Kwaliteitseisen

Niet alle punten (die op dit metadata niveau worden benoemd in EMSO) kunnen op passende wijze worden verwerkt middels de huidige MIM tagged values. Het gaat dan met name om metadata-aspecten die te maken hebben met eisen aan de kwaliteit van de gegevens in de SOR. ISO 19131 specificeert een aantal thema's die gebruikt kunnen worden om de verschillende eisen/beschrijvingen mee uit te drukken:
- Referentie systemen: specificeren van ruimtelijke/temporele referentiesystemen die gebruikt worden in het kader van een product specificatie; 
- Data kwaliteit: specificeren van kwaliteitseisen en conformiteitsniveaus - dit laatste gaat om het specificeren van acceptabele verschillen tussen de data zelf en de verwachtingen vanuit het model;
- Inwinning (capture & production): specificeren van instructies, eisen of beschrijvingen omtrent de inwinning van de data;
- Data onderhoud: specificeren van instructies, eisen of beschrijvingen omtrent de onderhoud van de data, na de inwinning. Het gaat bijvoorbeeld om hoe vaak een product veranderingen/toevoegingen ondergaat. 

Daarnaast lijken eisen gekoppeld aan de kwaliteit erg van belang. In MIM is er één aspect *Kwaliteit* benoemd. Relevante standaarden zoals de ISO 19157 en de NORA maakt echter onderscheid in een aantal aspecten, onder andere: 
 - Nauwkeurigheid: ruimtelijk, temporeel, thematisch, positioneel
 - Volledigheid: dataset, object, historie
 - Actualiteit: frequentie
 - ... etc.

Het MIM aspect *Kwaliteit* is, kortom, niet toereikend voor wat men wil in de SOR. 
Dit speelt op twee punten: 
 1. In MIM is het aspect *kwaliteit* gespecificeerd op objecttype niveau; in de SOR wil men dit ook op attribuutsoort-niveau kunnen toepassen.
 2. In MIM is het aspect te algemeen; het kan nog in vele aspecten worden opgesplitst. Dit is al eens aan de orde geweest in MIM, zie https://github.com/Geonovum/MIM-Werkomgeving/issues/125

Bij de eisen aan de inhoud van de SOR is het bovendien wenselijk om per objecttype kwaliteitsnormen te kunnen vastleggen, maar ook op _hoofdgroepniveau_ al onderscheid te kunnen maken. Aan reële objecten worden meer eisen gesteld dan aan resp. functionele, registratieve en geografische objecten.

[MIM zegt](https://docs.geostandaarden.nl/mim/mim/#specificatie-metagegevens-modelelementen) echter over overerving van metadata aspecten, om de hoofdgroepen te kunnen beschrijven:
> de metadata aspecten zijn specifiek voor elk modelelement apart. Dus als er in H2.2 sprake is van een generalisatie, dan worden deze metadata niet overerft (en de ingevulde waardes worden uiteraard zeker niet overerft).

We kunnen dus in het formele, MIM conforme informatiemodel aspecten zoals bv de normkwaliteit niet beschrijven bij Registratief gebied en dit dan laten gelden voor alle subklassen van Registratief gebied. Dit moet formeel bij elk objecttype herhaald worden. Een workaround hiervoor zou kunnen zijn om  bij specifiekere objecttypen, voor metadata-aspecten die al bij een generiekere klasse zijn gespecificeerd, te verwijzen naar de generiekere klasse. 

**Kwaliteitsaspecten, zoals volledigheid (populatie), actualiteit, nauwkeurigheidsklasse, controlefrequentie, en inwinningswijze, worden apart uitgewerkt voor de SOR. In dit metadataframework komen ze niet verder aan de orde.**

### Metadata per objecttype
De volgende tabel geeft aan welke metadata aspecten er, naast MIM Naam, MIM Begrip en andere verplichte MIM aspecten, worden vastgelegd als metadata bij alle objecttypen in het informatiemodel.

Aspect                   | Gedefinieerd in | Domein  | Toelichting
------------------------ | --------------- | ------- | ------------
Naam                     | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-naam)             | Tekst   | Naam van het informatiemodel-element 
Begrip                   | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-begrip)             | URI     | Link naar het corresponderende begrip in het begrippenkader
Herkomst                 | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-herkomst)             | Tekst   | (verplicht in MIM)
Definitie                | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-definitie)             | Tekst   | (verplicht in MIM)
Herkomst definitie       | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-herkomst-definitie)             | Tekst   | (verplicht in MIM)
Datum opname             | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-datum-opname)             | Datum   | (verplicht in MIM)
Indicatie abstract object| [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-indicatie-abstract-object)             | Boolean | (verplicht in MIM)
Indicatie verplichtheid  | SOR             | Boolean | Of het objecttype verplichte SOR inhoud is 
Bronverwijzing`*`          | SOR             | Tekst   | Wat voor soort bronverwijzing dient te worden opgenomen bij het objecttype
Geautoriseerde bronhouder`*`| SOR            | Tekst   | Bronhoudersgroep die dit objecttype mag muteren. 
Minimale geometrie       | SOR             | -       | Het geometrietype dat minimaal verplicht moet worden opgenomen wordt gespecificeerd in het informatiemodel. 

- `*` `Bronverwijzing` kan bijvoorbeeld zijn: een vergunning, besluit, luchtfoto, plaatsbepalingspunten, een BIM model. Per objecttype moet nog worden bepaald welk(e) soorten bronverwijzing toegestaan en/of verplicht zijn. Dit wordt dan vastgelegd in het metadata-aspect `Bronverwijzing`. 
- `*` `Geautoriseerde bronhouder` wordt indien mogelijk buiten het informatiemodel opgeslagen, net als informatie over welke specifieke bronhouder(s) een specifiek object of gegeven mogen muteren. 

### Voorbeeld

#### Objecttype Gebouw

Aspect                    | Waarde 
------------------------- | ------ 
Naam                      | Gebouw  
Begrip                    | https://begrippen.geostandaarden.nl/sor/nl/page/gebouw
Herkomst                  | SOR
Definitie                 | Overdekte en geheel of gedeeltelijk met wanden omsloten constructief zelfstandige eenheid bedoeld voor het in een afgeschermde omgeving onderbrengen van mensen, dieren of voorwerpen of voor de productie van goederen.
Herkomst definitie        | NEN 3610:2021 (concept) 
Datum opname              | 2021-08-12
Indicatie abstract object | Nee
Indicatie verplichtheid   | Ja
Bronverwijzing            | Vergunning
Geautoriseerde bronhouder | Gemeente waar het gebouw zich bevindt.

#### Objecttype Straatmeubilair

Aspect                    | Waarde 
------------------------- | ------ 
Naam                      | Straatmeubilair  
Begrip                    | https://begrippen.geostandaarden.nl/sor/nl/page/straatmeubilair
Herkomst                  | IMGeo
Definitie                 | Constructie ter inrichting van de openbare ruimte niet verbonden met ondergrondse objecten.
Herkomst definitie        | SOR 
Datum opname              | 2021-08-12
Indicatie abstract object | Nee
Indicatie verplichtheid   | Nee
Bronverwijzing            | Plaatsbepalingspunt? Of geen bronverwijzing nodig.
Geautoriseerde bronhouder | Gemeente waar het straatmeubilair zich bevindt.

### Metadata per attribuutsoort
De volgende tabel geeft aan welke metadata aspecten er, naast MIM Naam, MIM Begrip en andere verplichte MIM aspecten, worden vastgelegd als metadata bij attribuutsoorten in het informatiemodel.

Aspect                      | Gedefinieerd in | Domein  | Toelichting
--------------------------- | --------------- | ------- | ------------
Naam                        | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-naam)                                  | Tekst   | Naam van het informatiemodel-element 
Begrip                      | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-begrip)                                | URI     | Link naar het corresponderende begrip in het begrippenkader
Herkomst                    | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-herkomst)                              | Tekst   | (verplicht in MIM)
Definitie                   | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-definitie)                             | Tekst   | (verplicht in MIM)
Herkomst definitie          | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-herkomst-definitie)                    | Tekst   | (verplicht in MIM)
Datum opname                | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-datum-opname)                          | Datum   | (verplicht in MIM)
Domein type e.a.            | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-type-domein-van-een-waarde-een-gegeven)| Tekst   | (verplicht in MIM)
Indicatie materiële historie| [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-indicatie-materiele-historie)          | Boolean | (verplicht in MIM) Of over het gegeven een tijdlijn geldigheid wordt bijgehouden
Indicatie formele historie  | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-indicatie-formele-historie)            | Boolean | (verplicht in MIM) Of over het gegeven een tijdlijn registratie wordt bijgehouden
Authentiek                  | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-authentiek)                             | Boolean | (verplicht in MIM) Wat voor soort bronverwijzing dient te worden opgenomen bij het objecttype
Indicatie classificierend   | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-indicatie-classificerend)              | Boolean | (verplicht in MIM) 
Mogeijk geen waarde         | [MIM](https://docs.geostandaarden.nl/mim/mim/#metagegeven-mogelijk-geen-waarde)                  | Boolean | (verplicht in MIM)
Bronverwijzing`*`           | SOR                                                                                              | Boolean | (verplicht in MIM)
Geautoriseerde bronhouder`*`| SOR                                                                                              | Tekst   | Bronhoudersgroep die dit objecttype mag muteren. 
Indicatie verplichtheid     | SOR                                                                                              | Boolean | Of een gegeven verplicht is wordt gespecificeerd middels kardinaliteit in het informatiemodel. 

- `*` `Domein` wordt in MIM opgesplitst naar verschillende aspecten: Type, lengte, patroon, en formeel patroon. Al deze aspecten worden indien relevant gebruikt. Type is verplicht en wordt altijd ingevuld. 
- `*` `Geautoriseerde bronhouder` wordt indien mogelijk buiten het informatiemodel opgeslagen, net als informatie over welke specifieke bronhouder(s) een specifiek object of gegeven mogen muteren. 

### Voorbeeld

#### Objecttype Gebouw - attribuutsoort Aard

Aspect                      | Waarde 
--------------------------- | ------ 
Naam                        | Aard  
Begrip                      | https://begrippen.geostandaarden.nl/sor/nl/page/gebouwaard
Herkomst                    | SOR?
Definitie                   | Fysieke verschijningsvorm van een gebouw
Herkomst definitie          | SOR? 
Datum opname                | 2021-08-12
Domein type                 | Waardelijst Gebouwaard
Indicatie materiële historie| Ja
Indicatie formele historie  | Ja
Authentiek                  | Ja
Indicatie classificerend    | Ja
Mogelijk geen waarde        | Nee
Bronverwijzing              | Nee
Geautoriseerde bronhouder   | Gemeente waar het gebouw zich bevindt.
Indicatie verplichtheid     | Ja

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

### NOOT 
Metadata op dataset-niveau gaat vanuit de context van de SOR in feite over informatieproducten. Deze zijn op zich voor de informatiemodellering buiten scope, maar in het metadata framework nemen we dit niveau wel mee, zodat duidelijk wordt welke metadata moet worden opgenomen bij het publiceren van informatieproducten.

## Metadata op object- of attribuutniveau
Op dit niveau gaat het specifiek om metadata over informatieobjecten en hun gegevens:
- Bronverwijzingen: vastleggen van de reden van wijziging van een attribuutwaarde, of onderbouwing van gegevens.
- Gerealiseerde kwaliteit: beschrijving van de daadwerkelijke nauwkeurigheid(sklasse), controlegegevens, etc. Dit is niet alleen belangrijk voor geometrie of andere kwantitatieve gegevens zoals oppervlakte, maar voor alle gegevens.

Standaarden die van toepassing zijn: 
- ISO 19156 Observations & Measurements
- SOSA/SSN
- PROV-O

Voor voorbeelden hiervan, zie [de uitgewerkte 'IMBoom' casus](https://geonovum.github.io/disgeo-imsor/casus/imboom)
Note: De vastlegging van metadata op attribuutniveau in het informatiemodel wordt nog besproken, zie [issue 14](https://github.com/Geonovum/disgeo-imsor/issues/14) voor meer context.
