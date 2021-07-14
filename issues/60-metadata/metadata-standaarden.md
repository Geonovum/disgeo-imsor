# Nederlands profiel op ISO 19115 Geographic information - Metadata
ISO 19115 is een zeer uitgebreide standaard voor dataset metadata specifiek voor geodata. Ook verplicht in INSPIRE context; er is een INSPIRE profiel en het [Nederlands profiel op ISO 19115](https://docs.geostandaarden.nl/md/mdprofiel-iso19115/) sluit daar weer op aan. We kunnen dus het NL profiel bekijken en hoeven dan niet de ISO standaard en INSPIRE guideline ook te lezen. 
Er is een XML implementatie van deze standaard. Er is ook een Geo-DCAT-AP mapping.

# ISO 19157 Geographic information —Data quality
Standaard die de datakwaliteitseigenschappen van geo-data beschrijft, uitgaande van datasetniveau maar je zou de beschreven aspecten ook wel op informatieobjecten kunnen toepassen. De kwaliteitseigenschappen zijn compleetheid, logische consistentie, positionele nauwkeurigheid, thematische nauwkeurigheid, en temporele kwaliteit. Enkele van deze kwaliteitsaspecten zijn in het Nederlands profiel op ISO 19115 opgenomen. 

# MIM Metamodel voor informatiemodellering
In het [MIM](https://docs.geostandaarden.nl/mim/mim/) staan metadata aspecten voor de elementen uit informatiemodellen gespecificeerd. 

# ISO 19110 Geographic information - Methodology for feature cataloguing
Deze standaard geeft een framework voor het beschrijven van de soorten geo-objecten in een geo-dataset. Een set beschrijvingen vormt samen een catalogus, waarin gebruikers informatie kunnen vinden over alle geo-objecttypen in een dataset. De catalogus bevat in ieder geval de namen, definities, en kenmerken van alle geo-objecttypen.

# ISO 19131 Geographic information - Data product specifications
Deze standaard specificeert een soort template voor gegevenscatalogi / data specificaties, die beschrijven wat er in een informatiemodel gespecificeerd is en aanvullende eisen (in tekst) kunnen beschrijven. Deze standaard zegt dus ook iets over welke aspecten je per informatie-element beschrijft. Bijvoorbeeld de data specifications van de INSPIRE thema's zijn hierop gebaseerd. Bij Geonovum wordt ISO 19131 ook gehanteerd bij sommige standaarden, echter zijn er vaak vanuit de opdrachtgever ook nog eisen aan de catalogus (bv vanuit de Basisregistratie stelselcatalogus) en wordt het uiteindelijke product toch anders. Heeft dependency op ISO 19115, ISO 19157, ISO 19108, ISO 19103. 

# DCAT Data Catalog vocabulary
[DCAT](https://www.w3.org/TR/vocab-dcat-2/) is een W3C standaard; het definieert een RDF vocabulaire voor dataset metadata. Beschrijft de belangrijkste metadata aspecten van datasets, dataset series en services, bedoeld voor de vindbaarheid van data en het beoordelen van de geschiktheid voor de beoogde toepassing. Dit is een algemene standaard, niet specifiek voor geodata. Er zijn wel enkele aspecten in DCAT gedefinieerd die specifiek voor geodata bedoeld zijn: spatial coverage en spatial resolution. We kijken naar de 2.0 versie. 

# Geo-DCAT-AP A geospatial extension for the DCAT application profile for data portals in Europe
[Geo-DCAT-AP](https://semiceu.github.io/GeoDCAT-AP/releases/) is een op Europees niveau afgesproken extensie op DCAT 2.0 die extra geo-aspecten toevoegt aan het DCAT profiel voor Europese dataportalen. Het gaat met name om de aspecten die in ISO 19115 zitten (in de Core daarvan) maar in DCAT ontbreken. Het is dus mogelijk om ISO 19115 te mappen naar Geo-DCAT-AP en deze mapping staat beschreven in een appendix.

# ISO 19156 O&M Observations & Measurements
[O&M](https://www.ogc.org/standards/om) is een conceptueel model dat specificeert hoe je metadata van metingen kunt beschrijven. De activiteit van het meten staat centraal; bij elke meting kun je de methode, verschillende temporele eigenschappen, gebruikte apparaat, enzovoort opnemen en dit relateren aan het object waar de meting over gaat (waar een eigenschap van geobserveerd werd). En daarnaast uiteraard het resultaat. Dit zou een modelleerpatroon kunnen zijn voor bepaalde eigenschappen van SOR objecten, als die het resultaat zijn van een meting of waarneming. 

O&M 2.0 is zowel een ISO als een OGC standaard. Er is een [onofficiële werkversie van O&M 3.0](https://github.com/opengeospatial/om-swg/blob/master/oms-abstract-spec/ogc-as-topic20/20-082r2_OGC_Abstract_Specification_Topic_20_-_Observations_and_measurements.docx) beschikbaar.

# SOSA/SSN Sensor network ontology
[SSN](https://www.w3.org/TR/vocab-ssn/) is een bij W3C en OGC gestandaardiseerde RDF vocabulaire die O&M implementeert maar in aanvulling op O&M ook sensoren en actuatoren afdekt. Het bevat een eenvoudige core, SOSA (Sensor, Observation, Sample and Actuator) en een uitgebreider deel. Het geheel wordt SSN genoemd. Is nog gebaseerd op O&M 2.0; O&M 3.0 zal meer op SSN afgestemd zijn. De SSN specificatie beschrijft ook een mapping met PROV-O, Dolce-ultralight en OBOE.

# PROV-O Provenance vocabulary
[PROV-O](https://www.w3.org/TR/prov-o/) is een bij W3C gestandaardiseerde RDF vocabulaire voor het beschrijven van 'provenance', de oorsprong van data. Het gaat dan om ontstaansaspecten van de data, zoals hoe de data geproduceerd is, wanneer, door wie, enz. Dit is geen geo-data specifieke standaard. 

# DQV Data quality vocabulary
[DQV](https://www.w3.org/TR/vocab-dqv/) is een RDF vocabulaire voor het beschrijven van datakwaliteit. Komt voort uit het werk van de Data on the web Best Practices, dus is bij de W3C ontwikkeld, maar is geen officiële standaard. Het is ook geen geo-data specifieke standaard. De vocabulaire geeft elementen voor het beschrijven van kwaliteitsaspecten. Je kunt zelf definieren welke metrics dit zijn en hoe je de kwaliteit daarvan uitdrukt. Ook bevat het elementen om aan te geven aan welke standaard of policy de data voldoet, om te linken naar certificaten, om kwaliteitsfeedback op te nemen, etc.

# SDW-BP 13 en 14 Spatial data on the web best practices
Twee van de [Spatial data on the Web best practices](https://www.w3.org/TR/sdw-bp/) gaan over metadata: [13 Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata) en [14 Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#desc-accuracy). Best practice 13 beveelt aan om in ieder geval de spatial extent, coverage en representation op te nemen en noemt daarnaast nog een aantal andere aspecten. Best practice 14 geeft handvaten voor het beschrijven van positionele nauwkeurigheid. Er wordt verwezen naar ISO 19115, DCAT, Geo-DCAT-AP, en DQV.

Zie ook de [editor's draft](https://w3c.github.io/sdw/bp/).

