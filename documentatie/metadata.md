## Metadata

### Algemeen
Metadata is een breed begrip dat op verschillende manieren wordt gebruikt en geïnterpreteerd. Ook is het een domein waar al veel standaarden voor beschikbaar zijn. Daarom hebben we een inventarisatie gedaan van bestaande, relevante metadata standaarden, vervolgens een metadata kader opgesteld, en de functionele eisen aan metadata uit [[EMSO]] in dit kader geplaatst. Het onderwerp 'Kwaliteit' bleek op zichzelf zo omvangrijk te zijn dat we hier een aparte analyse voor gedaan hebben. Hier wordt verder op in gegaan in [](#kwaliteit). 

### Metadata standaarden

De volgende metadata standaarden zijn bekeken: 

**Nederlands profiel op ISO 19115 Geographic information - Metadata**
ISO 19115 is een zeer uitgebreide standaard voor dataset metadata specifiek voor geodata. Ook verplicht in INSPIRE context; er is een INSPIRE profiel en het [Nederlands profiel op ISO 19115](https://docs.geostandaarden.nl/md/mdprofiel-iso19115/) sluit daar weer op aan. We kunnen dus het NL profiel bekijken en hoeven dan niet de ISO standaard en INSPIRE guideline ook te lezen. 
Er is een XML implementatie van deze standaard. Er is ook een Geo-DCAT-AP mapping.

**ISO 19157 Geographic information — Data quality**
Standaard die de datakwaliteitseigenschappen van geo-data beschrijft, uitgaande van datasetniveau maar je zou de beschreven aspecten ook wel op informatieobjecten kunnen toepassen. De kwaliteitseigenschappen zijn compleetheid, logische consistentie, positionele nauwkeurigheid, thematische nauwkeurigheid, en temporele kwaliteit. Enkele van deze kwaliteitsaspecten zijn in het Nederlands profiel op ISO 19115 opgenomen. 

**MIM Metamodel voor informatiemodellering**
In het [MIM](https://docs.geostandaarden.nl/mim/mim/) staan metadata aspecten voor de elementen uit informatiemodellen gespecificeerd. 

**ISO 19110 Geographic information - Methodology for feature cataloguing**
Deze standaard geeft een framework voor het beschrijven van de soorten geo-objecten in een geo-dataset. Een set beschrijvingen vormt samen een catalogus, waarin gebruikers informatie kunnen vinden over alle geo-objecttypen in een dataset. De catalogus bevat in ieder geval de namen, definities, en kenmerken van alle geo-objecttypen.

**ISO 19131 Geographic information - Data product specifications**
Deze standaard specificeert een soort template voor gegevenscatalogi / data specificaties, die beschrijven wat er in een informatiemodel gespecificeerd is en aanvullende eisen (in tekst) kunnen beschrijven. Deze standaard zegt dus ook iets over welke aspecten je per informatie-element beschrijft. Bijvoorbeeld de data specifications van de INSPIRE thema's zijn hierop gebaseerd. Bij Geonovum wordt ISO 19131 ook gehanteerd bij sommige standaarden, echter zijn er vaak vanuit de opdrachtgever ook nog eisen aan de catalogus (bv vanuit de Basisregistratie stelselcatalogus) en wordt het uiteindelijke product toch anders. Heeft dependency op ISO 19115, ISO 19157, ISO 19108, ISO 19103. 

**DCAT Data Catalog vocabulary**
[DCAT](https://www.w3.org/TR/vocab-dcat-2/) is een W3C standaard; het definieert een RDF vocabulaire voor dataset metadata. Beschrijft de belangrijkste metadata aspecten van datasets, dataset series en services, bedoeld voor de vindbaarheid van data en het beoordelen van de geschiktheid voor de beoogde toepassing. Dit is een algemene standaard, niet specifiek voor geodata. Er zijn wel enkele aspecten in DCAT gedefinieerd die specifiek voor geodata bedoeld zijn: spatial coverage en spatial resolution. We kijken naar de 2.0 versie. 

**Geo-DCAT-AP A geospatial extension for the DCAT application profile for data portals in Europe**
[Geo-DCAT-AP](https://semiceu.github.io/GeoDCAT-AP/releases/) is een op Europees niveau afgesproken extensie op DCAT 2.0 die extra geo-aspecten toevoegt aan het DCAT profiel voor Europese dataportalen. Het gaat met name om de aspecten die in ISO 19115 zitten (in de Core daarvan) maar in DCAT ontbreken. Het is dus mogelijk om ISO 19115 te mappen naar Geo-DCAT-AP en deze mapping staat beschreven in een appendix.

**ISO 19156 O&M Observations & Measurements**
[O&M](https://www.ogc.org/standards/om) is een conceptueel model dat specificeert hoe je metadata van metingen kunt beschrijven. De activiteit van het meten staat centraal; bij elke meting kun je de methode, verschillende temporele eigenschappen, gebruikte apparaat, enzovoort opnemen en dit relateren aan het object waar de meting over gaat (waar een eigenschap van geobserveerd werd). En daarnaast uiteraard het resultaat. Dit zou een modelleerpatroon kunnen zijn voor bepaalde eigenschappen van SOR objecten, als die het resultaat zijn van een meting of waarneming. 

O&M 2.0 is zowel een ISO als een OGC standaard. Er is een [onofficiële werkversie van O&M 3.0](https://github.com/opengeospatial/om-swg/blob/master/oms-abstract-spec/ogc-as-topic20/20-082r2_OGC_Abstract_Specification_Topic_20_-_Observations_and_measurements.docx) beschikbaar.

**SOSA/SSN Sensor network ontology**
[SSN](https://www.w3.org/TR/vocab-ssn/) is een bij W3C en OGC gestandaardiseerde RDF vocabulaire die O&M implementeert maar in aanvulling op O&M ook sensoren en actuatoren afdekt. Het bevat een eenvoudige core, SOSA (Sensor, Observation, Sample and Actuator) en een uitgebreider deel. Het geheel wordt SSN genoemd. Is nog gebaseerd op O&M 2.0; O&M 3.0 zal meer op SSN afgestemd zijn. De SSN specificatie beschrijft ook een mapping met PROV-O, Dolce-ultralight en OBOE.

**PROV-O Provenance vocabulary**
[PROV-O](https://www.w3.org/TR/prov-o/) is een bij W3C gestandaardiseerde RDF vocabulaire voor het beschrijven van 'provenance', de oorsprong van data. Het gaat dan om ontstaansaspecten van de data, zoals hoe de data geproduceerd is, wanneer, door wie, enz. Dit is geen geo-data specifieke standaard. 

**DQV Data quality vocabulary**
[DQV](https://www.w3.org/TR/vocab-dqv/) is een RDF vocabulaire voor het beschrijven van datakwaliteit. Komt voort uit het werk van de Data on the web Best Practices, dus is bij de W3C ontwikkeld, maar is geen officiële standaard. Het is ook geen geo-data specifieke standaard. De vocabulaire geeft elementen voor het beschrijven van kwaliteitsaspecten (en kwaliteitsdimensies, zoals gespecificeerd in ISO/IEC 25012). Je kunt zelf definieren welke metrics dit zijn en hoe je de kwaliteit daarvan uitdrukt. Ook bevat het elementen om aan te geven aan welke standaard of policy de data voldoet, om te linken naar certificaten, om kwaliteitsfeedback op te nemen, etc.

**SDW-BP 13 en 14 Spatial data on the web best practices**
Twee van de [Spatial data on the Web best practices](https://www.w3.org/TR/sdw-bp/) gaan over metadata: [13 Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata) en [14 Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#desc-accuracy). Best practice 13 beveelt aan om in ieder geval de spatial extent, coverage en representation op te nemen en noemt daarnaast nog een aantal andere aspecten. Best practice 14 geeft handvaten voor het beschrijven van positionele nauwkeurigheid. Er wordt verwezen naar ISO 19115, DCAT, Geo-DCAT-AP, en DQV.

Zie ook de [editor's draft](https://w3c.github.io/sdw/bp/); hierin staan onder andere updates met betrekking tot DCAT v2.0.

**ISO 25012 Data Quality Model**

Deze standaard specificeert een generiek model ten behoeve van de evaluatie van data kwaliteit - het gaat hierbij om gestructureerde data in computer systemen. De standaard focust zich dus op het beschrijven van 15 kwaliteitsdimensies die relevant kunnen zijn voor de kwaliteitscontrole van een data product. Een dimensie kan meerdere zogenaamde kwaliteitsattributen bevatten - deze attributen kunnen worden gebruikt om meetbare eisen mee uit te drukken. De dimensies worden gegroepeerd in twee categorieën: dimensies voor de inherente data kwaliteit en dimensies voor systeem-afhankelijke data kwaliteit. De inherente data kwaliteit zegt iets over de mate waarin de data zelf aan de gestelde/impliciete behoeftes voldoet. Systeem-afhankelijke data kwaliteit zegt iets over de mate waarin data kwaliteit kan worden bereikt en behouden binnen een computer system - het gaat hierbij vooral om procesgegevens en afhankelijkheden vanuit gebruikte hardware en software.

**Raamwerk Gegevenskwaliteit (NORA)**

Het [Raamwerk Gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit#%22) van de Nederlandse Overheid Referentie Architectuur (NORA) kwam tot stand op basis van de verzamelde kennis omtrent [gegevensmanagement](https://www.noraonline.nl/wiki/Gegevensmanagement). Het raamwerk richt zich op het definieren van een aantal dimensies voor inherente data kwaliteit. Deze dimensies worden verder uitgewerkt in 32 kwaliteitsattributen met voorbeelden. Tevens wordt alles beschreven aan de hand van een begrippenlijst. Het raamwerk maakt gebruik van de in ISO 25012 benoemde kwaliteitsdimensies en legt in sommige gevallen ook de link met een aantal geo-specifieke dimensies van ISO 19157. Deze vergelijking is echter incompleet. 

### Metadata framework voor de SOR

#### Doel metadata
Het doel van metadata in de SOR is:

- Gebruikers extra informatie geven
- Bronhouders extra informatie geven
- De traceerbaarheid van de informatie verhogen

#### Terminologie: wat bedoelen we met 'metadata'?
De term 'metadata' wordt op verschillende manieren gebruikt en geïnterpreteerd (zie de [definitie](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/#definities) in onze modelleerprincipes). In dit framework richten we ons op metadata op de volgende niveau's: 
- informatiemodel-elementen
- datasets
- informatieobjecten
- (object)gegevens

In het [[EMSO]] worden de termen *kwaliteitsnorm*, *normkwaliteit*, en *kwaliteitseis* door elkaar gebruikt. In dit framework hebben we het over *kwaliteitseis*. Daarnaast is er *gerealiseerde kwaliteit* op het niveau van gegevens.

Wat betreft bronhouderschap en autorisatie is het belangrijk deze drie zaken niet te verwarren: 
- Het hebben van formele verantwoordelijkheid = bronhouderschap. Dit speelt op informatiemodelniveau (maar ook op het niveau van wetgeving).
- Geautoriseerd zijn om iets mogen muteren valt onder *autorisatie*. Hier raken de datalaag en de architectuur elkaar. Autorisatie is niet puur een metadata-aspect van het informatiemodel.
- Wie (welke specifieke bronhouder) iets gewijzigd heeft. Dit noemen we ook wel *provenance*, ofwel *herkomst*. Dit speelt op gegevensniveau.

#### Metadata op informatiemodel-niveau

Dit is metadata met betrekking op objecttypes en kenmerken (attribuutsoorten en relatiesoorten) in het informatiemodel. Te denken valt aan een aantal punten benoemd in EMSO [paragraaf 3.4.1](https://docs.geostandaarden.nl/disgeo/emso/#relevante-aspecten-meta-informatie) en [paragraaf 3.4.2](https://docs.geostandaarden.nl/disgeo/emso/#specificeren-meta-informatie-in-informatiemodel):
- Het vastleggen van het verplichte karakter van bepaalde objecttypes/attribuuttypes
- Het beschrijven van de populatie die wordt opgenomen in de SOR, per objecttype
- De termijn waarbinnen een object van bepaald type beschikbaar moet zijn in de SOR, na zijn ontstaan
- Minimale geometrie die van toepassing is voor een objecttype (2D, 2.5D, 3D)
- Het beschrijven van de actualiteit / nauwkeurigheidsklasse van een bepaald attribuuttype    

Standaarden die van toepassing zijn: 
- [[MIM]]
- [[ISO-19131]] Geographic information — Data product specifications
- [[ISO-19110]] Methodology for feature cataloguing

Voor het specificeren van metadata voor informatiemodel-elementen is MIM als uitgangspunt genomen. Hierbij wordt metadata per objecttype / attribuuttype bijgehouden - dit wordt beschreven in [3.2.1 Modellering metagegevens voor objecten en attributen in UML](https://docs.geostandaarden.nl/mim/mim/#modellering-metagegevens-voor-objecten-en-attributen-in-uml). MIM maakt gebruik van *tagged values* waarmee je metadata op dit niveau kunt specificeren, per objecttype/kenmerk, zie hieronder:

Aspect | Domein | Toelichting
------ | ------ | -----------
Naam   | Tekst  | Naam van het informatiemodel-element 
Begrip | URI    | Verwijzing naar begrip(pen) waarop het informatiemodel-element is gebaseerd
Datum opname | Datum (jjjjmmdd) | De datum waarop het informatiemodel-element is opgenomen in het informatiemodel.
Populatie | Tekst | Beschrijving van de exemplaren van het gedefinieerde objecttype die in de desbetreffende registratie voorhanden zijn.
Kwaliteit | Tekst | Beschrijving van de mate waarin in de registratie opgenomen objecten van het desbetreffende type **volledig, juist, actueel, nauwkeurig en betrouwbaar** zijn.

##### Metadata per objecttype
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

<aside class="example">
<strong>Objecttype Gebouw</strong>

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

<strong>Objecttype Straatmeubilair</strong>

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

</aside>

##### Metadata per attribuutsoort
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


<aside class="example">

<strong>Objecttype Gebouw - attribuutsoort Aard</strong>

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

</aside>

##### Kwaliteitseisen

Niet alle punten (die op dit metadata niveau worden benoemd in [[EMSO]]) kunnen op passende wijze worden verwerkt middels de huidige MIM tagged values. Het gaat dan met name om metadata-aspecten die te maken hebben met eisen aan de kwaliteit van de gegevens in de SOR. ISO 19131 specificeert een aantal thema's die gebruikt kunnen worden om de verschillende eisen/beschrijvingen mee uit te drukken:
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

<aside class="note">Kwaliteitsaspecten, zoals volledigheid (populatie), actualiteit, nauwkeurigheidsklasse, controlefrequentie, en inwinningswijze, worden apart uitgewerkt voor de SOR. In dit metadataframework komen ze niet verder aan de orde.</aside>

#### Metadata op object- of attribuutniveau
Op dit niveau gaat het specifiek om metadata over informatieobjecten en hun gegevens:
- Tijdlijnen geldigheid en registratie
- Bronverwijzingen: vastleggen van de reden van wijziging van een attribuutwaarde, of onderbouwing van gegevens.
- Gerealiseerde kwaliteit: beschrijving van de daadwerkelijke nauwkeurigheid(sklasse), controlegegevens, etc van een gegeven. Dit is niet alleen belangrijk voor geometrie of andere kwantitatieve gegevens zoals oppervlakte, maar voor alle gegevens.
- In onderzoek zijn van een gegeven / terugmeldingen

Standaarden die van toepassing zijn: 
- ISO Observations & Measurements [[iso-19156-2011]]
- W3C/OGC Semantic Sensor Networks ontology [[vocab-ssn]]
- W3C Provenance ontology [[prov-o]]

Voor voorbeelden hiervan, zie de uitgewerkte 'IMBoom' casus in [](#historie-casus-informatiemodel-boom). 

<aside class="issue" data-number="14">De vastlegging van metadata op attribuutniveau in het informatiemodel wordt nog besproken, zie [issue 14](https://github.com/Geonovum/disgeo-imsor/issues/14) voor meer context.</aside>

#### Metadata op dataset-niveau
Standaarden die metadata op dit niveau beschrijven focussen op het beschrijven van datasets (en dataset series). Op dit niveau valt te denken aan eisen omtrent:
- Beschrijvingen van een dataset: titel, thema's, versie informatie, herkomst en kwaliteit (op het niveau van de dataset), standaarden die van toepassing zijn
- Beschrijvingen van rechten: wie is verantwoordelijk voor de dataset, wat is de verantwoordelijkheid

Standaarden die van toepassing zijn:
- Geographic information — Data product specifications [[ISO-19131]]
- Nederlands profiel op ISO 19115 Geographic information — Metadata [[NL-profiel-ISO-19115]]
- W3C Data Catalog Vocabulary [[vocab-dcat-2]] en Geo-DCAT application profile [[geodcat-ap]]
- W3C Provenance ontology [[prov-o]]
- W3C Data Quality Vocabulary [[vocab-dqv]]

Voor een dataset (aspecten uit GeoDCAT, dcat:Dataset) geldt bijvoorbeeld de volgende metadata:

Aspect | Toelichting
------ | -----------
Ontstaansdatum | Datum waarop de dataset is ontstaan
Thema | Thema's die van toepassing zijn (gebaseerd op INSPIRE lijst) 
Ruimtelijke resolutie | Resolutie van dataset, in meters | 
Rechten (rightsHolder/creator) | Degene verantwoordelijk voor de dataset + de verantwoordelijkheid: eigenaar, provider, publicerende partij, autheur (Uit ISO 19115 lijst)

<aside class="note">Metadata op dataset-niveau gaat vanuit de context van de SOR in feite over informatieproducten. Deze zijn op zich voor de informatiemodellering buiten scope, maar in het metadata framework nemen we dit niveau wel mee, zodat duidelijk wordt welke metadata moet worden opgenomen bij het publiceren van informatieproducten.</aside>

#### Samenvatting: standaarden en metadata niveau's

|Niveau  | aandachtsgebied  | ISO 19115, Nederlands profiel op ISO 19115 | MIM   | ISO 19157Geographic information —Data quality | DCAT / Geo-DCAT-AP (DCAT 2)Data Catalog vocabulary | ISO 19131 Data product specifications | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary | SDW-BP 13 en 14Spatial data on the web best practices | ISO 191110 |
|-----------------------|-----------------------------------------------------------------------------------|--------------------------------------------|-----------|-----------------------------------------------|----------------------------------------------------|---------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------|-------------------------------------------------------|------------|
| Datasetniveau   | Het gaat om metadata over datasets en dataset series.   | ja   | nee   | ja  | ja   | ja  | nee  | ja  | nee  | ja   | ja  |  |
| Informatiemodelniveau | Het gaat om metadata over objecttypes en kenmerken (attribuutsoorten en relaties) | nee  | ja  | nee   | nee  | ja  | nee  | nee   | nee  | nee  | nee   |  |
| Instantieniveau   | Het gaat om metadata over informatieobjecten en hun gegevens  | nee  | nee   | ja  | nee  | nee   | ja   | ja  | ja   | nee  | nee   |  |

### Inventarisatie metadata voor de SOR
De volgende paragrafen bevatten een inventarisatie van de verschillende metadata aspecten die in het [[EMSO]] beschreven zijn. Elk aspect is geplaatst in het metadata niveau waar het toe behoort en er is gekeken welke standaard(en) dit aspect adresseren.

##### Niveau informatiemodel 

| Van toepassing op   | Aspect   | Beschrijving   | In EMSO?   | In MIM?  | ISO 19157Geographic information —Data quality  | DCAT / Geo-DCAT-APData Catalog vocabulary   | ISO 19131 Data product specifications   | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary   |   |   |
|---------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|---|---|
| Objecttype  | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   |  |   |  |  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen bronhouder(s): Het is mogelijk dat in het informatiemodel wordt gespecificeerd dat er verschillende (categorieën) bronhouders zijn voor één objecttype. De bronhouder is de partij die objecten kan opvoeren en afvoeren. | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dcat:qualifiedAttribution  | SpecificationScope.level = featuretype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik: Als default zijn alle objecten in de SOR als open data voor iedereen beschikbaar. Uitzonderingen hierop worden in het informatiemodel expliciet benoemd.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | dct:accessRights - RightsStatement  | nvt   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Beschrijving populatie (volledigheid en actualiteit)   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "populatie''  | DQ_Completeness  | dct:description / dqv:QualityMeasurement / dct:accrualPeriodicity / | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription / Maintenance.maintenanceAndUpdateFrequency | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:populationCompletenessMetric  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of objecttype verplicht of optioneel is   | Uit EMSO (in 3.4.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_CompletenessOmission  | dct:description  / dqv:QualityMeasurement   | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of planstatus relevant is (relevant ontstaansmoment voor de SOR): Objecten worden in de SOR opgenomen op het moment dat deze volgens de voor het betreffende objecttype gedefinieerde criteria ontstaan   | Uit EMSO (in 2.4.4)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_DomainConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen actualiteitseis: gaat over binnen welke termijn (aantal dagen/maanden) na realisatie/ontstaan van een object, dit object beschikbaar moet zijn in de SOR  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria / Maintenance.maintenanceAndUpdateFrequency   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:currentness   |   |   |
|   | Kwaliteitseis  | Minimale activiteiten gericht op periodieke volledigheidscontrole  |  |  | Opstellen/uitvoeren van quality reports, conform ISO 19157 (?) |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| Kenmerk   | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen of een bronverwijzing (naar bv vergunningen, plaatsbepalingspunten, etc) aan de orde is voor dit kenmerk  | Uit EMSO 3.4.1 / 3.4.4 | In 2.8.2.16  | DQ_ConceptualConsistency, DQ_DomainConsistency   | nvt   | SpecificationScope.level = attributeType > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:complaince  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen van een reden van wijziging van een attribuutwaarde. Het is aan te bevelen om "reden van wijziging" vast te leggen aan de hand van te benoemen redenen.   | Uit EMSO 3.4.1   | nvt  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik:  wanneer deze afwijken van de autorisatie voor het objecttype. Het is bijvoorbeeld mogelijk dat in de SOR voor een bepaald attribuut een andere bronhouder (attribuuthouder) wordt aangewezen.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dct:accessRights   | SpecificationScope.level = attributetype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of attribuut verplicht of optioneel is  | Uit EMSO (in 3.4.1)  | In 2.8.2.16  | DQ_CompletenessOmission  | nvt   | SpecificationScope.level = attributetype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig + betere definitie van kwaliteit | Kwaliteitseis  | Beschrijving minimale eisen aan kwaliteit (nauwkeurigheid, actualiteit)  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''; In 2.8.2.23 | DQ_PositionalAccuracy, DQ_TemporalQuality  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:accuracy / dqv:currentness / dqv:compliance (te checken dat aan de eisen wordt voldaan) |   |   |
| *invulling nodig  | Kwaliteitseis  | Eisen aan de wijze van inwinning van het attribuut   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataCaptureAndProduction   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale inspanningsverplichtingen om atribuut op orde te houden   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale geometrietype die van toepassing is (2D, 2.5D, 3D)  | Uit EMSO (in 3.2.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_Completeness  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:precision / dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
|   |  |  |  | nvt  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model   |  |  |  |  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model (dataset)   | Domein   | Aanduiding van het functionele domein waartoe het informatiemodel behoort.   |  | Uit 2.8.1.1 (verplicht)  | nvt  | dcat:keyword / dcat:theme   | DataProductSpecification.term   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Model type   | De beschrijving van de aard van het informatiemodel, hoe het geinterpreteerd moet worden. (conceptueel, logisch, technisch)  |  | Uit 2.8.1.2 (verplicht)  | nvt  | dct:description   | DataProductSpecification.overview   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Relatiekeuze type  | Aanduiding van een in MIM gedefinieerd alternatief voor een modelleringswijze, en welke keuze hierbij is gemaakt.  |  | Uit 2.8.1.3 (verplicht)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Versie MIM   | De versie van de MIM specificatie die gebruikt is om het informatiemodel in uit te drukken.  |  | Uit 2.8.1.4 (verplicht)  | nvt  | dct:conformsTo  | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Extensie MIM   | De aanduiding van een extensie op MIM.   |  | Uit 2.8.1.5 (optioneel)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
| Model (objecttype)  | Historie/Levensfase (Concreet) | Van elk object in de SOR wordt meta-informatie opgenomen over het ontstaansmoment en versie van het object   | Uit EMSO (in 2.5.4)  | In 2.8.2.10  | DQ_ConceptualConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = dataset > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Kwaliteitseis  | Definitie van objecttype (naam, definitie, begrip)   | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
| Model (kenmerk)   | Kwaliteitseis  | Definitie van attribuuttype  | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
|   | Indicatie softtyping   | Indicatie dat een attribuutsoort het objecttype waar het bijhoort classificeert in (sub)typen.   |  | Uit 2.8.2.15   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |

##### Niveau object / gegevens 

| Van toepassing op | Aspect   | Beschrijving   | In EMSO?   | In MIM? | ISO 19115Geldt op dataset niveau maar kan op zich ook gebruikt worden op instantieniveau als het past. | ISO 19157Geographic information —Data quality  | DCAT / Geo-DCAT-APData Catalog vocabulary | ISO 19131 Data product specifications | ISO 19156O&M Observations & Measurements   | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary |   |
|-------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|---------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------|---------------------------------------|--------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------|---|
| Informatieobject  | Bronverwijzing | Verwijzing naar bron   |  | nvt   |  |  |   |   | nvt  | wasGeneratedBy  | nvt  | nvt  |   |
|   | Autorisatie  | In het kader van de autorisatie kan per object vastgelegd worden wie de verantwoordelijke bronhouder is. Dat kan bijvoorbeeld de aanduiding zijn welke gemeente verantwoordelijk is voor het bijhouden van het betreffende object. | Uit EMSO (in 3.4.3)  | nvt   | organisationName   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Autorisatie  | Vastleggen autorisatie gebruik   | Uit EMSO (in 3.4.3)  | nvt   | accessConstraints, useLimitation   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze van inwinning   | Uit EMSO (in 3.4.3)  | nvt   | LI_ProcessStep.description   |  | nvt   | nvt   | ObservingProcedure,Observer  | wasGeneratedBy  | sosa:usedProcedure   | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze (gebruikte bronnen) meest recente controle, moment controle en uitvoerder   | Uit EMSO (in 3.4.3)  | nvt   |  | DQM_SourceReference / DQ_TemporalQuality   | nvt   | nvt   | nvt  | wasInformedBy ?   | nvt  | nvt  |   |
|   | Kwaliteit  | Controledatum  | Uit EMSO (in 3.4.1)  | nvt   | date dateType=revision   | DQ_TemporalQuality   | nvt   | nvt   | nvt  | Activity.time   | nvt  | nvt  |   |
|   | Status   | InOnderzoek, InBewerking, maar ook ''onderzocht''  |  | nvt   | MD_DataIdentification.status   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Aantekenveld   | Uit EMSO (in 3.4.3)  | nvt   | LI_Source.description  | DQ_DescriptiveResult   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Levensfase   |  | nvt   |  |  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
| Gegevens  | Bronverwijzing | Verwijzing naar bron   |  | nvt   |  | DQM_SourceReference  |   |   | nvt  | wasGeneratedBy  | nvt  | nvt  |   |
|   | Bronverwijzing | Vastleggen van een reden van wijziging van een attribuutwaarde   | Uit EMSO 3.4.1   | nvt   |  | nvt  | nvt   | nvt   | nvt  | wasGeneratedBy  | nvt  | nvt  |   |
|   | Bronverwijzing | Onderbouwing van gegevens. Kan formeel zijn (in de vorm van een verwijzing naar vergunningen of besluiten), of technisch (verwijzing naar plaatsbepalingspunten, luchtfoto's, metingen of BIM-modellen).   | Uit EMSO 3.4.1 / 3.4.4   | nvt   |  | DQ_EvaluationMethod.referenceDoc   | nvt   | nvt   | Observation  | wasGeneratedBy  | sosa:isFeatureOfInterestOf sosa:Observation  | nvt  |   |
|   | Autorisatie  | Vastleggen bronhouder(s)   | Uit EMSO (in 3.4.1)  | nvt   | organisationName   | nvt  | nvt   | nvt   | nvt  | wasAttributedTo   | nvt  | nvt  |   |
|   | Autorisatie  | Vastleggen autorisatie gebruik   | Uit EMSO (in 3.4.1)  | nvt   | accessConstraints, useLimitation   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze van inwinning   | Uit EMSO (in 3.4.1)  | nvt   |  | DQ_PositionalAccuracy (bv: mean value of positional uncertainties) | nvt   | nvt   | ObservingProcedure,Observer  | wasGeneratedBy  | sosa:usedProcedure, sosa:madeBySensor  | nvt  |   |
|   |  | precisie/nauwkeurigheid  | Uit EMSO (in 3.4.1)  | nvt   | DQ_AbsoluteExternalPositionalAccuracy  | nvt  | nvt   | nvt   | SpatialSample/horizontalPositionalAccuracy |   | ssn-system:Accuracy  | nvt  |   |
|   | Kwaliteit  | Nauwkeurigheidsklasse /  een aanduiding voor de gemiddelde/mediane/minimale/maximale nauwkeurigheid  | Uit EMSO (in 3.4.4)  | nvt   |  | DQM_SourceReference / DQ_TemporalQuality   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze (gebruikte bronnen) meest recente controle, moment controle en uitvoerder   | Uit EMSO (in 3.4.1)  | nvt   |  | DQ_TemporalQuality   | nvt   | nvt   | nvt  | wasInformedBy ?   | nvt  | nvt  |   |
|   | Kwaliteit  | Controledatum  | Uit EMSO (in 3.4.1)  | nvt   |  | nvt  | nvt   | nvt   | nvt  | Activity.time   | nvt  | nvt  |   |
|   | Kwaliteit  | Uitvoerder van inwinning   | Uit EMSO (in 3.4.4)  | nvt   | CI_ResponsibleParty  | nvt  | nvt   | nvt   | nvt  | actedOnBehalfOf   | nvt  | nvt  |   |
|   | Kwaliteit  | Uitvoerder van controle  | Uit EMSO (in 3.4.4)  | nvt   | CI_ResponsibleParty  | nvt  | nvt   | nvt   | nvt  | actedOnBehalfOf   | nvt  | nvt  |   |
|   | Status   | InOnderzoek, InBewerking   | Uit EMSO (in 3.4.1)  | nvt   |  | DQ_DescriptiveResult   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Aantekenveld   |  | nvt   |  | DQ_TemporalQuality   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Historie   | Tijdlijn geldigheid  | Uit EMSO (in 3.5)  | nvt   | LI_ProcessStep.dateTime  | DQ_TemporalQuality   | nvt   | nvt   | phenomenonTime   |   | sosa:phenomenonTime  | nvt  |   |
|   | Historie   | Tijdlijn registratie   | Uit EMSO (in 3.5)  | nvt   |  |  |   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Mate van definitief zijn van geometrie   | Uit EMSO (in 5.3.1 en 6.2.1) | nvt   | status   | nvt  | status  | nvt   | nvt  |   | nvt  | nvt  |   |

##### Niveau dataset

| Van toepassing op   | Aspect   | Beschrijving   | In EMSO?   | In MIM?  | ISO 19157Geographic information —Data quality  | DCAT / Geo-DCAT-APData Catalog vocabulary   | ISO 19131 Data product specifications   | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary   |   |   |
|---------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|---|---|
| Objecttype  | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   |  |   |  |  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen bronhouder(s): Het is mogelijk dat in het informatiemodel wordt gespecificeerd dat er verschillende (categorieën) bronhouders zijn voor één objecttype. De bronhouder is de partij die objecten kan opvoeren en afvoeren. | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dcat:qualifiedAttribution  | SpecificationScope.level = featuretype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik: Als default zijn alle objecten in de SOR als open data voor iedereen beschikbaar. Uitzonderingen hierop worden in het informatiemodel expliciet benoemd.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | dct:accessRights - RightsStatement  | nvt   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Beschrijving populatie (volledigheid en actualiteit)   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "populatie''  | DQ_Completeness  | dct:description / dqv:QualityMeasurement / dct:accrualPeriodicity / | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription / Maintenance.maintenanceAndUpdateFrequency | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:populationCompletenessMetric  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of objecttype verplicht of optioneel is   | Uit EMSO (in 3.4.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_CompletenessOmission  | dct:description  / dqv:QualityMeasurement   | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of planstatus relevant is (relevant ontstaansmoment voor de SOR): Objecten worden in de SOR opgenomen op het moment dat deze volgens de voor het betreffende objecttype gedefinieerde criteria ontstaan   | Uit EMSO (in 2.4.4)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_DomainConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen actualiteitseis: gaat over binnen welke termijn (aantal dagen/maanden) na realisatie/ontstaan van een object, dit object beschikbaar moet zijn in de SOR  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria / Maintenance.maintenanceAndUpdateFrequency   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:currentness   |   |   |
|   | Kwaliteitseis  | Minimale activiteiten gericht op periodieke volledigheidscontrole  |  |  | Opstellen/uitvoeren van quality reports, conform ISO 19157 (?) |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| Kenmerk   | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen of een bronverwijzing (naar bv vergunningen, plaatsbepalingspunten, etc) aan de orde is voor dit kenmerk  | Uit EMSO 3.4.1 / 3.4.4 | In 2.8.2.16  | DQ_ConceptualConsistency, DQ_DomainConsistency   | nvt   | SpecificationScope.level = attributeType > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:complaince  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen van een reden van wijziging van een attribuutwaarde. Het is aan te bevelen om "reden van wijziging" vast te leggen aan de hand van te benoemen redenen.   | Uit EMSO 3.4.1   | nvt  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik:  wanneer deze afwijken van de autorisatie voor het objecttype. Het is bijvoorbeeld mogelijk dat in de SOR voor een bepaald attribuut een andere bronhouder (attribuuthouder) wordt aangewezen.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dct:accessRights   | SpecificationScope.level = attributetype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of attribuut verplicht of optioneel is  | Uit EMSO (in 3.4.1)  | In 2.8.2.16  | DQ_CompletenessOmission  | nvt   | SpecificationScope.level = attributetype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig + betere definitie van kwaliteit | Kwaliteitseis  | Beschrijving minimale eisen aan kwaliteit (nauwkeurigheid, actualiteit)  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''; In 2.8.2.23 | DQ_PositionalAccuracy, DQ_TemporalQuality  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:accuracy / dqv:currentness / dqv:compliance (te checken dat aan de eisen wordt voldaan) |   |   |
| *invulling nodig  | Kwaliteitseis  | Eisen aan de wijze van inwinning van het attribuut   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataCaptureAndProduction   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale inspanningsverplichtingen om atribuut op orde te houden   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale geometrietype die van toepassing is (2D, 2.5D, 3D)  | Uit EMSO (in 3.2.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_Completeness  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:precision / dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
|   |  |  |  | nvt  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model   |  |  |  |  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model (dataset)   | Domein   | Aanduiding van het functionele domein waartoe het informatiemodel behoort.   |  | Uit 2.8.1.1 (verplicht)  | nvt  | dcat:keyword / dcat:theme   | DataProductSpecification.term   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Model type   | De beschrijving van de aard van het informatiemodel, hoe het geinterpreteerd moet worden. (conceptueel, logisch, technisch)  |  | Uit 2.8.1.2 (verplicht)  | nvt  | dct:description   | DataProductSpecification.overview   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Relatiekeuze type  | Aanduiding van een in MIM gedefinieerd alternatief voor een modelleringswijze, en welke keuze hierbij is gemaakt.  |  | Uit 2.8.1.3 (verplicht)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Versie MIM   | De versie van de MIM specificatie die gebruikt is om het informatiemodel in uit te drukken.  |  | Uit 2.8.1.4 (verplicht)  | nvt  | dct:conformsTo  | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Extensie MIM   | De aanduiding van een extensie op MIM.   |  | Uit 2.8.1.5 (optioneel)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
| Model (objecttype)  | Historie/Levensfase (Concreet) | Van elk object in de SOR wordt meta-informatie opgenomen over het ontstaansmoment en versie van het object   | Uit EMSO (in 2.5.4)  | In 2.8.2.10  | DQ_ConceptualConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = dataset > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Kwaliteitseis  | Definitie van objecttype (naam, definitie, begrip)   | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
| Model (kenmerk)   | Kwaliteitseis  | Definitie van attribuuttype  | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
|   | Indicatie softtyping   | Indicatie dat een attribuutsoort het objecttype waar het bijhoort classificeert in (sub)typen.   |  | Uit 2.8.2.15   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |

##### Overig

| Van toepassing op  | Aspect   | Beschrijving   | Herkomst   |
|--------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Kenmerk  | Kwaliteit (?)  | Dit kenmerk (of bepaalde waardes van een kenmerk) worden achterwege gelaten. Bv: een product met alleen objecten met status:gerealiseerd, omdat alleen dit boeiend is voor de gebruikers | Uit EMSO (in 1.4)   |
| Gegevens   | Invulling van inwinningsregel/afbakening | Voor netwerken: de geometrie zal zich moeten bevinden binnen de contouren van de bijbehorende reele objecten   | Uit EMSO (in 2.4.4) |   |
| Kenmerk (relatie)  | Invulling van kwaliteitseis  | Alle functionele ruimten hebben 2D geometrie, alle reële objecten en functionele gebouwobjecten hebben 2.5D, en enkele specifieke reële objecten hebben 3D (zie de lijst in comment)   | Uit EMSO (in 3.2.1) |
| Gegevens (of mogelijk Dataset) | Kwaliteitseis  | Iedere geometrie moet zijn voorzien van een verwijzing naar het coördinaatreferentiesysteem (RD-NAP) waarin de coördinaten van de geometrie zijn beschreven.   | Uit EMSO (in 3.2.2) |
| Informatieobject   | Inwinning  | Wat wordt wel/niet meegenomen als onderdeel van de geometrie van het object conform een objecttype   | Uit EMSO (in 3.2.3) |
| Dataset  | Kwaliteit  | Beschrijving van het soort informatieproduct dat wordt afgeleid (1:1 set gegevens, of bewerkte gegevens - generalisatie, transformatie, verrijking)  | Uit EMSO (1.4)  |
| Objecttype/kenmerk   | Kwaliteit  | Voor elk objecttype is vastgelegd welke levensfasen in de vastlegging van een object worden onderscheiden.   | Uit EMSO (in 2.4.4) |