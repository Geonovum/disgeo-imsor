# Analyse en vergelijking van de metamodellen van MIM 1.1, NEN3610:2020 en NTA8035

## Vergelijking van terminologie

De volgende afkortingen worden gebruikt:

* **N** = niet gebruikt
* **Z** = gebruikt zonder duidelijke definitie

### Werkwijze

**Pano**: om het enigzins overzichtelijk te houden heb ik nu een opdeling gemaakt in

* [Terminologie van concepten en objecten](#terminologie-van-concepten-en-objecten)
* [Terminologie van kenmerken](#terminologie-van-kenmerken)
* [Terminologie van klasses, typen en verzamelingen](#terminologie-van-klasses-typen-en-verzamelingen)
* [Terminologie van gegevens en modellen](#terminologie-van-gegevens-en-modellen)

Dit kan later nog aangepast worden.


#### Terminologie van concepten en objecten

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| term | **Z** | **Z** | fysieke tekenreeks die wordt gebruikt om een concept of individueel object te duiden in één of meerdere talen                | |
| begrip | **Z** | **N** | De gedachte aan iets uit de werkelijkheid           | |
| concept | **Z** | **Z**<br>- een concept wordt benoemd door een term en krijgt betekenis door middel van een definitie<br>- de betekenis van een concept overlapt niet met andere concepten. Als er meerdere termen zijn voor een concept dan worden die als synoniemen opgenomen.<br>- in een sectormodel kunnen inwinningsregels om de inwinning van de locatie van een concept te definieren als extra informatie worden opgenomen | Een concept is min of meer synoniem met de term ‘begrip’. Het betreft de mentale voorstelling van ‘iets uit de werkelijkheid’.<br>[...] Belangrijk kenmerk van een Concept is dat het kan worden geïnstantieerd. Dat betekent dat er een classificatierelatie moet kunnen bestaan tussen een Individu en een Concept. | |
| object | Een ding, een tastbaar iets, in de werkelijkheid, zoals daarnaar gekeken wordt vanuit een bepaald domein. | Een fenomeen in de werkelijkheid. | **Z**<br>- Een eigennaam verwijst naar een (concept van) een individueel object | - **Pano**: in NTA8035 lijkt _object_ een synoniem met _ding_ en _begrip_ en _concept_. MIM lijkt aan deze termen verschillende definities te koppelen. |
| geo-object | **N** | abstractie van een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak)<br><br>[...] koppeling van geo-informatie maakt van een object een geo-object | **N** | - **Pano**: volgens NEN3610:2020 is een object alleen een geo-object alleen als er geinformatie aan "gekoppeld" is. Een gebouw waar voor geen geo-informatie bestaat is dus geen geo-object. |
| reëel object | **N** | _Geo-object_ waarvan het fenomeen in de werkelijkheid tastbaar, zichtbaar en begrensd aanwezig is | **N**<br>Maar er bestaat geen enkel ding waarvan men zonder context betekenisvol kan zeggen: “Kijk, dit is het gebouw.” Men kan alleen maar een reëel exemplaar aanwijzen en daarvan zeggen: “Kijk, dit is een gebouw”, wat eigenlijk wil zeggen: “Kijk, dit is een voorbeeld van een gebouw.” | - **Pano**: fysiek en reëel lijken synoniemen van elkaar|
| fysiek object | **N**<br>-Definitie object [...] Het gaat niet alleen om fysiek herkenbare objecten zoals auto’s, gebouwen en mensen [...] | Een fysiek object deelt de ruimte fysiek op en sluit daarmee andere fysieke objecten uit op die locatie: de ruimtelijke manifestatie is exclusief. Fysieke objecten zijn tastbaar en worden gekenmerkt door hun fysiek voorkomen doormiddelen van materialen en of constructie. | Een [fysiek object] is iets dat bestaat of zou kunnen bestaan in ruimte en tijd, een manifestatie en een afbakening van materie en/of energie vormt en waarneembaar is door de zintuigen. Een fysiek object kan activiteiten uitvoeren en kan ook worden getransformeerd door activiteiten.<br><br>[...] Een zelfde fysiek object kan zowel _virtueel_ bestaan, bijvoorbeeld op een tekening of in de vorm van een digitaal model, en in de werkelijke wereld (geconstrueerd en in gebruik). Het betreft hier de verschillende _levenscycli_ waarin een object kan verkeren. | - **Pano**: onduidelijk wat er in de NTA8035 bescrhijving wordt bedoeld met _virtueel_. |
| virtueel object | Definitie object [...] Het gaat niet alleen om fysiek herkenbare objecten zoals auto’s, gebouwen en mensen, ook om zogenaamde virtuele objecten waarover binnen het domein door betrokkenen gecommuniceerd wordt zoals kadastrale percelen, (maatschappelijke) activiteiten en processen. | Geo-object waarvan geen tastbaar, zichtbaar en begrensd fenomeen in de werkelijkheid aanwezig is, maar die slechts in abstracte en/of geregistreerde vorm bestaat. | **N** | - **Pano**: definitie van virtueel object uit MIM en NEN3610:2020 lijkt overeen te komen met de definitie van immaterieel object in NTA8035 |
| immaterieel object | **N** | **N** | De voorbeelden van het Catshuis en het begrip ‘gebouw’ suggereren dat het bij ‘dingen’ altijd om fysieke en materiële objecten zou gaan. Dat is echter niet zo.<br>De werkelijkheid bestaat immers uit meer zaken dan alleen fysieke objecten. Ook activiteiten en immateriële zaken horen daartoe.<br>Pinkpop bijvoorbeeld is geen fysiek object maar een evenement. Hetzelfde geldt voor Koningsdag. Ook dit is een evenement. Op kleinere schaal geldt dat voor ‘het bakken van een pizza’ en het ‘kappen van een boom’. Dit zullen we niet zo snel evenementen noemen en eerder activiteiten. Maar dat is slechts een schaalverschil, geen wezenlijk verschil. Het is als het verschil tussen stad en dorp.<br>Ook hier speelt het onderscheid tussen individuen en typen. Koningsdag 2019 is immers niet hetzelfde als Koningsdag 2018 en Koningsdag 2017. Dit zijn individuele evenementen die allemaal instanties van het type Koningsdag zijn.<br>Ook hier kunnen subklassen en superklassen worden gevormd. Koningsdag, Koninginnedag, Bevrijdingsdag, 1e Paasdag, enz. zijn allemaal subtypen van Feestdag.<br>‘Dingen in de werkelijkheid’ kunnen ook immaterieel zijn.<br><br>VOORBEELD Een kadastraal perceel is weliswaar een ruimtelijk gebied, maar het bezit geen materiële kenmerken. Het is een gebied waarop één of meer zakelijke rechten rusten. Een zakelijk recht (vruchtgebruik, hypotheek, enz.) is echter immaterieel.<br><br>Een topografisch perceel als grasland is daarentegen materieel. Het kenmerk waardoor het een ruimtelijke eenheid is (gras), is immers een materieel iets. | |
| functioneel object | **N** | Object met een specifieke functie<br><br>Een functie wordt gerealiseerd door een ruimte en/of door (delen van) reële objecten. In één zelfde ruimte kunnen meerdere functies gerealiseerd worden. Functie-objecten sluiten elkaar dus niet uit. In een 2d representatie leidt dat tot overlappende vlakken.| **N** | - **Pano**: de NTA noemt wel functioneel fysiek object, maar dat gaat over functies van een fysiek object. |
| informatieobject | **Z** | Een informatieobject kan een _geo-object_ zijn of een object waarbij geo-informatie afwezig of niet van belang is (in dit schema met niet-geo-object aangeduid). Deze norm is alleen normatief voor _geo-objecten_.<br><br> Het toepassingsgebied beperkt zich tot informatieobjecten met informatie over een directe of indirecte locatie ten opzichte van de aarde (geo-informatie).<br> | Een [informatieobject] is een op zichzelf staand geheel van gegevens met een eigen identiteit. [...] Een informatie object betreft een abstract concept dat met behulp van een fysiek object (als ‘drager’) een door zintuigen waarneembare vorm kan aannemen. | - **Pano**: In MIM en NEN3610:2020 lijkt geen onderscheid gemaakt te worden tussen _informatieobject_ en _object_, hoewel dat niet uit de definitie van object blijkt in deze documenten. NTA8035 maakt wel onderscheid tussen _fysieke objecten_ en _informatieobjecten_. |
| individu | **N** | **N** | Onder een [individu] verstaan we een begrip dat overeenkomt met ‘iets aanwijsbaars (of potentieel aanwijsbaars) uit de werkelijkheid’. | - **Pano**: met _individu_ lijkt in NTA8035 hetzelfde bedoeld te worden als _object_ in MIM en NEN3610:2020 |
| individueel ding | **N** | **N** | **Z**<br>- In Den Haag staat het Catshuis. Dit is wat we een ‘individueel ding’ noemen. Van dit Catshuis kunnen mensen zich een voorstelling vormen. Zo’n mentale voorstelling wordt een begrip of concept genoemd. Sommige mensen hebben het Catshuis zelf gezien. Anderen kennen het alleen van een foto. Weer anderen kennen het alleen van naam. Hun voorstellingen van het Catshuis zullen dus onderling verschillen. | - **Pano**: synoniem van individu en ding in NTA8035 |

#### TODO
- fenomeen

#### Terminologie van kenmerken

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| kenmerk |  |  |  |  |
| kenmerk | Z | een eigenschap van een object in de werkelijkheid | Z | Gabriella: een NEN3610 kenmerk is dus een eigenschap van een object in de werkelijkheid. In de NTA8035 en in MIM is kenmerk een synoniem voor eigenschap (het wordt op een brede manier gebruikt) |
| eigenschap | Z | Z | Z | Gabriella: in de NEN3610 worden kenmerken, associaties en gedrag gezien als specifieke soorten eigenschappen |
| predicaat | N | N | Z | Staat informeel bekend als 'Property', en wordt gebruikt om een (binaire) relatie aan te geven tussen een subject en een object	Gabriella: in de MIM wordt de term 'predicate' gebruikt in linked data voorbeelden, maar de betekenis ervan wordt verder niet toegelicht |
| attribuut	| Z Kenmerken van objecten in het informatiemodel zijn attribuutsoorten. Een attribuutsoort is de typering van gelijksoortige gegevens die voor een objecttype van toepassing is. | een eigenschap van een geo-object met een attribuutwaarde voor de bijbehorende waarde | Beschrijven intrinsieke kenmerken, en kunnen worden onderverdeeld in: annotaties, door mensen te interpreteren ‘identifiers’, namen, labels, enz., en door computers te interpreteren aspecten. Een attribuut lijkt dus op een relatie maar verbindt nu een individu met een waarde in plaats van een referentie naar een ander individu. | Gabriella: een NEN3610 attribuut is dus een eigenschap van een (geo)object in een model van de werkelijkheid |
| annotatie	| N	| Z | Een specifiek type attribuut, kan worden gebruikt om een willekeurige ‘vrije tekst’ te koppelen aan een bepaalde instantie van een meta-concept. Stel dat men wil zeggen dat over het concept Tuibrug meer informatie is te vinden in een bepaalde publicatie, op een bepaalde internetpagina, of dat men wil zeggen dat de definitie afkomstig is van T. Gerritsen. Al deze informatie kan in de vorm van een Annotatie aan het concept Tuibrug worden gerelateerd. Annotaties zijn bestemd voor menselijke interpretatie. | |
| essentieel attribuut | N | N | een essentiële en oorspronkelijke eigenschap van een concept of individu die niet mag ontbreken, zonder dat het ding ophoudt te zijn wat het is. Dit zou dan een definiërende eigenschap kunnen worden genoemd. Aanvullend bestaan er ook specificerende eigenschappen. | |	
| waarde | Z | Z | Een Waarde is een instantie van een bepaald Waardetype en wordt erdoor geclassificeerd. Een belangrijk verschil tussen een Concept en een Waardetype is dat een (instantie van een) Waardetype geen Toestand kan hebben (of beter: dat de Toestand niet kan veranderen in de tijd), en bij een Concept wel. Een Waardetype is dus een ‘Toestandsloos’ Concept. | |
| relatie |	Verbanden met betekenis, die gelegd zijn tussen modelelementen van het type objecttype naar het type objecttype, of van een gegevensgroeptype naar een objecttype. Wanneer een relatie gebruikt wordt om objecten aan elkaar te verbinden, zonder dat er eigenschappen over deze relatie worden vastgelegd, dan betreft dit de MIM-metaclass «Relatiesoort». | Een relatie is een
associatie tussen twee of meer geo-objecttypen | In de wiskunde beschrijft een relatie het verband of de betrekking tussen objecten. Elke relatie is gedefinieerd over een aantal verzamelingen en verbindt, uit deze verzamelingen, de elementen die met elkaar in het bedoelde verband staan. Het aantal verzamelingen waarover de relatie is gedefinieerd, heet de plaatsigheid of ariteit van de relatie. De meest voorkomende relatie is de tweeplaatsige (binaire) relatie, die objecten in tweetallen aan elkaar koppelt. Het CMM beschouwd alleen binaire relaties.	| |
| groepering | Z | N | Deze relatie kan worden gebruikt om aan te kunnen geven welke Concepten, Waardetypen en andere gegevenstypen bij een Gegevensstructuur horen. | |
| classificatie | N	| Z | Classificatie wordt gebruikt om de betrekking tussen een Individu en een Concept aan te geven. De classificatierelatie wordt ook gebruikt om de links naar het metamodel te maken, en om de relatie tussen een Waarde en een Waardetype aan te geven.	| |
| aggregatie | Z Dit geeft aan dat het objecttype die doel is van de relatie een onderdeel is van het objecttype die de eigenaar is van de relatie | een associatie tussen een samengestelde klasse en een componentklasse (maakt deel uit van). Objecten van de deelklasse kunnen worden toegevoegd of verwijderd zonder dat de geheelklasse ophoudt te bestaan. | N | |
| specialisatie	| Een objecttype dat een generalisatie-relatie heeft naar een al dan niet abstract objecttype noemen we een specialisatie (van dat objecttype). | het verfijnen van een klasse (de zgn. superklasse) in onder- of subklassen. |	Z (Inverse van Generalisatie) "‘Zoogdier’ wordt dan een generalisatie of supertype van ‘hond’ genoemd. Andersom wordt ‘hond’ een specialisatie of subtype van ‘zoogdier’ genoemd." | |
| generalisatie | De typering van het hiërarchische verband tussen een meer generiek en een meer specifiek modelelement van hetzelfde soort, waarbij het meer specifieke modelelement eigenschappen van het meer generieke modelelement overerft. Dit verband is alleen gedefinieerd voor objecttypen en datatypen. Generalisatie tussen objecttypes: Een generalisatierelatie geeft aan dat bepaalde eigenschappen van een objecttype (vaak attribuutsoorten en/of relatiesoorten) ook gelden voor de gerelateerde objecttypen, én dat deze qua semantiek, structuur en syntax gelijk zijn. Generalisatie tussen datatypes: Het meer specifieke datatype brengt een verbijzondering aan in de vorm van een meer restrictieve definitie, of een meer restrictief patroon/formeel patroon. | N | Generalisatie is het terrein van subtypen (of subklassen) en supertypen (of superklassen). Generalisatierelaties kunnen niet alleen worden gedefinieerd tussen Concepten (zoals tussen ‘hond’ en ‘zoogdier’), maar ook tussen Attributen en Relaties. | |	
| compositie | De typering van het hiërarchische verband tussen een meer generiek en een meer specifiek modelelement van hetzelfde soort, waarbij het meer specifieke modelelement eigenschappen van het meer generieke modelelement overerft. Dit verband is alleen gedefinieerd voor objecttypen en datatypen. Generalisatie tussen objecttypes: Een generalisatierelatie geeft aan dat bepaalde eigenschappen van een objecttype (vaak attribuutsoorten en/of relatiesoorten) ook gelden voor de gerelateerde objecttypen, én dat deze qua semantiek, structuur en syntax gelijk zijn. Generalisatie tussen datatypes: Het meer specifieke datatype brengt een verbijzondering aan in de vorm van een meer restrictieve definitie, of een meer restrictief patroon/formeel patroon.	| een associatie die
aangeeft dat een of meer klassen (componenten) onderdeel zijn van een andere klasse (compositieklasse), met als restrictie dat een component niet zelfstandig verder bestaat als de compositieklasse verdwijnt. | Compositie is het terrein van de deel-geheelrelaties. Merk op dat compositierelaties worden beschreven tussen Individuen, niet tussen Concepten. Het is een individuele tafel die bestaat uit een individueel tafelblad en vier individuele poten. Compositie-uitspraken die worden geformuleerd tussen Concepten, betekenen echter iets anders. Als er bijvoorbeeld wordt gezegd dat een tafel bestaat uit een tafelblad en drie of vier tafelpoten, dan betekent dat niet dat het begrip ‘tafel’ is opgebouwd uit het begrip ‘tafelblad’ en vier- of driemaal het begrip ‘tafelpoot’." | Gabriella: bij de MIM is compositie een 'aggregatietype', en dit heeft betrekking op de metagegevens van de MIM modelelementen |
| karakterisatie | N | N | Dit zijn meta-relaties die gelden (relevant zijn) tussen een individu en een attribuutwaarde of een referentie naar een ander individu. Men kan bijvoorbeeld zeggen dat de Domtoren een hoogte heeft van 110 m. Hierbij wordt het individu ‘de Domtoren’ gekarakteriseerd door de waarde 110 m voor het attribuut hoogte. Deze karakterisatie zit bij een RDF-binding impliciet in de ‘triple’: een subject wordt gekarakteriseerd door een verzameling predicaat-objectparen. | |
| associatie | Z | relatie tussen twee klassen | Dit zijn ook relaties die worden beschreven tussen twee (verschillende) Individuen. De associatie-uitspraken die tussen Concepten worden geformuleerd, hebben een andere betekenis en een andere functie. Men kan bijvoorbeeld zeggen dat een Persoon één of meer Gebouwen kan beheren. Deze uitspraak legt een beperking op de mogelijke invullingen van de individuen die hieraan kunnen voldoen. Dit betekent bijvoorbeeld dat Jan een Persoon moet zijn (en bijvoorbeeld geen kanarie) en het Catshuis een Gebouw (en bijvoorbeeld geen IJsberg). Dit wordt dus geregeld via beperkingen. | |


##### TODO
- groep?


#### Terminologie van klasses, typen en verzamelingen

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| objecttype |  |  |  |  |

##### TODO

- objecttype
- waardetype
- datatype

#### Terminologie van gegevens en modellen

| Term | MIM | NEN3610:2020 | NTA8035 | Opmerking |
|:-----|:----|:-------------|:--------|-----------|
| gegeven |  |  |  |  |


##### TODO

- gegeven
- gegevensverzameling
- gegevensmodel
- beperking
- afleiding
- Universe of Discourse
- ontologie
- subklasse
- subeigenschap
- levenscyclus / levenscycli

