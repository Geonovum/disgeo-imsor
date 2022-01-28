# Verslag 21e expertgroepbijeenkomst
27 januari 2022

## Agenda
We gaan tijdens deze sessie in op het modelleren van geometrie. Zie hiervoor de uitwerking in het nieuwe [Generieke onderwerpen](https://geonovum.github.io/disgeo-imsor/documentatie/#geometrie) document. 

Aanwezig: Pano, Linda, Dick, Niels, Michel, Lennart

## Gedetailleerde aantekeningen van het gesprek
**Linda**: Introduceert werkdocument en het onderwerp van vandaag: modelleren van geometrie.
### NEN 3610

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#nen-3610

**Michel**: Is de ISO standaard een conceptuele standaard of heeft het al over GML of ander technishe implementaties?

**Linda**: Het is inderdaad een conceptuele standaard.

**Lennart**: Aanscherpingsvraag: Geometrie is een representatie van een object. Voglens mij is het een eigenschap?

**Linda**: Dat klopt inderdaad. Dat moet scherper opgeschreven worden.

**Lennart**: Er staat niet of een geometrie nou zelf een object is. Is dat GM_Surface

**Michel**: Misschien moeten we hier iets zeggen over hoe je dat precies modelleert, Datatypes, of relaties, of...

**Linda**: IN IMGeo hebben we het als relatie naar object gedaan, omdat dit CityGML volgt en daar is dat zo.

**Pano**: In Lined Data is dit ook het geval

**Linda**: Goed om hier iets over op teschrijven

---

**Niels**: En moeten we iets zeggen over NEN2660?

**Lennart**: Wat is een geometrie in NEN2660? Datatype, object?

**Michel**: Het is een abstract object. Je kunt er een relatie naar leggen.

**Lennart**: Ik zou een reeks van coordinaten nooit een object (MIM) noemen.

**Michel**: Dit is wel een goed punt. Het zijn in NEN2660 wel wiskundige objecten (abstracte objecten). Opdeling in semantische objecten en niet-semantische objecten zou wel iets scherper kunnen zijn.

---

**Lennart**: Zoals ik er naar kijk is een geometrie een een MIM datatype als waarde van een gegeven zoals, de grens van.

**Pano**: Maar je wilt ook eigenschappen kunnen vastleggen over geometrieen, Hoe kan dit dan in MIM? Van datatypes kun je geen eigenschappen vastleggen.

**Linda**: Inderdaad, je wilt het bijvoorbeeld ook kunnen identificeren.

**Lennart**: Misschien is het dan wel een identificeerbaar datatype, of speciaal ding.

**Lennart (chat)** : 
datatype of objecttype of wat anders?
geometrie kan een identificatie hebben, maar gaan we die identificatie gebruiken in SOR om ernaar te verwijzen, of behandelen we het gewoon als een bijzonder datatype

**Linda**: Dit moeten we verder uitwerken.

### Geometrie in model
**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#geometrie-in-model

**Linda**: Eis uit EMSO is het aansluiting op Simple FEatures (ISO 19125) + bogen.

**Linda**: Maar, we willen ook volumes kunnen uitdrukken ivm 3D eis. Dus hier moeten we wat mee.

**Michel**: Kan dat niet een uitbreiding zijn van simple features?

**Linda**: Waarschijnlijk wel. Maar, de complexe typen zijn voor een reden uitgesloten, om implementatie te vergemakkelijken.

**Linda**: Het is denk ik een bevinding op het EMSO. We moeten dus gaan specificeren dat we simple features + een aantal dingen gaan doen.

**Lennart**: Is het ook mogelijk om naast een 3D geometrie ook de 2D geometrie registreren? Is dat gebruikelijk?

**Linda**: DAt kan. In City GML is dat agedaan. Je kunt daar meerdere geometrieen bij een object opnemen. Dat heet LoD(Level of Detail).

**Lennart**: MEerdere geometrieen kan implementatie-problemen opleveren

**Linda**: Klopt veel applicaties verwachten er maar 1.

**Dick**: Waarom zou je de dezelfde data twee keer registreren? Dan meerdere afleidingen vastleggen?

**Michel**: Is het zo dat 2D altijd afleidbaar uit 3D?

**Linda**: Daar zegt de standaard niets over. Nu is het vaak andersom. Door optrekken van 

**Lennart**: Gebouw heeft een interessante casus, bovenaanzicht lukt wel, maar bij grondoppervlak moet je wel precies weten hoe het zit.

**Linda**: In CityGML heb je ook zelfs mogelijkheden om per onderdeel van een geometrie aan te geven wat het is.

**Michel**: Op de korte termijn moet je toe naar een flexibele aanbodkant waar organisaties als ze er aan toezijn 3D kunnen aanleveren maar voorlopig wel 2D.

**Linda**: 3D is 1 van de grote vraagstukken, maar niet de eerste die we moeten oplossen.

### Uitganspunten uit EMSO

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#uitgangspunten-uit-emso


**Linda**: Een issue: gebruik van RD, dat is niet toereikend op zee.

**Lennart**: Basisregistraties vereisen ETRS-89

**Linda**: Dat is een een goede. Dat is misschien dan ook een issue.

**Lennart**: Er is ook nog een regel, irt RDNapTrans transformatie van RD naar ETRS89, dat de punten binnen een geometrie niet te ver uit elkaar liggen (200m max), voor een nauwkeurige transformatie

**Niels**: Ik had ook begrepen dat ETRS89 de nieuwe bron zal worden.

**Dick**: In EMSO hebben we rekeneing te houden met een veelvoud aan partijen waarvan velen nog in RD werken. Vandaar dat RD is opgenomen. Ik dnk dat het goed is om hier met geometriespecialisten dieper naar te gaan kijken.

**Lennart**: Vanuit omgevingswet is het echt een eis om etrs89 te voeren

### **Dick**: Generalisatie

**Dick**: EMSO zegt ook iets over generalsiatie

(DISCUSSIE: over wat dat is)

**Linda**: Dit moeten we inderdaad beschrijvne

### Geometrie type:

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#geometrietype

**Linda**: Het type geometrie nemen we over uit dit model. Dat is nog even onafhankelijk van de discussie van net over datatype vs object.

**Michel**: Is dit compatible met BIM?

**Lennart**: Het attribuut hoogte, zit dit erin versluiteld? Bijvoorbeeld wat is de hoogte van een 2D geometrie?

**Linda**: Nee, je zou dit als apart attribuut kunnen opnemen. Dat is volgens mij bij de BRO gedaan.

**Lennart**: Is dit dan eigenschap van object of geometrie.

**Linda**: Van het object

**Michel**:  Dit is dan eigenlijk een semantische hoogte van het object, en niet van de geometrie. Ik zou daar terughoudend in zijn.

**Pano**: Eens, dat leidt tot "by convention" 3D oprekkingen.

**Lennart (chat)** : 
Semantische hoogte, wiskundige hoogte, beide, waar modelleren, in geometrie of in objecttype/gegevensgroeptype?

---

**Niels**: Triggert nog een andere vraag. GM_Curve heeft verschillende implemnaties. Welke moet je hebben?

**Linda**: Dat klopt. Ook bij Surface heb je dat.

**Linda**: Het is handig om de toegestane types te definieren en op te schrijven.

### Nauwkeurigheidseisen

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#nauwkeurigheidseisen

**Linda**: Hoe kun je dit gegeven modelleren? MIM heeft daar niet voor.

**Lennart**: De reden waarom MIM daar niets voor heeft is om dat bedacht is dat dit door NEN 3610 beter gespecificeerd moet worden.

**Linda**: Momenteel staat daar in NEN 3610 niets over.

**Linda**: We zouden dit in een MIM extensie voor geo kunnen opnemen, zodat we het per objecttype kunnen specificeren

**Pano**: Kan het zou zijn je bij een object met meerdere geometrieen dat verschillend wilt vastleggen.

**Linda**: Dan zou je het mogelijk op attribuutniveau willen vastleggen.

---

**Lennart**: Aanvullend. Wil je mogelijk kunnen aangeven wat voor type geometrie het om gaat: Reeel of virtueel bijvoorbeel. Hoe leg je dat vast?

### Inwinregels

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#inwinregels

**Linda**: Het lijkt neit logisch om dit mee te modelleren ivm de omvang van de beschrijving.

**Pano**: Het zou mooi zijn om dit wel op standaardmanier te relateren aan een specifiek modelelement, ivm documentgeneratie en andere automatische toepassing.

**Michel**: Moet je de regels ook kunnen checken? Dan zou je wel baat hebben

**Linda**: Nee, ...(?)

**Linda**: Maar, annotatisch verbinden aan het model is wel een relevante toepassing.

### Topologische regels

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#topologische-regels

**Linda**: 2d gebaseerd, 3d ben ik lost

**Pano**: Kun je tussen 2d en 3d topologische relaties leggen en vice versa?

**Linda**: Volgens mij kan het wel, maar ik weet er het fijne niet van.

**Lennart**: HEeft EMSO die eis voor topologische relaties?

**Linda**: Er zijn wel relaties zoals ligt in. En je hebt ook de eis van het landsdekkend zijn van geometrieen van bepaald objecten. 3D is dan nog wel interessant.

**Dick**: Aanvullend het verschilt per objecttype welke objecten landdekkend moeten zijn.

**Lennart**: Weten we precies welke objecttypes dat zijn.

**Lennart**: Het lijkt te zijn: alle reeele objecten tesamen zijn landsdekkend.

**Pano**: EMSO lijkt inderdaad te stellen dat reeel objecten tezamen landsdekkend zijn, maar zecht niet dat ze niet mogen overlappen.

**Linda**: We hebben als modelleurs inhoudelijk expertise nodig om dit goed uit te werken.

### Benodigde kwaliteitsmetadata

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#benodigde-kwaliteitsmetadata

**Lennart**: HEt zijn wel verschillende niveaus van metadata. Plaatsbepalingspunt is misschien een eigen objecttype, maar nauwkeurigheid wil je wel dichter als metadata bij de geometrie opnemen.

**Dick**: Voor virtuele objecten heb je bijvoorbeeld ook dat ze niet ingemeten zijn,  maar aangewezen worden.

**Pano**: Klopt, het zijn beiden vormen van herkoms / audit trail. Het zou interessant zijn om onze eerder uitgewerkte modelleerpatronen hiervoor te toetsen tegen dit onderwerp.

**Lennart (chat)** : 
Waar modelleer je welke metadata, bv. een plaatsbepalingspunt is in modelleertermen meer een objecttype 

### Geometrie van een object

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#geometrie-object

Discussie: over waar je metadata over de geometrie opneemt. Bijvoorbeeld de CRS?

**Lennart**: Kan niet bij datatype, want ik kan maar 1 GM_Surface hebben.

**Pano**: Maar de CRS hoort niet bij het attribuut, maar bij de geometrie.

**Pano**: Is GM_Surface dan misschien een gestructureerd datatype? HEt is nu een interface in MIM, maar weten niet precies wat daar dan achter zit. 

**Linda**: DAt document met de beschrijving daarvan kunnen we wel inzien.

---

**Lennart**: Ik zie wel waarde om te kunnen specificeren in welk CRS een geometrie ingewonnen moet wordne. Dat zou een metadata veldje kunnen zijn.

Discussie:
Waar ga je de CRS opnemen voor inwinning en waar bij uitlevering? Is dit dezelfde plek? Of doe je inwwiningsregels 

**Lennart (chat)** : 
Wens: graag een metagegeven CRS in het informatiemodel (de CRS van de data in de registratie zoals deze ingewonnen met de gewenste nauwkeurigheid, en als zodanig ook uitgeleverd kan (niet in een afgeleid product)).

### Plaatsbepalingspunten

**Linda** presenteert: https://geonovum.github.io/disgeo-imsor/documentatie/#plaatsbepalingspunt

**Lennart**: Bij Kadaster -> Altijd harde topologie, en altijd meerdere punten (wolkjes) waarmee je een middenlijn gaat trekken.

---

**Dick**: Beschrijving 
> De coördinaten van plaatsbepalingspunten moeten samenvallen met de coördinaten in de bijbehorende objectgeometrie.
zou ik eerder andersom schrijven.
**Michel**: "Samenvallen" klinkt ook te sterk. Misschien moeten voorkomen in?


Discussie

**Pano**: Teruggrijpend op geometrie als datatype vs geometrie als object -> Als je een geometrie kunt aanwijzen dan kun je adaar ook gegevens over vastleggen. Dan kan het gewoon als herkomstinformatie gezien worden.

**Niels**: De achtergrond hiervan is dat men dit wilt kunnen gebruiken om van specifieke punten van een geometrie de nauwkeurigheid te kunnen bepalen. Bijvoorbeeld om van een zijde van een object te bepalen wat dat daar mogelijk is. Daarvoor moet je van uit een specifiek punt van een geometrie een relatie kunne leggen.

**Pano**: Ik denk niet dat het nodig is om de relatie op punt niveau als gegeven uit te drukken. Ik zie het meer analoog aan een brondocument voor een setje gegevens. Je kunt van een geometrie achterhalen welke metingen zijn gedaan om te komen tot de waarde. Deze metingen zijn de plaatbepalingspunten met hun nauwkeurigheid. 
Een afnemer kan dan zelf deze punten vergelijken met de bestaande geometrie, als die dat nodig vindt.


Discussie

**Lennart**: Vanuit het Kadaster gesproken: Als je gaat eisen dat plaatsbepalingspunten met hun eigen precisie exact op de punten uit de geometrie moeten vallen, dan krijg je allerlei problemen om die punten op elkaar afgestemd te krijgen.
