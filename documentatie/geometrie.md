## Geometrie

### Uitgangspunten

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

#### Uitgangspunten uit EMSO
- De vastlegging van geometrie wordt zodanig vormgegeven dat de driedimensionale (3D) beschrijving van een object kan worden opgenomen.
- EMSO beschrijft een aantal algemene topologische regels over vlakdekkendheid en topologie, bv "Objecten op verschillende hoogten moeten goed op elkaar aansluiten waar ze elkaar raken en consistent zijn"
- Waar relevant wordt er kwaliteitsmetadata voor geometrieën opgenomen.
- De ruimtelijke dekking van de SOR is inclusief de territoriale zee.
- Het te gebruiken coördinatenstelsel is RD. 
- De [precisie](https://www.noraonline.nl/wiki/Geometrische_precisie) van coördinaten is op millimeterniveau en in RD betekent dit dat er coördinaten met 3 decimalen worden opgenomen.

<aside class ="issue">Het te gebruiken coördinaatreferentiesysteem, RD, is niet toereikend voor objecten die zich niet op land bevinden maar op territoriale zee, zoals windturbines. Echter, de gewenste ruimtelijke dekking van de SOR is inclusief de territoriale zee.</aside>

### Geometrie-aspecten per objecttype

De volgende (meta)aspecten van geometrie moeten worden gedefinieerd per objecttype in het informatiemodel of de documentatie daarbij: 

#### Geometrietype
Het geometrietype wordt aangegeven door keuze van het juiste type uit het ISO 19107 Geometry Model (`GM_xxx`), passend binnen het profiel zoals gedefinieerd in [[gimeg]]. 

<figure>
    <img src="https://docs.geostandaarden.nl/nen3610/gimeg/media/86bee1823dfd4f2ae0112c0462d2ccec.png" alt="ISO 19107 ruimtelijk schema"/>
    <figcaption>Het ruimtelijk schema van ISO 19107, geometrische primitieven.</figcaption>
</figure>

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

<aside class="note">Hoe we omgaan met 3D geometrie in de SOR moet nog verder worden uitgewerkt.
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