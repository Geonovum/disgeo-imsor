## Metadata

Zie 
- https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/17-11-2020-expertgroepvergadering.pdf
- https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/1-12-2020-expertgroepvergadering.pdf
- de uitwerkingen in https://github.com/Geonovum/disgeo-imsor/tree/master/issues/60-metadata.
- slides metadata op attribuutniveau https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/04-03-2021-7e-expertgroepvergadering.pdf
- evt slides https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/11-02-2021-expertgroepvergadering.pdf
- https://github.com/Geonovum/disgeo-imsor/discussions/50 - definitie metadata in modelleerprincipes

### Algemeen

#### Metadata standaarden

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

Zie ook de [editor's draft](https://w3c.github.io/sdw/bp/).

**ISO 25012 Data Quality Model**

Deze standaard specificeert een generiek model ten behoeve van de evaluatie van data kwaliteit - het gaat hierbij om gestructureerde data in computer systemen. De standaard focust zich dus op het beschrijven van 15 kwaliteitsdimensies die relevant kunnen zijn voor de kwaliteitscontrole van een data product. Een dimensie kan meerdere zogenaamde kwaliteitsattributen bevatten - deze attributen kunnen worden gebruikt om meetbare eisen mee uit te drukken. De dimensies worden gegroepeerd in twee categorieën: dimensies voor de inherente data kwaliteit en dimensies voor systeem-afhankelijke data kwaliteit. De inherente data kwaliteit zegt iets over de mate waarin de data zelf aan de gestelde/impliciete behoeftes voldoet. Systeem-afhankelijke data kwaliteit zegt iets over de mate waarin data kwaliteit kan worden bereikt en behouden binnen een computer system - het gaat hierbij vooral om procesgegevens en afhankelijkheden vanuit gebruikte hardware en software.

**Raamwerk Gegevenskwaliteit (NORA)**

Het [Raamwerk Gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit#%22) van de Nederlandse Overheid Referentie Architectuur (NORA) kwam tot stand op basis van de verzamelde kennis omtrent [gegevensmanagement](https://www.noraonline.nl/wiki/Gegevensmanagement). Het raamwerk richt zich op het definieren van een aantal dimensies voor inherente data kwaliteit. Deze dimensies worden verder uitgewerkt in 32 kwaliteitsattributen met voorbeelden. Tevens wordt alles beschreven aan de hand van een begrippenlijst. Het raamwerk maakt gebruik van de in ISO 25012 benoemde kwaliteitsdimensies en legt in sommige gevallen ook de link met een aantal geo-specifieke dimensies van ISO 19157. Deze vergelijking is echter incompleet. 

#### Metamodellen - een analyse en vergelijking

**Analyse en vergelijking van de metamodellen van MIM 1.1, NEN3610:2020 en NTA8035**

[MIM 1.1](https://docs.geostandaarden.nl/mim/mim/) en NEN3610 (de nieuwe versie die nu, in 2020 in ontwikkeling is) zijn voor het informatiemodel van de Samenhangende Objectregistratie (SOR) uitgangspunten waar we ons aan moeten houden. NTA8035 moeten we zo veel als mogelijk volgen. Daarom is het nodig om deze drie standaarden met elkaar te vergelijken.

Waar er verschillen zijn, die voor ons bij het modelleren binnen DisGeo problemen of onduidelijkheden opleveren, maken we (zoveel mogelijk in overleg met vertegenwoordigers van MIM/NEN3610/NTA8035) beargumenteerde keuzes over hoe hier mee om te gaan in het IMSOR. Deze keuzes worden uiteindelijk opgenomen in onze [modelleerprincipes](https://geonovum.github.io/disgeo-imsor/modelleerprincipes). 

Een aantal verschillen die we na een quick-scan geconstateerd hebben:

- MIM maakt onderscheid tussen (abstracte) concepten enerzijds en klassen van dingen anderszijds, terwijl NTA dat niet doet. We kunnen niet SKOS toepassen zoals NTA dat doet.
- NTA heeft een toplevel model, MIM niet.
- Bij NEN lijkt een fysiek object te worden gelijkgesteld met zijn geometrische representatie, bij NTA niet.

Als eerste stap hebben we de gebruikte terminologie in de drie standaarden vergeleken. Het resultaat van deze vergelijking volgt hieronder. 

##### Vergelijking van terminologie

De volgende afkortingen worden gebruikt:

* **N** = niet gebruikt
* **Z** = gebruikt zonder duidelijke definitie

**Werkwijze**

De terminologie van de drie standaarden wordt hieronder vergeleken. Daarbij is een opdeling gemaakt in

* [Terminologie van concepten en objecten](#terminologie-van-concepten-en-objecten)
* [Terminologie van kenmerken](#terminologie-van-kenmerken)
* [Terminologie van klasses, typen en verzamelingen](#terminologie-van-klasses-typen-en-verzamelingen)
* [Terminologie van gegevens en modellen](#terminologie-van-gegevens-en-modellen)


###### Terminologie van concepten en objecten

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| term | **Z** | **Z** | fysieke tekenreeks die wordt gebruikt om een concept of individueel object te duiden in één of meerdere talen                | |
| begrip | **Z** | **N** | De gedachte aan iets uit de werkelijkheid           | |
| concept | **Z** | **Z**<br>- een concept wordt benoemd door een term en krijgt betekenis door middel van een definitie<br>- de betekenis van een concept overlapt niet met andere concepten. Als er meerdere termen zijn voor een concept dan worden die als synoniemen opgenomen.<br>- in een sectormodel kunnen inwinningsregels om de inwinning van de locatie van een concept te definieren als extra informatie worden opgenomen | Een concept is min of meer synoniem met de term ‘begrip’. Het betreft de mentale voorstelling van ‘iets uit de werkelijkheid’.<br>[...] Belangrijk kenmerk van een Concept is dat het kan worden geïnstantieerd. Dat betekent dat er een classificatierelatie moet kunnen bestaan tussen een Individu en een Concept. | |
| object | Een ding, een tastbaar iets, in de werkelijkheid, zoals daarnaar gekeken wordt vanuit een bepaald domein. | Een fenomeen in de werkelijkheid. | **Z**<br>- Een eigennaam verwijst naar een (concept van) een individueel object | - in NTA8035 lijkt _object_ een synoniem met _ding_ en _begrip_ en _concept_. MIM lijkt aan deze termen verschillende definities te koppelen. |
| geo-object | **N** | abstractie van een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak)<br><br>[...] koppeling van geo-informatie maakt van een object een geo-object | **N** | - volgens NEN3610:2020 is een object alleen een geo-object als er geoinformatie aan "gekoppeld" is. Een gebouw waar voor geen geo-informatie bestaat is dus geen geo-object. |
| reëel object | **N** | _Geo-object_ waarvan het fenomeen in de werkelijkheid tastbaar, zichtbaar en begrensd aanwezig is | **N**<br>Maar er bestaat geen enkel ding waarvan men zonder context betekenisvol kan zeggen: “Kijk, dit is het gebouw.” Men kan alleen maar een reëel exemplaar aanwijzen en daarvan zeggen: “Kijk, dit is een gebouw”, wat eigenlijk wil zeggen: “Kijk, dit is een voorbeeld van een gebouw.” | - fysiek en reëel lijken synoniemen van elkaar|
| fysiek object | **N**<br>-Definitie object [...] Het gaat niet alleen om fysiek herkenbare objecten zoals auto’s, gebouwen en mensen [...] | Een fysiek object deelt de ruimte fysiek op en sluit daarmee andere fysieke objecten uit op die locatie: de ruimtelijke manifestatie is exclusief. Fysieke objecten zijn tastbaar en worden gekenmerkt door hun fysiek voorkomen doormiddelen van materialen en of constructie. | Een [fysiek object] is iets dat bestaat of zou kunnen bestaan in ruimte en tijd, een manifestatie en een afbakening van materie en/of energie vormt en waarneembaar is door de zintuigen. Een fysiek object kan activiteiten uitvoeren en kan ook worden getransformeerd door activiteiten.<br><br>[...] Een zelfde fysiek object kan zowel _virtueel_ bestaan, bijvoorbeeld op een tekening of in de vorm van een digitaal model, en in de werkelijke wereld (geconstrueerd en in gebruik). Het betreft hier de verschillende _levenscycli_ waarin een object kan verkeren. | - onduidelijk wat er in de NTA8035 bescrhijving wordt bedoeld met _virtueel_. |
| virtueel object | Definitie object [...] Het gaat niet alleen om fysiek herkenbare objecten zoals auto’s, gebouwen en mensen, ook om zogenaamde virtuele objecten waarover binnen het domein door betrokkenen gecommuniceerd wordt zoals kadastrale percelen, (maatschappelijke) activiteiten en processen. | Geo-object waarvan geen tastbaar, zichtbaar en begrensd fenomeen in de werkelijkheid aanwezig is, maar die slechts in abstracte en/of geregistreerde vorm bestaat. | **N** | - definitie van virtueel object uit MIM en NEN3610:2020 lijkt overeen te komen met de definitie van immaterieel object in NTA8035 |
| immaterieel object | **N** | **N** | De voorbeelden van het Catshuis en het begrip ‘gebouw’ suggereren dat het bij ‘dingen’ altijd om fysieke en materiële objecten zou gaan. Dat is echter niet zo.<br>De werkelijkheid bestaat immers uit meer zaken dan alleen fysieke objecten. Ook activiteiten en immateriële zaken horen daartoe.<br>Pinkpop bijvoorbeeld is geen fysiek object maar een evenement. Hetzelfde geldt voor Koningsdag. Ook dit is een evenement. Op kleinere schaal geldt dat voor ‘het bakken van een pizza’ en het ‘kappen van een boom’. Dit zullen we niet zo snel evenementen noemen en eerder activiteiten. Maar dat is slechts een schaalverschil, geen wezenlijk verschil. Het is als het verschil tussen stad en dorp.<br>Ook hier speelt het onderscheid tussen individuen en typen. Koningsdag 2019 is immers niet hetzelfde als Koningsdag 2018 en Koningsdag 2017. Dit zijn individuele evenementen die allemaal instanties van het type Koningsdag zijn.<br>Ook hier kunnen subklassen en superklassen worden gevormd. Koningsdag, Koninginnedag, Bevrijdingsdag, 1e Paasdag, enz. zijn allemaal subtypen van Feestdag.<br>‘Dingen in de werkelijkheid’ kunnen ook immaterieel zijn.<br><br>VOORBEELD Een kadastraal perceel is weliswaar een ruimtelijk gebied, maar het bezit geen materiële kenmerken. Het is een gebied waarop één of meer zakelijke rechten rusten. Een zakelijk recht (vruchtgebruik, hypotheek, enz.) is echter immaterieel.<br><br>Een topografisch perceel als grasland is daarentegen materieel. Het kenmerk waardoor het een ruimtelijke eenheid is (gras), is immers een materieel iets. | |
| functioneel object | **N** | Object met een specifieke functie<br><br>Een functie wordt gerealiseerd door een ruimte en/of door (delen van) reële objecten. In één zelfde ruimte kunnen meerdere functies gerealiseerd worden. Functie-objecten sluiten elkaar dus niet uit. In een 2d representatie leidt dat tot overlappende vlakken.| **N** | - de NTA noemt wel functioneel fysiek object, maar dat gaat over functies van een fysiek object. |
| informatieobject | **Z** | Een informatieobject kan een _geo-object_ zijn of een object waarbij geo-informatie afwezig of niet van belang is (in dit schema met niet-geo-object aangeduid). Deze norm is alleen normatief voor _geo-objecten_.<br><br> Het toepassingsgebied beperkt zich tot informatieobjecten met informatie over een directe of indirecte locatie ten opzichte van de aarde (geo-informatie).<br> | Een [informatieobject] is een op zichzelf staand geheel van gegevens met een eigen identiteit. [...] Een informatie object betreft een abstract concept dat met behulp van een fysiek object (als ‘drager’) een door zintuigen waarneembare vorm kan aannemen. | - In MIM en NEN3610:2020 lijkt geen onderscheid gemaakt te worden tussen _informatieobject_ en _object_, hoewel dat niet uit de definitie van object blijkt in deze documenten. NTA8035 maakt wel onderscheid tussen _fysieke objecten_ en _informatieobjecten_. |
| individu | **N** | **N** | Onder een [individu] verstaan we een begrip dat overeenkomt met ‘iets aanwijsbaars (of potentieel aanwijsbaars) uit de werkelijkheid’. | - met _individu_ lijkt in NTA8035 hetzelfde bedoeld te worden als _object_ in MIM en NEN3610:2020 |
| individueel ding | **N** | **N** | **Z**<br>- In Den Haag staat het Catshuis. Dit is wat we een ‘individueel ding’ noemen. Van dit Catshuis kunnen mensen zich een voorstelling vormen. Zo’n mentale voorstelling wordt een begrip of concept genoemd. Sommige mensen hebben het Catshuis zelf gezien. Anderen kennen het alleen van een foto. Weer anderen kennen het alleen van naam. Hun voorstellingen van het Catshuis zullen dus onderling verschillen. | - synoniem van individu en ding in NTA8035 |
| fenomeen | **N** | **Z**<br/> de term 'fenomeen' wordt gebruikt om geo-object te definieren als fenomeen in de werkelijkheid. | **N** | Er wordt in NEN3610 ook gesproken van de ruimtelijke dimensies van fenomenen in de werkelijkheid. Maar kijkend naar de taxonomie kunnen geo-objecten, en dus fenomenen, reële objecten of virtuele objecten zijn. Dit klinkt tegenstrijdig, een virtueel object met ruimtelijke dimensies in de werkelijkheid.

###### Terminologie van kenmerken

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| kenmerk | Z | een eigenschap van een object (in de werkelijkheid) | Z | een NEN3610 kenmerk is dus een eigenschap van een object in de werkelijkheid. In de NTA8035 en in MIM is kenmerk een synoniem voor eigenschap (het wordt op een brede manier gebruikt) |
| eigenschap | Z | Z | Z | in de NEN3610 worden kenmerken, associaties en gedrag gezien als specifieke soorten eigenschappen |
| predicaat | N | Z (in NEN3610-LD) | Z | Staat informeel bekend als 'Property', en wordt gebruikt om een (binaire) relatie aan te geven tussen een subject en een object. In de MIM wordt de term 'predicate' gebruikt in linked data voorbeelden, maar de betekenis ervan wordt verder niet toegelicht |
| attribuut	| Kenmerken van objecten in het informatiemodel zijn attribuutsoorten. Een attribuutsoort is de typering van gelijksoortige gegevens die voor een objecttype van toepassing is. | kenmerk of gegeven van een geo-object, […] typering van gelijksoortige gegevens toegepast bij een geo-object. | Beschrijven intrinsieke kenmerken, en kunnen worden onderverdeeld in: annotaties, door mensen te interpreteren ‘identifiers’, namen, labels, enz., en door computers te interpreteren aspecten. Een attribuut lijkt dus op een relatie maar verbindt nu een individu met een waarde in plaats van een referentie naar een ander individu. | een NEN3610 attribuut is dus een eigenschap van een (geo)object in een model van de werkelijkheid |
| annotatie	| N	| Z | Een specifiek type attribuut, kan worden gebruikt om een willekeurige ‘vrije tekst’ te koppelen aan een bepaalde instantie van een meta-concept. Stel dat men wil zeggen dat over het concept Tuibrug meer informatie is te vinden in een bepaalde publicatie, op een bepaalde internetpagina, of dat men wil zeggen dat de definitie afkomstig is van T. Gerritsen. Al deze informatie kan in de vorm van een Annotatie aan het concept Tuibrug worden gerelateerd. Annotaties zijn bestemd voor menselijke interpretatie. | |
| essentieel attribuut | N | N […] wanneer je een klasse modelleert, je alleen die eigenschappen aan een klasse toevoegt die direct tot deze dingen behoren, ofwel essentiele eigenschappen zijn. (in NEN3610-LD) | een essentiële en oorspronkelijke eigenschap van een concept of individu die niet mag ontbreken, zonder dat het ding ophoudt te zijn wat het is. Dit zou dan een definiërende eigenschap kunnen worden genoemd. Aanvullend bestaan er ook specificerende eigenschappen. | |	
| waarde | Z | Z | Een Waarde is een instantie van een bepaald Waardetype en wordt erdoor geclassificeerd. Een belangrijk verschil tussen een Concept en een Waardetype is dat een (instantie van een) Waardetype geen Toestand kan hebben (of beter: dat de Toestand niet kan veranderen in de tijd), en bij een Concept wel. Een Waardetype is dus een ‘Toestandsloos’ Concept. | |
| relatie |	Verbanden met betekenis, die gelegd zijn tussen modelelementen van het type objecttype naar het type objecttype, of van een gegevensgroeptype naar een objecttype. Wanneer een relatie gebruikt wordt om objecten aan elkaar te verbinden, zonder dat er eigenschappen over deze relatie worden vastgelegd, dan betreft dit de MIM-metaclass «Relatiesoort». | Een relatie is een associatie tussen twee of meer geo-objecttypen | In de wiskunde beschrijft een relatie het verband of de betrekking tussen objecten. Elke relatie is gedefinieerd over een aantal verzamelingen en verbindt, uit deze verzamelingen, de elementen die met elkaar in het bedoelde verband staan. Het aantal verzamelingen waarover de relatie is gedefinieerd, heet de plaatsigheid of ariteit van de relatie. De meest voorkomende relatie is de tweeplaatsige (binaire) relatie, die objecten in tweetallen aan elkaar koppelt. Het CMM beschouwd alleen binaire relaties.	| |
| groepering | Z | N | Deze relatie kan worden gebruikt om aan te kunnen geven welke Concepten, Waardetypen en andere gegevenstypen bij een Gegevensstructuur horen. | |
| classificatie | N	| Z | Classificatie wordt gebruikt om de betrekking tussen een Individu en een Concept aan te geven. De classificatierelatie wordt ook gebruikt om de links naar het metamodel te maken, en om de relatie tussen een Waarde en een Waardetype aan te geven.	| |
| aggregatie | Z<br/> Dit geeft aan dat het objecttype die doel is van de relatie een onderdeel is van het objecttype die de eigenaar is van de relatie | een associatie tussen een samengestelde klasse en een componentklasse (maakt deel uit van). Objecten van de deelklasse kunnen worden toegevoegd of verwijderd zonder dat de geheelklasse ophoudt te bestaan. | N | |
| specialisatie	| Een objecttype dat een generalisatie-relatie heeft naar een al dan niet abstract objecttype noemen we een specialisatie (van dat objecttype). | het verfijnen van een klasse (de zgn. superklasse) in onder- of subklassen. |	Z<br/> (Inverse van Generalisatie) "‘Zoogdier’ wordt dan een generalisatie of supertype van ‘hond’ genoemd. Andersom wordt ‘hond’ een specialisatie of subtype van ‘zoogdier’ genoemd." | |
| generalisatie | De typering van het hiërarchische verband tussen een meer generiek en een meer specifiek modelelement van hetzelfde soort, waarbij het meer specifieke modelelement eigenschappen van het meer generieke modelelement overerft. Dit verband is alleen gedefinieerd voor objecttypen en datatypen. Generalisatie tussen objecttypes: Een generalisatierelatie geeft aan dat bepaalde eigenschappen van een objecttype (vaak attribuutsoorten en/of relatiesoorten) ook gelden voor de gerelateerde objecttypen, én dat deze qua semantiek, structuur en syntax gelijk zijn. Generalisatie tussen datatypes: Het meer specifieke datatype brengt een verbijzondering aan in de vorm van een meer restrictieve definitie, of een meer restrictief patroon/formeel patroon. | N | Generalisatie is het terrein van subtypen (of subklassen) en supertypen (of superklassen). Generalisatierelaties kunnen niet alleen worden gedefinieerd tussen Concepten (zoals tussen ‘hond’ en ‘zoogdier’), maar ook tussen Attributen en Relaties. | Wezenlijk verschil: het wel of niet mogelijk zijn van generalisatie  tussen attributen en relaties. |	
| compositie | (Engels: composite): de eigenaar is volledig verantwoordelijk voor het beheer van het onderdeel. Als de eigenaar vervalt, dan vervallen automatisch ook de onderdelen mee. Het doel kan niet bestaan zonder de bron: het doel vervalt als de bron vervalt.	| een associatie die aangeeft dat een of meer klassen (componenten) onderdeel zijn van een andere klasse (compositieklasse), met als restrictie dat een component niet zelfstandig verder bestaat als de compositieklasse verdwijnt. | Compositie is het terrein van de deel-geheelrelaties. Merk op dat compositierelaties worden beschreven tussen Individuen, niet tussen Concepten. Het is een individuele tafel die bestaat uit een individueel tafelblad en vier individuele poten. Compositie-uitspraken die worden geformuleerd tussen Concepten, betekenen echter iets anders. Als er bijvoorbeeld wordt gezegd dat een tafel bestaat uit een tafelblad en drie of vier tafelpoten, dan betekent dat niet dat het begrip ‘tafel’ is opgebouwd uit het begrip ‘tafelblad’ en vier- of driemaal het begrip ‘tafelpoot’." | bij de MIM is compositie een 'aggregatietype' |
| karakterisatie | N | N | Dit zijn meta-relaties die gelden (relevant zijn) tussen een individu en een attribuutwaarde of een referentie naar een ander individu. Men kan bijvoorbeeld zeggen dat de Domtoren een hoogte heeft van 110 m. Hierbij wordt het individu ‘de Domtoren’ gekarakteriseerd door de waarde 110 m voor het attribuut hoogte. Deze karakterisatie zit bij een RDF-binding impliciet in de ‘triple’: een subject wordt gekarakteriseerd door een verzameling predicaat-objectparen. | |
| associatie | Z | relatie tussen twee klassen | Dit zijn ook relaties die worden beschreven tussen twee (verschillende) Individuen. De associatie-uitspraken die tussen Concepten worden geformuleerd, hebben een andere betekenis en een andere functie. Men kan bijvoorbeeld zeggen dat een Persoon één of meer Gebouwen kan beheren. Deze uitspraak legt een beperking op de mogelijke invullingen van de individuen die hieraan kunnen voldoen. Dit betekent bijvoorbeeld dat Jan een Persoon moet zijn (en bijvoorbeeld geen kanarie) en het Catshuis een Gebouw (en bijvoorbeeld geen IJsberg). Dit wordt dus geregeld via beperkingen. | |
| gegevensgroep | Een typering van een groep van gelijksoortige gegevens die voor een objecttype van toepassing is. Toelichting: Dit modelelement verzorgt de modelmatige aankoppeling van een gegevensgroeptype aan het objecttype waartoe een gegevensgroeptype onlosmakelijk behoort. De groep van gegevens is een kenmerk van een object. De gegevensgroep is een betekenisvol kenmerk van een objecttype. De gegevensgroep heeft altijd als type een gegevensgroeptype. | Een gevensgroeptype wordt gebruikt als de bij elkaar horende attributen een zelfstandig beheerde set aan gegevens betreft, het gegevensgroeptype. In tegenstelling tot het gestructureerd datatype horen de gegevens semantisch bij elkaar. Wat semantisch inhoud betreft zit een gegevensgroeptype dicht bij een objecttype, het zijn beide bij elkaar horende gegevens. Een gegevensgroep heeft echter geen identiteit en realiseert een eigenschap van een objecttype. | **N** | nader te bezien of het ontbreken van gegevensgroepen in de NTA problemen zou kunnen opleveren, als we gegevensgroepen in IMSOR zouden gebruiken. |


###### Terminologie van klasses, typen en verzamelingen

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| objecttype | De typering van een groep objecten die binnen een domein relevant zijn en als gelijksoortig worden beschouwd. | Z | Z | |	
| waardetype | Z | Type dat als waarde moet worden ingevuld (bij een attribuut) | Het begrip Waardetype moet in combinatie worden gezien met het begrip Waarde. Een Waarde verhoudt zich tot Waardetype zoals een Individu zich verhoudt tot Concept. Een Waarde is een instantie van een bepaald Waardetype en wordt erdoor geclassificeerd. | |	
| datatype	| Een beschrijving van de structuur waaraan een waarde, oftewel de data zelf, aan moet voldoen.	| specificatie van een waardedomein met operaties die zijn toegestaan op waarden binnen dit domein | Z | in de MIM wordt 'datatype' ook gedefinieerd aan de hand van de modelleerelementen die onder dit begrip vallen: primitief datatype, gestructureerd datatype, referentielijst, referentielijst element, etc. |

##### Terminologie van gegevens en modellen

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| gegeven | De betekenisvolle formulering van een waargenomen feit, waaraan een waarde kan worden toegekend. | De betekenisvolle formulering van een waargenomen feit, waaraan een waarde kan worden toegekend [MIM] | Gegevens zijn de digitale assets	| in de NTA8035 wordt onderscheid gemaakt in verschillende soorten gegevens: over aanwijsbare dingen in de werkelijkheid, gegevens gedefinieerd door gegevensstructuren (conceptuele modellen), of gegevens die zijn vastgelegd op een hoger niveau (meta model) |
| gegevensverzameling | Z | Z | Naast de gegevensstructuren zijn er gegevensverzamelingen (Engels: data sets), die individuele data bevatten volgens de gegevensstructuur. | hoewel de term niet is gedefinieerd in de NEN3610, wordt wel gezegd dat een 'registratie' een op nationaal niveau geidentificeerde en erkende gegevensverzameling is |
| gegevensmodel/gegevensstructuur | Z | Modellering van de werkelijkheid voor representatie in een digitale omgeving […], wordt opgesteld voor ICT-interoperabiliteit, voor gebruik door met name de ontwerpers, bouwers en beheerders van ICT-voorzieningen. | gedeelde abstracte weergave van (een deel van een) domein dat voor een specifiek doel wordt gebruikt | in de MIM wordt 'gegevensmodel' gebruikt als het gaat over logische of fysieke datamodellen. In de NEN3610 is 'gegevensmodel' een synoniem van 'logisch informatiemodel' en 'datamodel' - terwijl in de NTA8035 'datamodel' synoniem is voor 'gegevensstructuur', wat zij koppelen aan conceptuele modellen. |
| beperking	| Een constraint is een conditie of een beperking, die over een of meerdere modelelementen uit het informatiemodel geldt. | Z | Concepten kunnen Beperkingen hebben die het aantal waarden of de waarden zélf beperken. Ook attributen en relaties kunnen beperkingen hebben met betrekking tot hun bron-, doelconcepten (in het geval van relaties) of waardetype (in het geval van attributen). Beperkingen kunnen worden onderverdeeld in definiërende beperkingen en specificerende beperkingen. De eerste zijn per definitie altijd waar/relevant. De tweede zijn waar/relevant met een specifiek doel voor ogen.	| in de NEN3610 wordt gesproken over constraints, waarmee de beperkingen en condities die gelden voor een objecttype kunnen worden omschreven (in natuurlijke taal of OCL) |
| afleiding	| Z	| N	| Er zijn Afleidingen die vertellen hoe nieuwe waarden voor attributen of referenties voor relaties kunnen worden afgeleid uit bestaande waarden/referenties. Door deze regels te formaliseren (om te zetten in computerverwerkbare code) wordt dit onderdeel van een kennissysteem en kan ook de computer deze afleiding maken. | in de MIM wordt gesproken over afleiding bij het metagegeven 'indicatie afleidbaar':  Aanduiding dat gegeven afleidbaar is uit andere attribuut- en/of relatiesoorten. |
| Universe of Discourse	| het beschouwde domein	| beeld van de echte of hypothetische wereld dat binnen de context van een domein alles van belang omvat | N | |
| ontologie	| Met een ontologie bedoelen we een model waarin we betekenis geven aan de termen die in een specifiek domein worden gebruikt. In geval van het MIM metamodel betreft dit het MIM-domein zelf. We geven betekenis aan de termen door enerzijds een voor mensen leesbare definitie te koppelen aan een term (de "zachte semantiek") en anderzijds door relaties te leggen naar eerder gedefinieerde termen of relaties tussen termen in onze ontologie (de "harde semantiek"). | (definitie van NEN3610-LD profiel) een kennismodel van een specifiek kennisdomein in de werkelijkheid. Bevat een set regels, die gebruikt kunnen worden om extra kennis af te leiden uit gelinkte data. Met behulp van zo'n model kunnen computers begrijpen wat de data betekent en redeneren over data. | gedeelde, abstracte weergave van (een deel van) de werkelijkheid dat voor een bepaald doel moet worden weergegeven	| |
| subklasse	| Z	| Z | Z een subklasse is meestal een superklasse plus een of meer definiërende beperkingen die betrekking hebben op attributen en/of relaties die nog niet beperkt zijn voor de superklasse. | |
| subeigenschap	| N	| Z (in NEN3610-LD) | N | |	
| levenscyclus / levenscycli | Z | N | Z Gegevens betreffen de gehele levenscyclus van assets: programma van eisen, ontwerp, uitvoering, beheer en onderhoud en sloop, vervanging en renovatie, hergebruik (circulair). Ook kan het gaan om stadia in de levenscyclus van een netwerk of portfolio van assets als wegen en gebouwen, met hun systemen, bouwdelen, componenten en materialen. | |



### Metadata voor de SOR 

#### Metadata framework voor de SOR

##### Doel metadata in de SOR

- Gebruikers extra informatie geven
- Bronhouders extra informatie geven
- De traceerbaarheid van de informatie verhogen

##### Terminologie
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

##### Metadata op informatiemodel-niveau

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

##### Kwaliteitseisen

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

#### Metadata op object- of attribuutniveau
Op dit niveau gaat het specifiek om metadata over informatieobjecten en hun gegevens:
- Bronverwijzingen: vastleggen van de reden van wijziging van een attribuutwaarde, of onderbouwing van gegevens.
- Gerealiseerde kwaliteit: beschrijving van de daadwerkelijke nauwkeurigheid(sklasse), controlegegevens, etc. Dit is niet alleen belangrijk voor geometrie of andere kwantitatieve gegevens zoals oppervlakte, maar voor alle gegevens.

Standaarden die van toepassing zijn: 
- ISO 19156 Observations & Measurements
- SOSA/SSN
- PROV-O

Voor voorbeelden hiervan, zie [de uitgewerkte 'IMBoom' casus](https://geonovum.github.io/disgeo-imsor/casus/imboom)
Note: De vastlegging van metadata op attribuutniveau in het informatiemodel wordt nog besproken, zie [issue 14](https://github.com/Geonovum/disgeo-imsor/issues/14) voor meer context.

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

###### Voorbeeld

**Objecttype Gebouw**

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

**Objecttype Straatmeubilair**

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

###### Voorbeeld

**Objecttype Gebouw - attribuutsoort Aard**

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

##### Metadata op dataset-niveau
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

**NOOT** 
Metadata op dataset-niveau gaat vanuit de context van de SOR in feite over informatieproducten. Deze zijn op zich voor de informatiemodellering buiten scope, maar in het metadata framework nemen we dit niveau wel mee, zodat duidelijk wordt welke metadata moet worden opgenomen bij het publiceren van informatieproducten.



#### inventarisatie metadata voor de SOR


##### Niveaus 

|Niveau  | aandachtsgebied  | ISO 19115, Nederlands profiel op ISO 19115 | MIM   | ISO 19157Geographic information —Data quality | DCAT / Geo-DCAT-AP (DCAT 2)Data Catalog vocabulary | ISO 19131 Data product specifications | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary | SDW-BP 13 en 14Spatial data on the web best practices | ISO 191110 |
|-----------------------|-----------------------------------------------------------------------------------|--------------------------------------------|-----------|-----------------------------------------------|----------------------------------------------------|---------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------|-------------------------------------------------------|------------|
| Datasetniveau   | Het gaat om metadata over datasets en dataset series.   | ja   | nee   | ja  | ja   | ja  | nee  | ja  | nee  | ja   | ja  |  |
| Informatiemodelniveau | Het gaat om metadata over objecttypes en kenmerken (attribuutsoorten en relaties) | nee  | ja  | nee   | nee  | ja  | nee  | nee   | nee  | nee  | nee   |  |
| Instantieniveau   | Het gaat om metadata over informatieobjecten en hun gegevens  | nee  | nee   | ja  | nee  | nee   | ja   | ja  | ja   | nee  | nee   |  |
|   |   |  |   |   |  |   |  |   |  |  |   |  |
|   |   |  |   |   |  |   |  |   |  |  |   |  |
|   |   |  | Gabriella | Gabriella   | Gabriella  |   | Linda  |   | Linda  |  |   |  |

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

##### Niveau instantie 

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
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |

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

| Van toepassing op  | Aspect   | Beschrijving   | In EMSOR?   | In MIM? |
|--------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------|
| Kenmerk  | Kwaliteit (?)  | Dit kenmerk (of bepaalde waardes van een kenmerk) worden achterwege gelaten. Bv: een product met alleen objecten met status:gerealiseerd, omdat alleen dit boeiend is voor de gebruikers | Uit EMSO (in 1.4)   |   |
| Gegevens   | Invulling van inwinningsregel/afbakening | Voor netwerken: de geometrie zal zich moeten bevinden binnen de contouren van de bijbehorende reele objecten   | Uit EMSO (in 2.4.4) |   |
| Kenmerk (relatie)  | Invulling van kwaliteitseis  | Alle functionele ruimten hebben 2D geometrie, alle reële objecten en functionele gebouwobjecten hebben 2.5D, en enkele specifieke reële objecten hebben 3D (zie de lijst in comment)   | Uit EMSO (in 3.2.1) |   |
| Gegevens (of mogelijk Dataset) | Kwaliteitseis  | Iedere geometrie moet zijn voorzien van een verwijzing naar het coördinaatreferentiesysteem (RD-NAP) waarin de coördinaten van de geometrie zijn beschreven.   | Uit EMSO (in 3.2.2) |   |
| Informatieobject   | Inwinning  | Wat wordt wel/niet meegenomen als onderdeel van de geometrie van het object conform een objecttype   | Uit EMSO (in 3.2.3) |   |
| Dataset  | Kwaliteit  | Beschrijving van het soort informatieproduct dat wordt afgeleid (1:1 set gegevens, of bewerkte gegevens - generalisatie, transformatie, verrijking)  | Uit EMSO (1.4)  |   |
| Objecttype/kenmerk   | Kwaliteit  | Voor elk objecttype is vastgelegd welke levensfasen in de vastlegging van een object worden onderscheiden.   | Uit EMSO (in 2.4.4) |   |