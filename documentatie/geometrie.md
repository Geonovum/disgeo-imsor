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

Dit komt op hetzelfde neer als wat in de handreiking Geometrie in model en GML staat en is daar niet mee in tegenspraak. 

#### Uitgangspunten uit EMSO
- De vastlegging van geometrie wordt zodanig vormgegeven dat de driedimensionale (3D) beschrijving van een object kan worden opgenomen.
- EMSO beschrijft een aantal algemene topologische regels over vlakdekkendheid en topologie, bv "Objecten op verschillende hoogten moeten goed op elkaar aansluiten waar ze elkaar raken en consistent zijn"
- Waar relevant wordt er kwaliteitsmetadata voor geometrieën opgenomen.
- De ruimtelijke dekking van de SOR is inclusief de territoriale zee.
- Het te gebruiken coördinatenstelsel is RD. <span class ="note">Echter, dit is niet toereikend voor objecten die zich niet op land bevinden maar op territoriale zee, zoals windturbines.</span>
- De [precisie](https://www.noraonline.nl/wiki/Geometrische_precisie) van coördinaten is op millimeterniveau en in RD betekent dit dat er coördinaten met 3 decimalen worden opgenomen.

### Geometrie-aspecten per objecttype

Opnemen per objecttype i.e. op informatiemodelniveau: 

#### Geometrietype
Kan worden aangegeven door keuze van juiste type uit het ISO 19107 Geometry Model (`GM_xxx`), passend binnen het profiel zoals gedefinieerd in [[gimeg]]. 



#### Dimensionaliteit
Kan worden aangegeven door geometrietype (`GM_Solid` is per definitie 3D) + eventueel in de definitie van het attribuut een aanduiding dat het om 2.5D gaat. 

<aside class="example">
Definitie van het attribuut `geometrie` van een geluidbron in het Informatiemodel Geluid.
<figure>
    <img src="media/img-voorbeeld-3d.png" alt="Voorbeeld IMGeluid"/>
    <figcaption>Voorbeeld geometrietype omschrijving IMGeluid</figcaption>
</figure>
</aside>

#### Nauwkeurigheidseisen
Wat onder nauwkeurigheid van geometrie wordt verstaan is goed gedefinieerd maar ook een complex onderwerp (voor niet-geodeten). We gaan ervan uit dat wat in EMSO nauwkeurigheid wordt genoemd, hetzelfde is als [positionele juistheid](https://www.noraonline.nl/wiki/Positionele_juistheid) in het NORA raamwerk gegevenskwaliteit en hetzelfde als wat in de BGT positionele nauwkeurigheid wordt genoemd: 

> Onder positionele nauwkeurigheid verstaat men de mate waarin de opgeslagen coördinaten overeenkomen met de waarden in de werkelijkheid of de geaccepteerde afwijking.

Per objecttype geven we de toegestane kwaliteit voor de positionele nauwkeurigheid als een getal in centimeters (dat dan de toegestane afwijking weergeeft). MIM heeft hiervoor geen metadata-element. Een optie is om dit in een tabel vóór in de gegevenscatalogus op te nemen, zoals gedaan in de BGT catalogus op p. 23. 

<aside class="example">
<figure>
    <img src="media/bgt-nauwkeurigheid.png" alt="Voorbeeld BGT"/>
    <figcaption>Tabel met nauwkeurigheidseisen in de BGT gegevenscatalogus</figcaption>
</figure>
</aside>

Eventueel zou het ook in de definitie of toelichting van het geometrie attribuut van het desbetreffende objecttype gezet kunnen worden. 

#### Inwinregels
Later uit te werken. Verreweg de meeste objecttypen in de SOR hebben in hun huidige registratie al enige vorm van inwinregels. 

#### Topologische regels
Later uit te werken. Omdat er in de SOR meer met 3D wordt gewerkt, worden topologieregels complexer maar ook secundair aan de representatie van de werkelijke verhouding tussen objecten. 

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

Het volstaat om een ISO 19107 geometrietype toe te passen in het informatiemodel. Dit zorgt ervoor dat coördinatenstelsel kan worden opgenomen, dat het geometrietype duidelijk is en dat de coördinaten zelf kunnen worden opgenomen.

### Plaatsbepalingspunt
Plaatsebepalingspunten zijn van belang voor sommige soorten objecten als metadata over de inwinning. 

Elk plaatsbepalingspunt wordt vastgelegd met de volgende kenmerken:
- Unieke aanduiding
- Coördinaten/puntgeometrie inclusief hoogte.
- Nauwkeurigheid
- Inwinnende instantie
- Inwinningsdatum

De coördinaten van plaatsbepalingspunten moeten samenvallen met de coördinaten in de bijbehorende objectgeometrie. 

Het objecttype plaatsbepalingspunt moet worden uitgewerkt zodra we een reëel objecttype gaan modelleren dat in aanmerking komt voor het opnemen van plaatsbepalingspunten, i.e. een goed idealiseerbaar objecttype zoals Gebouw. Goed idealiseerbaar betekent dat het goed mogelijk is om vast te stellen waar precies een grens van een object zich bevindt. 