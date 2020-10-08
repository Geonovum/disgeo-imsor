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

##### TODO

- kenmerk
- eigenschap
- predicaat
- attribuut
  - annotatie
- essentieel attribuut
- oorspronkelijke eigenschap
- waarde
- relatie
  - groepering
  - classificatie
  - generalisatie
  - compositie
  - karakterisatie
  - associatie

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

