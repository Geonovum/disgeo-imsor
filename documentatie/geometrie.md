## Geometrie

### Uitgangspunten

Relevante input uit verschillende standaardenorganisaties en initiatieven:

Principes: 
- het gaat om het representeren van de locatie, orientatie en de vorm van objecten. 
- dimensionaliteit: 2D, 3D space versus 0D, 1D, 2D(, 3D) objecten

#### Coordinaatreferentiesystemen:
- WGS84 gebaseerd op ITRS, gebruikt voor GPS
- European Terrestrial Reference System 1989 (ETRS89)
- Rijksdriehoek systeem (RD)
- Linear Reference Systems (LRS) (zie ISO 19148:2021, RWS-BPS, NWB, EU Inspire)

#### Technologieën (formaten, direct access methods: APIs/QLs, data languages)
ISO STEP tech:
- EXPRESS
- SPFF

W3C Base/XML tech: 
- HTML (also ISO & IEC: ISO/IEC 15445:2000(E))
- XML
- XSD
- XPATH
- XQuery
- CSS

W3C Linked Data / Semantic Web tech: 
- RDF, serialisations: Turtle, TriG, RDF-XML, JSON-LD
- languages: RDFS, OWL, SHACL, SHACL-AF
- SPARQL (often GraphQL frontend in case of JSON-LD serialisation). DE-9IM, 2-only!

ECMA/IETF JSON tech
- JSON (IETF RFC 8259)

GraphQL Foundation
- GraphQL, potential replacement for IETF's REST

IETF
- HTTP
- REST

OMG
- UML
- UMLtoOWL specs

#### Gremia en geometrie-gerelateerde specificaties
ISO
- ISO TC184 STEP, Part 42
- ISO TC211
    - ISO 19101 - reference model
    - ISO 19107 (2019) - spatial schema
    - ISO 19125-1, Simple Features Access; incl. WellKnownText (WKT) strings option
    - ISO TC5?

Open Geospatial Consortium (OGC)
- GML (XML based)
- CityGML using GML
- GeoSPARQL (Small ontology & set of topological functions; zie [Semantic web journal paper](http://www.semantic-web-journal.net/sites/default/files/swj176_0.pdf)
- JSON-FG, uitbreiding op GeoJSON, in ontwikkeling

CEN
- TC442 WG4 / TG 3 SML. == ~NEN 2660; small top level: abstract concept <> concrete concept with subclass Representation: SpatialEntity(/TempralEntity from W3C Time Ontology)

buildingSmart International (bSI)
- IFC (3D): 
    - IFC2x3, IFC4x1 (infra support like alignments), IFC4x3RC2. 
    - Placement (Location, Orientation). 
    - BREPS, ExtrudedSolid, BoundingBox, ... based on former ISO STEP Part 42,  Integrated generic resource: Geometric and topological representation

W3C
- Spatial Data on the Web Best Practices (w3.org) (also OGC) [[sdw-bp]] met ref naar  Spatial Thing (https://www.w3.org/2003/01/geo/), GeoSPARQL en GeoJSON. 

IETF
- RFC7946: GeoJSON [[rfc7946]]

Geonovum
- NEN 3610 [[NEN3610-2021-ontw]]
- Geometrie in model en GML [[gimeg]]
- Handreiking coördinaatreferentiesystemen [[gebruik-crs]]

Hieronder iets meer over NEN 3610 en de handreiking Geometrie in model en over inhoudelijke uitgangspunten uit EMSO. 

#### NEN 3610
NEN 3610 [[NEN3610-2021-ontw]] zegt weinig specifieks over geometrie en geometrische vastlegging van objecten, anders dan dat ISO 19107:2020 normatief wordt aangehaald, waarin de ISO geometrietypen (o.a. `GM_Point`, `GM_Curve`, `GM_Surface`, `GM_Solid`) worden gedefinieerd. 

Inwinregels worden in sectormodellen bepaald. 

> "Inwinregels geven aan welke punten van een object ingemeten moeten worden en waar de geometrie van een geregistreerd object aan moet voldoen. Het leidt tot een vastgestelde geometrische weergave gericht op een specifieke toepassing." 

Paragraaf 8.4.4.3 Geometrie bevat een aantal uitgangspunten:
- Geometrie is een representatie van een object.
- Een objecttype kan nul of meer geometrische representaties hebben.
- De beschrijving van de 3D-werkelijkheid wordt ondersteund.
- Hoogte-informatie kan absoluut of relatief zijn; hierover staat in NEN 3610 een goede uitleg.

Paragraaf 9.12 gaat in op topologische relaties en geeft hier gestandaardiseerde namen voor.

Hoofdstuk 10 bevat regels en handreikingen over coördinaatreferentiesystemen die van belang kunnen zijn voor de SOR. 

#### Geometrie in model 

De handreiking Geometrie in model en GML [[gimeg]] legt inhoudelijk uit hoe het geometriemodel uit ISO 19107 [[iso-19107-2019]] kan worden toegepast en wat het geldende Nederlands profiel is (i.e. welke selectie is gemaakt uit de mogelijke geometrietypen). 

Een eis uit [[EMSO]] is: 
> aansluiting op Simple Features (ISO 19125)

<aside class="issue">ISO 19125 definieert een model voor <strong>2 dimensionale </strong> geometrietypen. 3D geometrie is uitgesloten in deze standaard. In EMSO wordt echter wel een behoefte aan 3D geometrie geformuleerd.</aside>

We hanteren dus Simple Features (ISO 19125) _+ een aantal aanvullingen voor zover nodig, waarschijnlijk in ieder geval voor bogen en volumes._

#### Uitgangspunten uit EMSO
- De vastlegging van geometrie wordt zodanig vormgegeven dat de driedimensionale (3D) beschrijving van een object kan worden opgenomen.
- EMSO beschrijft een aantal algemene topologische regels over vlakdekkendheid en topologie, bv "Objecten op verschillende hoogten moeten goed op elkaar aansluiten waar ze elkaar raken en consistent zijn"
- Waar relevant wordt er kwaliteitsmetadata voor geometrieën opgenomen.
- De ruimtelijke dekking van de SOR is inclusief de territoriale zee.
- Het te gebruiken coördinatenstelsel is RD. 
- De [precisie](https://www.noraonline.nl/wiki/Geometrische_precisie) van coördinaten is op millimeterniveau en in RD betekent dit dat er coördinaten met 3 decimalen worden opgenomen.
- Gegeneraliseerde data objecttypen [worden niet opgenomen in de SOR](https://docs.geostandaarden.nl/disgeo/emso/#generalisatie). Ze kunnen wel onderdeel zijn van informatieproducten. Generalisatie is "het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten (of op attribuutniveau)", ten behoeve van minder gedetailleerde kaartschalen.

<aside class ="issue">Is RD wel het juiste coördinaatreferentiesysteem? 

- Het te gebruiken coördinaatreferentiesysteem, RD, is niet toereikend voor objecten die zich niet op land bevinden maar op territoriale zee, zoals windturbines. Echter, de gewenste ruimtelijke dekking van de SOR is inclusief de territoriale zee.
- Vanuit verschillende (basis)registraties is niet RD maar ETRS-89 de eis. O.a. in de Omgevingswet (bron?). In het EMSO is van RD uitgegaan omdat veel bronhouders nog in RD werken. We moeten met experts bekijken of RD danwel ETRS op land de vereiste moet zijn. We kunnen hierbij ook gebruik maken van [hoofdstuk 3](https://docs.geostandaarden.nl/crs/cv-hr-crs-20211125/#aandachtspunten-bij-crs-in-informatiemodel-en-informatieketen) van de Handreiking CRS [[gebruik-crs]] .
</aside>

### Modelleren van geometrie bij objecttype

<aside class="issue">We moeten gaan uitwerken hoe we de eigenschap geometrie modelleren. Is het een datatype of wiskundig object; of een bijzonder datatype of een interface. Of misschien modelleren als een objecttype `Locatie` (zoals [locn](https://www.w3.org/ns/locn)). 

Ook: Gebruiken we een attribuutsoort of relatiesoort om geometrie aan het objecttype te verbinden? 

</aside>

Semantisch gezien, vanuit de MIM gedachte, positioneren we de geometrie als een eigenschap van het object. De betekenis van een geometrie vereist altijd een context, bv. een attribuutsoort of relatiesoort van een objecttype. Bv.`begrenzing` of `bovenaanzicht`. 

Wiskundig gezien kun je zeggen dat de geometrie zelf een object is. Het is een set van coördinaten volgens een classificerende typering (surface, point enz) met samenhangende metadata die vereist is voor de interpretatie ervan (crs, …) waar je ruimtelijk mee kan rekenen. 

We gebruiken in ieder geval de ISO typen `GM_Surface` etc. In ISO hebben deze een complexe structuur. In geo-informatiemodellen worden deze typen meestal behandeld als `interface` en kunnen ze zowel aan een attribuut en aan een relatie worden gekoppeld.  OGC CityGML en IMGeo zijn voorbeelden van informatiemodellen waar met een relatie wordt gewerkt. 

In Linked Data (GeoSPARQL) wordt geometrie als een object gezien en ook in ISO 2660 is dit zo. Het is daar een abstract (in de zin van: wiskundig) object waarnaar je een relatie kan leggen.

### Geometrie-aspecten per objecttype

De volgende (meta)aspecten van geometrie moeten worden gedefinieerd per objecttype in het informatiemodel of de documentatie daarbij: 

#### Geometrietype
Het geometrietype wordt aangegeven door keuze van het juiste type uit het ISO 19107 Geometry Model (`GM_xxx`), passend binnen het profiel zoals gedefinieerd in [[gimeg]]. 

<figure>
    <img src="https://docs.geostandaarden.nl/nen3610/gimeg/media/86bee1823dfd4f2ae0112c0462d2ccec.png" alt="ISO 19107 ruimtelijk schema"/>
    <figcaption>Het ruimtelijk schema van ISO 19107, geometrische primitieven.</figcaption>
</figure>

<aside class="issue">
Hierbij is het relevant om te definiëren en op schrijven welke varianten toegestaan zijn. Een `GM_Surface` of `GM_Curve` heeft nog allerlei mogelijke verschijningsvormen in het Geometry model. Voor de uitwisseling en het gebruik is het handig om dit in te perken.

#### Dimensionaliteit
Het aantal dimensies kan impliciet worden aangegeven door geometrietype, aangevuld met een aanduiding dat het om 2.5D gaat in de definitie van het attribuut. 

`GM_Solid` is per definitie 3D, maar bij `GM_Surface`, `GM_Curve` en `GM_Point` (en composite/multi varianten hiervan) is het mogelijk om 2 of 3 posities per coördinaat op te nemen. De hoogte is dan de derde positie. Of de hoogte wel of niet wordt opgenomen in de coördinaten kunnen we aangeven in de definitie van het attribuut.

<aside class="example">
Definitie van het attribuut `geometrie` van een geluidbron in het Informatiemodel Geluid.
<figure>
    <img src="media/img-voorbeeld-3d.png" alt="Voorbeeld IMGeluid"/>
    <figcaption>Voorbeeld geometrietype omschrijving IMGeluid</figcaption>
</figure>
</aside>

<aside class="issue">
Is het wenselijk om een semantisch attribuut `hoogte` te modelleren zodat te zien is wat de hoogte van het object is zonder naar de coördinaten te kijken? Waar zou je dit modelleren, in de geometrie of in het objecttype/gegevensgroeptype? Moet dit überhaupt wel? in EMSO staat het niet dus het lijkt geen inhoudelijke eis te zijn.
</aside>

#### 3D geometrie

<aside class="issue">Hoe we omgaan met 3D geometrie in de SOR moet nog verder worden uitgewerkt.

Een aantal vragen: 
- Is het mogelijk om van een object naast een 3D geometrie ook de 2D geometrie registreren? En is dat wenselijk? Op de korte termijn is er wellicht behoefte aan een flexibele aanbodkant waar organisaties als ze er aan toe zijn 3D kunnen aanleveren maar voorlopig wel 2D.
- Ook is er waarschijnlijk wel behoefte aan 2D geometrie bij afnemers. Is dit dan iets dat je in een product afleidt, of is het iets dat we in het informatiemodel ook modelleren?
- Kun je de 2D geometrie altijd afleiden uit de 3D geometrie?
</aside>

#### Nauwkeurigheidseisen
Wat onder nauwkeurigheid van geometrie wordt verstaan is goed gedefinieerd in standaarden. We gaan ervan uit dat wat in EMSO nauwkeurigheid wordt genoemd, hetzelfde is als [positionele juistheid](https://www.noraonline.nl/wiki/Positionele_juistheid) in het NORA raamwerk gegevenskwaliteit en hetzelfde als wat in de BGT positionele nauwkeurigheid wordt genoemd: 

> Onder positionele nauwkeurigheid verstaat men de mate waarin de opgeslagen coördinaten overeenkomen met de waarden in de werkelijkheid of de geaccepteerde afwijking.

Per objecttype geven we de toegestane kwaliteit voor de positionele nauwkeurigheid als een getal in centimeters (dat dan de toegestane afwijking weergeeft). MIM heeft hiervoor geen metadata-element. Een optie is om dit in een tabel vóór in de gegevenscatalogus op te nemen, zoals gedaan in de BGT catalogus op p. 23. 

<aside class="example">
<figure>
    <img src="media/bgt-nauwkeurigheid.png" alt="Voorbeeld BGT"/>
    <figcaption>Tabel met nauwkeurigheidseisen in de BGT gegevenscatalogus</figcaption>
</figure>
</aside>

Eventueel zou het ook in het MIM aspect `Regels` bij het geometrie attribuut van het desbetreffende objecttype gezet kunnen worden. 

#### Inwinregels
Verreweg de meeste objecttypen in de SOR hebben in hun huidige registratie al enige vorm van inwinregels. Eventueel zouden inwinregels in het MIM aspect `Regels` bij het geometrie attribuut van het desbetreffende objecttype gezet kunnen worden. 

Omdat dit vaak omvangrijke instructies zijn, zijn ze nu meestal in tekst uitgeschreven in een apart handboek of hoofdstuk van de gegevenscatalogus. 

#### Topologische regels
Voor ruimtelijke relaties tussen de objecten kunnen we gebruik maken van de topologische relaties zoals gedefinieerd in de Simple Features standaard [[iso-19125-1-2004]] en aangeraden in [[NEN3610-2021-ontw]] en [[sdw-bp]]. Deze relaties zijn geïmplementeerd in veel geografische softwareomgevingen en ook in GeoSPARQL: 

- **`Equals`** - gelijk
- **`Disjoint`** - disjunct (geen enkel punt gemeen)
- **`Touches`** - raakt
- **`Crosses`** - kruist
- **`Within`** - binnen
- **`Contains`** - bevat
- **`Intersects`** - doorsnijdt (geometrieën hebben op zijn minst één punt gemeen;
geometrieën kunnen verschillende dimensie hebben)

Deze relaties kun je gebruiken voor punt-, lijn- en vlakgeometrieën. Omdat er in de SOR meer met 3D wordt gewerkt, worden topologieregels complexer maar ook secundair aan de representatie van de werkelijke verhouding tussen objecten. 

> Het is belangrijker om ervoor te zorgen dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). De exacte uitwerking van deze relaties in topologie-regels zal later in het traject verder worden uitgewerkt.

#### Benodigde kwaliteitsmetadata

Wat voor kwaliteitsmetadata bij een objecttype wordt voorgeschreven, kan worden bepaald aan de hand van uitgangspunten in EMSO [§ 3.4.5](https://docs.geostandaarden.nl/disgeo/emso/#meta-gegevens-over-herkomst-en-kwaliteit). Dit kan zijn:
- plaatsbepalingspunten
- een brondocument / bronverwijzing anders dan plaatsbepalingspunten
- gerealiseerde nauwkeurigheid van de geometrie van het object in de vorm van een nauwkeurigheidsklasseaanduiding
- helemaal geen kwaliteitsmetadata

### Geometrie-object
Per individuele geometrie vastleggen:
- Coördinatenstelsel
- Geometrietype
- De coördinaten zelf
- Indien van toepassing, kwaliteitsmetadata zoals beschreven in [](#benodigde-kwaliteitsmetadata).

Het volstaat om een ISO 19107 geometrietype toe te passen in het informatiemodel. Dit zorgt ervoor dat het coördinatenstelsel kan worden opgenomen, dat het geometrietype duidelijk is en dat de coördinaten zelf kunnen worden opgenomen.

### Plaatsbepalingspunt
Plaatsebepalingspunten zijn van belang voor sommige geometrieën als metadata over de inwinning. 

Elk plaatsbepalingspunt wordt vastgelegd met de volgende kenmerken:
- Unieke aanduiding
- Coördinaten/puntgeometrie inclusief hoogte
- Nauwkeurigheid
- Inwinnende instantie
- Inwinningsdatum

De coördinaten van plaatsbepalingspunten moeten samenvallen met de coördinaten in de bijbehorende objectgeometrie. 

<aside class="note">Deze regel kan alleen gecontroleerd worden als er een relatie is tussen object danwel geometrie, en bijbehorende plaatsbepalingspunten.</aside>

#### Wanneer plaatsbepalingspunten? 

Bij een **objecttype** modelleren: als het een reëel object betreft EN de grens in het terrein goed is aan te wijzen (goed idealiseerbaar is).

Bij een **individueel object** verplicht opnemen: als de coördinaten daadwerkelijk ingewonnen zijn middels terreinbezoek (terrestrisch), laserscanning (laser), luchtfoto’s of panoramabeelden.

### Uitwerking in voorbeeld

<aside class="example">
    <figure>
        <img src="media/voorbeeld-geometrie-modelleren.png" alt="Voorbeeld van het modelleren van geometrische aspecten"/>
        <figcaption>Voorbeeld van het modelleren van geometrische aspecten</figcaption>
    </figure>
</aside>

In dit voorbeeld is de geometrie van het objecttype `OpenBouwwerk` gemodelleerd als `GM_Solid`. 

In het MIM aspect `Regels` zijn de **nauwkeurigheidseis**, **inwinregels**, en **topologische regels** opgenomen. 

Optioneel kan bij een `OpenBouwwerk` 1 of meer `Plaatsbepalingspunten` opgenomen worden. Omdat het een reëel objecttype betreft, dat goed idealiseerbaar is, moeten plaatsbepalingspunten worden opgenomen als de geometrie is ingewonnen middels terreinbezoek (terrestrisch), laserscanning (laser), luchtfoto’s of panoramabeelden.

<aside class="issue">
Rondom modellering van `Plaatsbepalingspunt` zijn er nog vragen: 
- Is er een associatie tussen objecttype en `Plaatsbepalingspunt` nodig?
- Moet `Plaatsbepalingspunt` gerelateerd moeten worden aan de reële objecttypen, of aan de geometrie zelf?
- Kan de relatie beter van objecttype naar `Plaatsbepalingspunt` gericht zijn of andersom?
- Is het een optie om `Plaatsbepalingspunt` te modelleren als O&M `Observation`?
</aside>