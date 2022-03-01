# Verslag 21e expertgroepbijeenkomst
24 februari 2022

### Eerste opmerkingen?

**Lennart**: Interne review Kadaster: Wanneer moet je Hoogte tov NAP gebruiken en wanneer Z coordinaten?

**Lennart (chat)**: Het is in ieder geval van belang is om het NAP toe te voegen bij de bullets in 9.1.1. Het lijkt erop dat er meer besef nodig is van onze hoogte definitie langs een gekromd equipotentiaalvlak (de geoïde) en die uitgedrukt moet worden in H i.p.v. van Z. Vooral als er onderscheid gemaakt moet worden tussen lokaal/relatief en absoluut (zoals ik ergens las) is dat besef van belang.

## Gedetailleerde aantekeningen van het gesprek

### Door het document heenlopen

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#geometrie

**Linda** loopt toegevoegde issues aan document door.
---

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#optie-1

**Rik**: Optie 1 voelt gekunsteld. Er zijn meerdere mogelijkheiden om geometrieen vast te leggen van iets wat gemodelleerd kan worden als geometrie. Ik zou zeggen, trek de geometrie los van het object als representatie van het ding.

**Michel**: Is dat ook niet de GeoSparql manier:  er kunnen meerdere geomtrieen horen bij een feature.

**Rik**: Klopt. Ik vind het een goed idee om het gerepresenteerde van de representatie te scheiden. Dit geeft je meerdere mogelijkheden.

**Pano**: Bedoel je dan dat een geometrie een los objecttype wordt en met een relatie gekoppeld wordt aan open bouwwerk?

**Rik**: Inderdaad

**Paul**: Een geometrie als objecttype vind ik wel zwaar aangekleed. Een kleur representeert de kleur van een object. Daar maak je ook geen objecttype van, maar een datatype. Een geometrie representeert de geometrie van het object.

**Michel**: Een kleur vind ik iets anders dan een geometrie, van geometrie kun je meerdere van hebben. Dat hint op meer dan een dataype.

**Pano**: Een ding kan ook meerdere kleuren hebben, dus waar zit dan het verschil volgens jou [ Michel ]?

**Michel**: Dat klopt, voor mijn gevoel is een geometrie toch iets complexers.

**Lennart**: Is een contour van een persoon een eigenschap of een geraleerd object?

**Pano**: Hang af van je perspectief. Wanneer je gegevens over contour wilt vastleggen dan moet je die kunnen aanwijzen. In MIM kan dat alleen maar als contour een objecttype is. De crux zit volgens mij in de vraag: Wil je er gegevens over kunnen vastleggen? Als het antwoord ja is dan moet je het als objecttype modelleren.

**Niels**: Een plaatsbepalingspunt zegt iets over de geometrie. Niet over het object.

**Dick**: Aanvullend: Plaatsbepalingspunt is de herkomst van de geometrie, net zoals als brondocument ook als herkomstgegeven opgenomen wordt.

[ Discussie ]

**Linda**: NEN 3610 stelt dat een geometrie gemodelleerd wordt als een attribuut met een geo-datatype. Waarom is dat niet voldoende?

**Rik**: Ik denk dat het altijd flexibeler is om het als een relatie te modelleren. Dan kun je alle kanten op. Je kunt er altijd voor kiezen om dat plat te slaan naar een simpel attribuut.

**Pano**: Wat is geometrie volgens de iso standaard, ding of datatype?

**Paul**:  [ legt standaard uit en verwijst naar UML plaatje (figuur 17) ] 

**Pano**: Het UML model (figuur 17) is geen informatiemodel, maar een OO-software klassediagram. Dat zegt semantisch gezien niet of dit een objecttype of datatype is. 

**Paul**: Dat kun je als modelleur zelf beslissen.

[ Discussie Pano: Datatype vs Object ]

**Pano**: Het draait er volgens mij om: Zodra je gegevens over een geometrie wilt vastleggen kan het geen primitief / gestructureerd datatype zijn, omdat je van een primitief / gestructureerd datatype geen gegevens kunt vastleggen. Dus dan moet je een geometrie als objecttype modelleren.

[ Discussie Michel: Openbouwwerk -> Grondvlak, Bovenaanzicht met eigen geometrie ]

**Michel**: Je kunt Bovenaanzicht en Grondvlak eigen objecttypes maken met een eigen geometrie eigenschap en naar deze relateren vanuit OpenBouwwerk. Dat is hoe we dat vanuit NEN2660 doen.

**Niels**: Wegen de voordelen van die semantische zuiverheid wel op tegen de complexiteit die je dan introduceert?

**Pano**: Goed punt. We willen het niet complexer maken dan nodig.

**Lennart**: We hebben twee opties. Als attribuut, of als relatie naar een gerlateerd object met attribuut.

**Pano**: En nog de derde optie dat we een geometrie als objecttype modelleren.

---

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#optie-2

**Michel**: Dit lijkt compatible met SOSA (W3C). Klopt dat?

**Linda**: Dat klopt. SOSA is hier ook op gebaseerd.

**Michel**: Wel interessant. In SOSA een observatie van meten, behalve de ruimte/tijd dingen. Daarvan zegt SOSA, daar moet je GeoSPARQL voor gebruiken.

**Pano**: Bedoelen ze dan het observeren van een locatie? Of bedoelen ze de locatie waar de observatie gedaan is, dus als metadata van de observatie?

**Michel**: Dat laatste.

**Pano**: OK, deze modellering gaat niet over de locatiemetadata van de observatie, maar daadwerkelijk over het meten / observeren van een punt. Daarmee is de locatie het resultaat van de observatie. 

[ Discussie ]

[ Groep lijkt het en goede modellering te vinden ]

**Pano**: Een nadeel van deze modellering is dat observaties van eigenschappen met meervoudige kardinaliteit niet passen in dit model. Stel dat je OpenBouwerk een eigenschap `kleur: CharacterString [1..*]` heeft en we hebben een instantie van OpenBouwwerk met kleur geel en kleur blauw. Nu hebben we een observatie die gaat over alleen de kleur blauw. Hoe modelleren we dat dan?

[ Discussie over uitdaging. Conclusie is dat optie 1 en 2 dat niet afdekken.]

**Lennart**: Andere optie is koppelklasse of relatieklasse, waarin je aanvullende informatie kunt opnemen over precies welk gegeven het gaat.

**Lennart (chat)**: Aantekening mbt correlatie tussen coordinaten van omtrek van gebouw en ptb:

voor de koppeling van een ptb aan de omtrek om bij een coordinaat van de omtrek weer het ptb te kunnen vinden, is nodig: identificatie van gebouw, naam van kenmerk (optoneel, alleen nodig als gebouw meerdere kenmerken heeft met een geometrie, en een keuze uit: ofwel tijdreisvraag ofwel versie van object.

Dit kan je modelleren als een koppelklasse, wat met name nuttig is als het ptb voor meerdere objecten gebruikt kan worden. Dan zijn ptb en gebouw ook netjes van elkaar ontkoppeld maar toch wel gekoppeld via de data.

[ Discussie -> dat is "by convention" -> niet ideaal. ]

**Pano**: Andere optie is de geometrie als object met eigen identiteit modelleren.

**Linda**: Ik heb deze modelleringen ook aan Arnoud voorgelegd.

**Linda (chat)**: 

Arnoud:

> Het hangt er een beetje van af hoe je de betekenis wilt vastleggen:
> 
> Optie 1. Geometrie van een object is samengesteld uit / gebaseerd op Plaatsbepalingspunt
> 
> of
>
> Optie 2. Plaatsbepalingspunt is ingewonnen om een bepaald object in te meten.Bij optie 1 horen de kwaliteitsgegevens bij een object.
>
> Bij optie 2 hoort het object bij de kwaliteitsgegevens.Ik pleit voor optie 1. Een landmeter meet punten/coördinaten. Vervolgens worden hier objecten uit samengesteld. De grenspunten kunnen dus horen bij bijvoorbeeld een gebouw en een voetpad.
>
> Door bij de geometrie van een object de kwaliteit op te nemen kun je PBP's hergebruiken, en is het ook niet nodig ze te wijzigen/muteren.
>
> ```
> <geometrie>
>   <lijnOfVlak>
>   <gml:polygon />
>   </lijnOfVlak>
>   <kwaliteit>
>   <pbp id=" ">
    > <pbp id=" ">
  > </kwaliteit>
> </geometrie>
> ```
>
> Nog een argument: in de BGT en BAG staan de objecten centraal. Daaraan koppelen we metadata over herkomst en kwaliteit.

**Linda**: Arnoud gaf ook nog aan: 1 Plaatsbepalingspunt kan zijn gebruikt in meerdere geometrieen.

**Rik** : Ik kan de [Arnoud's] redenatie volgen vanuit het oogpunt van objectregistraties, maar vanuit digital twins en modelleren van de werkelijkheid vind ik het niet passen.

Optie 2: zou je moeten combineren met de objectificatie van de geometrie. Het object wat je wilt modelleren moet centraal staan, en alle eigenschappen over dat object zijn niet leidend.

Linda: Arnoud: Geometrie van het object is bepaald obv de plaatsbepalingspunten. Bij de geometrie van een object neemt hij de kwaliteit op.

**Paul**: De observatie gaat over het object, maar daarmee kun je 

**Dick**: Plaatsbepalingspunten hebben we destijds geintroduceerd. Maar misschien zijn er wel alternatieven. Neem dat ook mee in de overwegingen.

**Lennart**: Voorstel: Waarom copy pasten we de metagegeven kwaliteit niet van mee naar het object? Dan is het niet nodig om een relatie te leggen tussen plaatsbepalingspunt en object/geometrie.

Dan kun je het coordinaat uit een geometrie pakken, stuur je deze icm de objectidentificatie en versie naar een plaatsbepalingspunt api en krijg je informatie.

**Paul**: Als de relatie niet is gelegd is het resultaat arbitrair en mogelijk verkeerd.

**Pano**: Om zo'n API te realiseren heb je alsnog de identificatie en mogelijk de versie van het object nodig. Dat is in feite hetzelfde als het leggen van een relatie.

**Lennart**: Eens.

**Michel**: De geometrie is in dit model niet de waarde van observed property, want dat is niet de hele geometrie. Hier lijkt nog niet een perfecte match met SOSA.

**Pano**: Michel heeft gelijk. We passen ook het observation en measurements model eigenlijk niet helemaal correct toe. Volgens mij hebben we nog een laag ertussen nodig om aan te geven hoe de meting van de punt in verhouding staat tot de gehele (afgeleide) geometrie.

**Linda**: Dit model kent ook het concept Collection. Mogelijk kunnen we dit daarmee oplossen?

**Michel**: Plaatsbepalingspunt is semantisch en die moet je geometrisch uitdrukken. Volgens mij moeten we dit strakker maken naar SOSA.

**Lennart**: Hoe waargenomen meetpunten te modelleren speelt ook bij het Kadaster. Ik vind het interessant om te kijken of wat hier uitkomt ook bruikbaar is voor het Kadaster.

**Paul**: Het blijft wel een afweging. Trek je het complete model van de standaard binnen, of houd je het simpel. Je moet de complexiteit weghouden bij het modelleren van de SOR.

**Pano**: We willen het zeker zo simpel mogelijk houden, maar we willen ook compatibel zijn met standaarden. Het introduceren van wat extra complexiteit aan de grens van je model voor het goed kunnen aansluiten op standaarden is het wat mij betreft altijd waard. Dat neemt niet weg dat je dan alleen moet "cherrypicken" wat relevant is.
