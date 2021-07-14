# Richtlijnen

De modelleerrichtlijnen worden hieronder nader uiteengezet...

<!-- 
## **R1**. Elk informatiemodelelement verbinden aan een begrip

| | | |
|-|-|-|
| **id** | R1 |
| **Stelling** | Elk informatiemodelelement moet verbonden zijn met een begrip in het SOR begrippenkader |
| **Rationale** | Om samenhang te kunnen realiseren is het van belang dat begrijpt waar een informatieobject over gaat. Het is belangrijk om het soort onderwerp, gerepresenteerd door een objecttype, duidelijk te definiëren in de vorm van een begrip. Dit maat dat anderen kunnen begrijpen over wat voor soort objecten een obejcttype gaat. Hetzelfde geldt voor de eigenschappen van het objecttype. vindbaar maken. |
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
| **Stelling** | Scheidt <a>registratiemetadata</a> van <a>directe eigenschappen</a> |
| **Status** | Ter vaststelling |
| **Rationale** | <a>Registratiemetadata</a> wordt vaak vermengd (als eigenschappen op hetzelfde <a>objecttype</a> gebruikt) met de <a>directe eigenschappen</a> van het <a>object</a>. Dit is meestal geen probleem in een specifieke registratie, maar hindert <a>samenhang</a> en hergebruik van <a>informatieobjecten</a> en <a>objecttypes</a> over registraties heen, vanwege verschil in <a>metadata</a>, onduidelijke, of verschillende definities, etc.|
| **Implicaties** | Gebruik een apart <a>objecttype</a> om de registratie(meta)data op te modelleren. Dit kan doormiddel van een standaard modelleerpatroon, waarbij je via een voorgedefinieerde relatie van een <a>informatieobject</a> kunt vinden wat de registratiecontext van dat <a>informatieobject</a> is, en wat de registratie(meta)data is die daarbij hoort. [[NEN3610-2021-ontw]] zet hier al een goede stap in door het introduceren van het concept Registratiegegevens. Zie ook het voorbeeld in [](#p3-alleen-directe-eigenschappen) |

**Relaties**

invulling van:
* [](#p3-alleen-directe-eigenschappen)

## **R2**. Scheidt herkomst- en bronmetadata

| | | |
|-|-|-|
| **id** | R2 |
| **Stelling** | Scheidt herkomst- en bronmetadata van <a>directe eigenschappen</a> |
| **Status** | Ter vaststelling |
| **Rationale** | Net als registratiemetadata, wordt ook herkomst- en bronmetadata vaak vermengd (als eigenschappen op hetzelfde <a>objecttype</a> gebruikt) met de <a>directe eigenschappen</a> van het <a>object</a>. Dit is meestal geen probleem in een specifieke registratie, maar hindert <a>samenhang</a> en hergebruik van <a>informatieobjecten</a> en <a>objecttypes</a> over registraties heen, vanwege verschil in <a>metadata</a>, onduidelijke, of verschillende definities, etc.|
| **Implicaties** | Gebruik een apart <a>objecttype</a> om de herkomst- en bron(meta)data op te modelleren. Dit kan doormiddel van een standaard modelleerpatroon, waarbij je via voorgedefinieerde relaties van een <a>informatieobject</a> kunt vinden wat de registratiecontext van dat <a>informatieobject</a> is, en wat de herkomst- en bron(meta)data is die daarbij hoort. Zie ook het voorbeeld in [](#p3-alleen-directe-eigenschappen) |

**Relaties**

invulling van:
* [](#p3-alleen-directe-eigenschappen)

## **R3**. Voorlopig geen gegevensgroeptype gebruiken

| | | |
|-|-|-|
| **id** | R3 |
| **Stelling** | Voorlopig maken we geen gebruik van MIM gegevensgroeptype |
| **Status** | Ter vaststelling |
| **Rationale** | Het MIM gegevensgroeptype kan momenteel op verschillende manieren toegepast worden. Aan de ene kant geeft de definitie aan dat de <a>gegevens</a> in een gegevensgroep nog altijd over het <a>object</a> zelf gaan, aan de andere kant worden er voorbeelden <a>gegeven</a> waaruit het lijkt alsof een gegevensgroeptype gebruikt wordt om een <a>object</a> zonder identificatie toe te voegen. Totdat dit in MIM aangscherpt is maken we hier geen gebruik van. |
| **Implicaties** | We maken geen gebruik van MIM gegevengroepttype. In de plaats daarvan gebruiken attribuutsoorten of relatiesoorten wanneer we het over eigenschappen van een object hebben en maken we een nieuw <a>objecttype</a> wanneer het over een ander <a>object</a> gaat. |

<!-- **Relaties**

**Voorbeelden**
TODO  -->

<aside class="note">
  Een complexe waarde wat geen object is modelleren we als complex datatype. In een complex datatype modelleren we geen eigenschappen van een object.
</aside>

<aside class="issue">
  afhankelijk van <a href="https://github.com/Geonovum/MIM-Werkomgeving/issues/170">[MIM-170]</a>
</aside>



<!-- ## **RX**. Beperk het gebruik van abstracte constructen die interoperabiliteit in de weg kunnen staan

Gekeken moet worden of bepaalde modelleerconstructen niet een belemmering vormen voor de technische implementaties van het model, aangezien dit gevolgen kan hebben voor het uitwisselen van informatie. -->
