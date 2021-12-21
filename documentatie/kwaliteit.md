## Kwaliteit

Kwaliteit van gegevens wordt over het algemeen beschouwd als een soort metadata, maar omdat het een uitgebreid onderwerp is en belangrijk voor de SOR behandelen we het in een apart hoofdstuk. 

### Kwaliteitsaspecten

Kwaliteit is een relevant onderwerp in het kader van de SOR. Het gaat hierbij zowel om kwaliteits*eisen* als om de daadwerkelijke kwaliteit van gegevens, die als metadata bij die gegevens wordt opgenomen. 

<aside class="note">In het [[EMSO]] worden de termen *kwaliteitsnorm*, *normkwaliteit*, en *kwaliteitseis* door elkaar gebruikt. In de Architectuurvisie [[DiSGeo-Arch]] spreekt men ook wel van *kwaliteitsindicatoren*. In dit document hebben we het over *kwaliteitseis*. 

Voorbeeld van een kwaliteitseis: de vereiste actualiteit van gegevens in de SOR. Deze actualiteitseis wordt opgenomen op het niveau van het informatiemodel / de gegevenscatalogus.

Daarnaast is er *gerealiseerde* kwaliteit op het niveau van gegevens, ook wel de gegevenskwaliteit genoemd. 

Voorbeeld van gegevenskwaliteit: de positionele nauwkeurigheid van een bij een individueel object horende geometrie. Deze kwaliteitsinformatie wordt opgenomen bij de desbetreffende geometrie.

</aside>

Vanuit de Architectuurvisie wordt [het volgende gezegd](https://docs.geostandaarden.nl/disgeo/vv-al-arch-20210216/#gegevenskwaliteit) over gegevenskwaliteit:
- Het doel van de component Gegevenskwaliteit is om de afgesproken kwaliteitsindicatoren vast te leggen, te meten en monitoren wat de waarde van deze indicatoren is en zowel de indicatoren als de gemeten waarden beschikbaar te stellen voor bronhouders, afnemers en andere betrokkenen, zoals toezichthouders en beleidsverantwoordelijken.
- Met kwaliteitsindicatoren kan de algehele kwaliteit van de opgeslagen gegevens gemonitord worden. De opslag bevat naast de feitelijke gegevens ook proces- en metagegevens (zie opslag). Dit betekent dat de kwaliteitsindicatoren naast de kwaliteit van de gegevens zelf ook resultaten kunnen geven over bijvoorbeeld gemiddelde duur van verwerking door bronhouder (procesgegevens) of meta-gegevens van de gegevens zelf.

Het is mogelijk om informatie over gegevenskwaliteit op te nemen in metadata. Hiervoor is echter een concreet kwaliteitsraamwerk nodig, zoals beschreven in [[ISO-25012]]. Zo'n raamwerk bestaat uit kwaliteitsdimensies, indicatoren en meetfuncties. Een kwaliteitsdimensie is een aspect dat wordt gebruikt om indicatoren te categoriseren. Voorbeelden van kwaliteitsdimensies zijn: juistheid, nauwkeurigheid, compleetheid en consistentie. Een kwaliteitsdimensie kan worden onderverdeeld in kwaliteitsattributen (indicatoren) - deze zijn iets specifieker van aard. Voorbeelden van indicatoren voor de dimensie 'juistheid' zijn: classificatie juistheid, thematische juistheid, positionele juistheid. Om kwaliteit te beschrijven moeten de indicatoren meetbaar worden gemaakt. Hiervoor worden meetfuncties gespecificeerd. Voorbeelden van meetfuncties voor de indicator 'positionele juistheid' zijn: linear error probable (LEP), root mean square error (RMSE), circular standard deviation (CSE). Hoe je deze meetfuncties toepast in de context van een dataset wordt beschreven in kwaliteitseisen. Middels kwaliteitsmetingen kan worden nagegaan of aan een kwaliteitseis wordt voldaan. De resultaten van zulke metingen kunnen worden vastgelegd in een kwaliteitsrapport. 

Het Nederlandse [NORA Raamwerk gegevenskwaliteit](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit) is op onder andere [[ISO-25012]] gebaseerd en beschrijft een set van kwaliteitsdimensies en kwaliteitsattributen, waarbij wordt aangegeven op welk toepassingsniveau (dataset, gegevensobject, attribuut, of waarde) ze kunnen worden gebruikt. 

Hoewel een kwaliteitsraamwerk heel generiek kan zijn (procesgegevens, systeem-afhankelijke gegevens), kan het ook specifiek ingaan op bijvoorbeeld geometrische of topologische controles van de gegevens zelf. We hebben het dan over de inherente gegevenskwaliteit, die voor de SOR van groot belang is. Met dit voor ogen is een vergelijk uitgevoerd tussen NORA indicatoren en indicatoren uit de ISO 19157. Hierbij worden de kwaliteitseisen uit [[EMSO]] gekoppeld aan de juiste indicatoren. In het vervolg kunnen geschikte meetfuncties worden gezocht voor deze eisen, en kan de vastlegging van deze eisen verder worden uitgewerkt.  

#### Juistheid / Nauwkeurigheid

|  NORA Kwaliteitsattribuut  |   ISO 19157 Kwaliteitsattribuut   |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|  |   |
| Classificatie juistheid  | `DQ_ThematicClassificationCorrectness`  |
| Thematische juistheid  | `DQ_ThematicAccuracy` (`DQ_NonQuantitativeAttributeCorrectness` & `DQ_QuantitativeAttributeAccuracy`)   |
| Positionele juistheid  | `DQ_PositionalAccuracy` (`DQ_AbsoluteExternalPositionalAccuracy` & `DQ_RelativeInternalPositionalAccuracy` & `DQ_GriddedDataPositionalAccuracy`)  |
|  | `DQ_AccuracyOfATimeMeasurement`   |

#### Compleetheid

|  NORA Kwaliteitsattribuut  |   ISO 19157 Kwaliteitsattribuut   |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|  |   |
| Ruimtelijke dekking  | ?   |
| Attribuut compleetheid   | `DQ_CompletenessOmission` > `DQ_Scope.level` = feature,   `DQ_Scope.levelDescription` = attribuutX  |
| Dataset compleetheid   | `DQ_CompletenessOmission` > `DQ_Scope.level` = dataset  |
| Historie compleetheid  | ?   |
| Identificeerbaarheid   | `DQ_CompletenessOmission` > `DQ_Scope.level` = dataset / feature,   `DQ_Scope.levelDescription` = identificatie attribuut   |
| Metadata compleetheid  | `DQ_CompletenessOmission` > `DQ_Scope.level` = dataset / feature /   attribute, `DQ_Scope.levelDescription` = metadataAttribuutX,   metadataAttribuutY, etc |
| Overcompleetheid   | `DQ_CompletenessComission` > `DQ_Scope.level` = dataset/featuretype   |

#### Validiteit

|  NORA Kwaliteitsattribuut  |   ISO 19157 Kwaliteitsattribuut   |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|  |   |
| Geometrische validiteit  |   |
| Domeinvaliditeit   |   |
| Formaatvaliditeit  |   |
|  | `DQ_TemporalValidity`   |

#### Consistentie

|  NORA Kwaliteitsattribuut  |   ISO 19157 Kwaliteitsattribuut   |
|:--------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|  |   |
| Topologische consistentie  | `DQ_TopologicalConsistency`  |
| Homogeniteit   |   |
| Referentiële integriteit   |   |
|  | `DQ_TemporalConsistency`  |
| Logische consistentie  |   |
|  | `DQ_ConceptualConsistency`  |
|  | `DQ_DomainConsistency`  |
|  | `DQ_FormatConsistency`  |

#### Overige dimensies

|   Kwaliteitsdimensie   |  NORA Kwaliteitsattribuut | ISO 19157 Kwaliteitsattribuut |
|:--------------------------:|:-------------------------:|:-----------------------------:|
| Actualiteit  | Update frequentie   |   |
| Actualiteit  | Versheid  |   |
| Precisie   | Geometrische precisie   |   |
| Precisie   | Opslagprecisie  |   |
| Plausibiliteit   | Authenticiteit  |   |
| Plausibiliteit   | Bewijsbaarheid  |   |
| Plausibiliteit   | Reputatie   |   |
| Plausibiliteit   | Waarschijnlijkheid  |   |
| Traceerbaarheid  | Gebruiksinzicht   |   |
| Traceerbaarheid  | Herleidbaarheid   |   |
| Traceerbaarheid  | Reproduceerbaarheid   |   |
| Begrijpelijkheid   | Duidelijkheid   |   |
| Gebruik  |   | `DQ_UsabilityElement` 			 |
| Metakwaliteit  |   | `DQ_Confidence`   |
| Metakwaliteit  |   | `DQ_Representativity`   |
| Metakwaliteit  |   | `DQ_Homogeneity`  |



### Datakwaliteit in de SOR


#### Informatiemodel niveau

*Eisen*

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Authenticatie / Autorisatie  | vastleggen welke (categorieën) bronhouders er zijn voor elk  objecttype.   | Dit heeft te maken met authenticiteit   | plausibiliteit   |
| Populatie   | beschrijving van de populatie die wordt opgenomen in de SOR,  per objecttype   | Dit heeft te maken met thematische juistheid of met dataset  compleetheid   | compleetheid  |
| Actualiteit  | eis over binnen welk termijn (aantal dagen/maanden) na  realisatie/ontstaan van een object, dit object beschikbaar moet zijn in de  SOR, per objecttype   | Dit heeft te maken met de updatefrequentie   | actualiteit   |
| Verplichtheid   | per objecttype wordt aangegeven of het objecttype behoort tot  de verplichte inhoud of optioneel is   | Dit heeft te maken met dataset compleetheid  | compleetheid  |
| Inwinning / opname  | Er zijn afspraken nodig wat betreft de opname van informatie  in de SOR: objecten worden in de SOR opgenomen op het moment dat deze volgens  de voor het betreffende objecttype gedefinieerde criteria ontstaan   | Dit heeft te maken met conceptualConsistency  | consistentie  |
| Authenticatie / Autorisatie  | vastleggen welke bronhouders er zijn voor een attribuuttype,  wanneer 'mogelijke bronhouderschap' afwijkt van wat er bij het objecttype is  vastgelegd   | authenticatie   | plausibiliteit   |
| Verplichtheid   | per attribuuttype wordt aangegeven of het attribuuttype behoort  tot de verplichte inhoud of optioneel is   | Dit heeft te maken met attribuut compleetheid   | compleetheid  |
| Bronverwijzing  | vastleggen of bronverwijzing aan de orde is, per objecttype  (dit is afhankelijk van de achtergrond van het opvoeren of beëindigen van een  object in de registratie).   | Dit heeft te maken met attribuut compleetheid   | compleetheid  |
| Bronverwijzing  | vastleggen of bronverwijzing aan de orde is, per attribuuttype  (dit is afhankelijk van de achtergrond van het opvoeren of wijzigen van een  attribuut in de registratie).   | Dit heeft te maken met attribuut compleetheid   | compleetheid  |
| Geometrie   | Minimale geometrietype die van toepassing is (2D, 2.5D, 3D)  | Dit heeft te maken met toplogische consistentie (zoals in NORA  beschreven)  | consistentie  |
| Topologie   | vastleggen van topologieregels voor objecttypes (bv: Knopen en  verbindingen bevinden zich binnen de contouren van de bijbehorende reële  objecten.)  | Dit heeft te maken met toplogische consistentie (zoals in ISO  19157 beschreven)   | consistentie  |

*Mogelijke eisen*

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Autorisatie  | Gebruiksautorisaties voor specifieke objecten in de SOR worden  in het informatiemodel expliciet benoemd   | -   | -  |
| Nauwkeurigheid  | Bij de uitwerking van de inhoud van de samenhangende  objectenregistratie wordt voor de verschillende objecttypen bepaald wat de  kleinste geometrische/cartografische eenheid is die nog van belang is voor  meerdere gebruikers van de registratie. |  | consistentie (homogeneiteit) / juistheid|
| Bronverwijzing  | vastleggen in welke gevallen men een verwijzing moet opnemen  naar een bron(document)  |  | compleetheid  |

#### Object/Attribuut niveau

*Eisen*

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Bronverwijzing (opname)  | Bij alle objecten wordt vastgelegd de wijziging op grond  waarvan het betreffende object in de registratie is opgenomen (of is  beëindigd).   | Dit gaat over herleidbaarheid, zou je ook kunnen vertalen in  een eis aan de metadata compleetheid (als onderdeel van een UsabilityElement  - de mate waarin de dataset voldoet aan een set eisen)  | traceerbaarheid / compleetheid   |
| Bronverwijzing (wijziging)  | Bij alle attributen wordt vastgelegd de wijziging op grond  waarvan het betreffende attribuut (wijziging van een attribuut) in de  registratie is opgenomen.  | Dit gaat over herleidbaarheid, zou je ook kunnen vertalen in  een eis aan de metadata compleetheid (als onderdeel van een UsabilityElement  - de mate waarin de dataset voldoet aan een set eisen)  | traceerbaarheid / compleetheid   |
| Geometrie (CRS)  | Iedere geometrie moet zijn voorzien van een verwijzing naar  het coördinaatreferentiesysteem (RD-NAP) waarin de coördinaten van de  geometrie zijn beschreven.   | Dit gaat over herleidbaarheid, zou je ook kunnen vertalen in  een eis aan de metadata compleetheid (als onderdeel van een UsabilityElement  - de mate waarin de dataset voldoet aan een set eisen)  | traceerbaarheid / compleetheid   |
| Geometrie (wijziging)   | vastlegging van het feit dat een bepaalde geometriewijziging  afkomstig is van een wijziging door een andere bronhouder   | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Bronverwijzing (wijze van inwinning)   | vastlegging van de wijze van inwinning/registratie van een  object (bij opvoering/beëindigen van het informatieobject): conform formele  brondocumenten (vergunningen, besluiten) of technische bronnen (luchtfoto's,  metingen, BIM-modellen).  | Dit gaat over herleidbaarheid. De vastlegging zelf is bedoeld  voor de bewijsbaarheid van de gegevens (het toont aan dat de gegevens juist  zijn, conform een bepaald document of objectieve meting). In dit geval gaat  het om de bewijsbaarheid op een geagregeerd niveau - van een ''set'' gegevens  (zoals bekend bij opvoering van de set in de registratie), of de afwezigheid  van de hele set   | traceerbaarheid / plausibiliteit  |
| Bronverwijzing (wijze van inwinning)   | vastlegging van de wijze van inwinning/registratie van een  attribuut (bij opvoering/wijziging van een gegeven): conform formele  brondocumenten (vergunningen, besluiten) of technische bronnen (luchtfoto's,  metingen, BIM-modellen).  | Dit gaat over herleidbaarheid. De vastlegging zelf is bedoeld  voor de bewijsbaarheid van de gegevens (het toont aan dat de gegevens juist  zijn, conform een bepaald document of objectieve meting).  | traceerbaarheid / plausibiliteit  |
| Bronverwijzing (wijze van inwinning)   | vastlegging van de totstandkoming van 3D geometrie  (post-processing, etc)  | Dit gaat over herleidbaarheid. De vastlegging zelf is bedoeld  voor de bewijsbaarheid van de gegevens (het toont aan dat de gegevens juist  zijn, conform objectieve regels). Het heeft mogelijk ook iets te maken met  reproduceerbaarheid: als de 3D geometrie tot stand is gekomen door de  uitvoering van een aantal regels voor het combineren van bv een puntenwolk  conform 2D begrenzingen, zou je deze regels kunnen vastleggen. | traceerbaarheid / plausibiliteit  |
| Bronverwijzing  (plaatsbepalingspunten) |  | Dit zegt iets over positionele juistheid/nauwkeurigheid  | juistheid  |
| Bronverwijzing (uitvoerder van inwinning) | vastlegging van de uitvoerder van de inwinning van een  attribuut  | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Controledatum   | vastlegging van de datum waarop controle van het attribuut  heeft plaatsgevonden   | Dit gaat over versheid   | actualiteit   |
| Wijze van controle  | vastlegging van de wijze waarop controle van het attribuut  heeft plaatsgevonden   | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Uitvoerder van controle  | vastlegging van de uitvoerder die de controle van een  attribuut heeft uitgevoerd  | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Nauwkeurigheid  | aanduiding van de klasse van nauwkeurigheid van de  geregistreerde geometrie   | Dit gaat over positionele juistheid/nauwkeurigheid   | juistheid  |
| Status  | per attribuut kunnen statussen worden toegekend: InOnderzoek,  inBewerking, reactieBelanghebbende  | Dit heeft te maken met de waarschijnlijkheid  | plausibiliteit   |
| Aantekenveld   | vastlegging van aantekeningen voor objecten  | Dit heeft misschien iets te maken met gebruiksinzicht,  duidelijkheid en begrijpelijkheid   | traceerbaarheid / begrijpelijkheid   |

*Mogelijke eisen*

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Traceerbaarheid  | Vastlegging van verantwoordelijke bronhouder van een object  (bv: welke gemeente verantwoordelijk is voor het bijhouden van het object)   | -   | traceerbaarheid   |
| Traceerbaarheid  | Vastlegging van bronhouder die mutatie (van een attribuut van  een instantie) heeft doorgevoerd - wanneer dit een andere bronhouder is dan  dat van het object.   | -   | traceerbaarheid   |
| Status  | Bij geometrie wordt in overweging gegeven een status  "inDiscussie" mogelijk te maken  | -   | 




