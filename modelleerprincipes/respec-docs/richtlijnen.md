# Richtlijnen

De modelleerrichtlijnen worden hieronder nader uiteengezet...

<!-- 
## **R1**. Elk informatiemodelelement verbinden aan een begrip

| | | |
|-|-|-|
| **id** | R1 |
| **Stelling** | Elk informatiemodelelement moet verbonden zijn met een begrip in het SOR begrippenkader |
| **Rationale** | Om samenhang te kunnen realiseren is het van belang dat begrijpt waar een informatieobject over gaat. Het is belangrijk om het soort onderwerp, gerepresenteerd door een objecttype, duidelijk te definiëren in de vorm van een begrip. Dit maat dat anderen kunnen begrijpen over wat voor soort objecten een obejcttype gaat. Hetzelfde geldt voor de kenmerken van het objecttype. vindbaar maken. |
| **Implicaties** | Ieder modelelement moet verwijzen naar een begrip in het begrippenkader. |

**Relaties**

invulling van:
* TODO - principe nodig

* MIM?

**Voorbeelden**
TODO  -->
## **R1**. Scheidt registratiemetadata

| | | |
|-|-|-|
| **id** | R1 |
| **Stelling** | Scheidt registratiemetadata van directe eigenschappen |
| **Rationale** | Registratiemetadata wordt vaak vermengd (als eigenschappen op hetzelfde objecttype gebruikt) met de directe eigenschappen van het object. Dit is meestal geen probleem in een specifie registratie, maar hindert samenhang en hergebruik van objecten en objecttypes over registraties heen, vanwege verschil in metadata, onduidelijke definities, etc.<br><br>(TODO beter formuleren)|
| **Implicaties** | Gebruik een apart objecttype om de registratie(meta)data op te modelleren. Dit kan doormiddel van een standaard modelleerpatroon, waarbij je via een voorgedefinieerde relatie vanuit een object kunt vinden wat de registratiecontext van dat object is, en wat de registratie(meta)data is die daarbij hoort. |

**Relaties**

invulling van:
* [](#p3-alleen-directe-eigenschappen)

## **R2**. Consistent gebruik van objecttypering voor soorten geo-objecten

| | | |
|-|-|-|
| **id** | R2 |
| **Stelling** | Consistent gebruik van objecttypering voor soorten geo-objecten |
| **Rationale** | Veel software paradigma's kunnen niet goed omgaan met meervoudige typering of meervoudige overerving. Om het gebruik van de informatie in de SOR so breed mogelijk te ondersteunen, maken we gebruik van enkelvoudig getypeerde objecten. Aanvullende typering kan plaatsvinden middels typerende of categoriserende waardelijsten. |
| **Implicaties** | Het conceptuele model gebruikt een taxonomische structuur (met klasse-subklasse relaties) voor het modelleren van geo-informatieobjecten, waarbij elk sub-object op zijn minst 1 verplichte attribuut kent die hem onderscheidt van zijn 'parent'. Blijkt dit niet het geval te zijn, dan wordt het gemodelleerd als een attribuutwaarde van het attribuut 'type'. |

## **R3**. Geen gegevensgroeptype gebruiken.

| | | |
|-|-|-|
| **id** | R3 |
| **Stelling** | Maak geen gebruik van MIM gegevensgroeptype |
| **Rationale** | Het MIM gegevensgroeptype is onduidelijk beschreven. Aan de ene kant geeft de definitie aan dat de gegevens in een gegevensgroep nog altijd over het object zelf gaan, aan de andere kant worden er voorbeelden gegeven waaruit het lijkt alsof een gegevensgroeptype gebruikt wordt om een object zonder identificatie toe te voegen. De noodzaak voor dit construct lijkt er in ieder geval niet te zijn. Daarnaast levert het gebruik onduidelijkheid op vanwege de onduidelijke definitie. |
| **Implicaties** | We maken geen gebruik van MIM gegevengroepttype. In de plaats daarvan gebruiken we een nieuw objecttype wanneer het over een ander object gaat. |

<!-- **Relaties**

**Voorbeelden**
TODO  -->

<!-- ## **RX**. Beperk het gebruik van abstracte constructen die interoperabiliteit in de weg kunnen staan

Gekeken moet worden of bepaalde modelleerconstructen niet een belemmering vormen voor de technische implementaties van het model, aangezien dit gevolgen kan hebben voor het uitwisselen van informatie. -->