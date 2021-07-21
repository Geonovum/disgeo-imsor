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

In het EMSO worden de termen *kwaliteitsnorm*, *normkwaliteit*, en *kwaliteitseis* door elkaar gebruikt. Deze drie termen zijn synoniem. In dit framework hebben we het over *normkwaliteit*. Daarnaast is er *gerealiseerde kwaliteit* op het niveau van gegevens.

***ISSUE***: checken met NORA of Normkwaliteit de juiste term is.</aside>

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

Niet alle punten (die op dit metadata niveau worden benoemd in EMSO) kunnen op passende wijze worden verwerkt middels de huidige MIM tagged values - echter kunnen we altijd nieuwe values toevoegen. ISO 19131 specificeert een aantal thema's die gebruikt kunnen worden om de verschillende eisen/beschrijvingen mee uit te drukken:
- Referentie systemen: specificeren van ruimtelijke/temporele referentiesystemen die gebruikt worden in het kader van een product specificatie; 
- Data kwaliteit: specificeren van kwaliteitseisen en conformiteitsniveaus - dit laatste gaat om het specificeren van acceptabele verschillen tussen de data zelf en de verwachtingen vanuit het model;
- Inwinning (capture & production): specificeren van instructies, eisen of beschrijvingen omtrent de inwinning van de data;
- Data onderhoud: specificeren van instructies, eisen of beschrijvingen omtrent de onderhoud van de data, na de inwinning. Het gaat bijvoorbeeld om hoe vaak een product veranderingen/toevoegingen ondergaat. 

Daarnaast lijken eisen gekoppeld aan de kwaliteit erg van belang. In MIM is er één aspect *Kwaliteit* benoemd. Dit MIM aspect wordt in dit framework verder uitgesplitst. ISO 19157 maakt onderscheid in een aantal aspecten, onder andere: 
 - Nauwkeurigheid: ruimtelijk, temporeel, thematisch, positioneel
 - Volledigheid: dataset, object, historie
 - Actualiteit: frequentie
 - ... etc.

### ISSUE: Het MIM aspect *Kwaliteit* is niet toereikend voor wat men wil in de SOR. 
Dit speelt op twee punten: 
 1. In MIM is het aspect *kwaliteit* gespecificeerd op objecttype niveau. 
 2. In MIM is het aspect te algemeen. Dit is al eens aan de orde geweest in MIM, zie https://github.com/Geonovum/MIM-Werkomgeving/issues/125

### NOOT
Bij de eisen aan de inhoud van de SOR is het wenselijk om per objecttype kwaliteitsnormen te kunnen vastleggen, maar ook op hoofdgroepniveau al onderscheid te kunnen maken. Aan reële objecten worden meer eisen gesteld dan aan resp. functionele, registratieve en geografische objecten.

[MIM zegt](https://docs.geostandaarden.nl/mim/mim/#specificatie-metagegevens-modelelementen) echter over overerving van metadata aspecten, om de hoofdgroepen te kunnen beschrijven:
> de metadata aspecten zijn specifiek voor elk modelelement apart. Dus als er in H2.2 sprake is van een generalisatie, dan worden deze metadata niet overerft (en de ingevulde waardes worden uiteraard zeker niet overerft).

We kunnen dus in het formele, MIM conforme informatiemodel aspecten zoals bv de normkwaliteit niet beschrijven bij Registratief gebied en dit dan laten gelden voor alle subklassen van Registratief gebied. Dit moet formeel bij elk objecttype herhaald worden. 

Mogelijke oplossing: bij specifiekere objecttypen, voor metadata-aspecten die al bij een generiekere klasse zijn gespecificeerd, verwijzen naar de generiekere klasse. 

De volgende tabel geeft aan welke metadata aspecten er, naast MIM Naam, MIM Begrip en andere MIM aspecten, worden vastgelegd.

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

In plaats van een van deze nauwkeurigheidsklassen mag ook een verwijzing naar een generiekere klasse worden opgenomen in de vorm `zie [naam objecttype]`

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
