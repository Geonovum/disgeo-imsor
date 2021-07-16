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
## **R1**. Scheidt registratie-, bron- en herkomstmetadata van directe eigenschappen

| | | |
|-|-|-|
| **id** | R1 |
| **Stelling** | Scheidt registratie-, bron- en herkomstmetadata van <a>directe eigenschappen</a> |
| **Status** | Ter vaststelling |
| **Rationale** | Registratiemetadata zoals tijdlijnen, en bron- en herkomstmetadata zoals eigenschappen die een bronhouder, brondocument, of verwerkingsproces beschrijven, wordt vaak vermengd (als eigenschappen op hetzelfde <a>objecttype</a> gebruikt) met de <a>directe eigenschappen</a> van het <a>object</a>. Dit is meestal geen probleem in een specifieke registratie waar dit gebruik afgesproken is, maar hindert <a>samenhang</a> en hergebruik van <a>informatieobjecten</a> en <a>objecttypes</a> over registraties heen, vanwege verschil in <a>metadata</a>, onduidelijke, of verschillende definities, etc.|
| **Implicaties** | Gebruik een construct om de registratie-, bron- en herkomstmetadata duidelijk te onderscheiden van directe eigenschappen. |

**Relaties**

invulling van:
* [](#p3-alleen-directe-eigenschappen)

**Voorbeelden**

Een manier om de registratie-, bron- en herkomstmetadata duidelijk te onderscheiden van directe eigenschappen is doormiddel van een standaard modelleerpatroon, waarbij je via een voorgedefinieerde relatie van een <a>informatieobject</a> kunt vinden wat de registratiecontext van dat <a>informatieobject</a> is, en wat de registratie-, bron- en herkomstmetadata is die daarbij hoort. [[NEN3610-2021-ontw]] zet hier al een goede stap in door het introduceren van het concept Registratiegegevens. Zie ook het voorbeeld in [](#p3-alleen-directe-eigenschappen).

## **R2**. Gebruik gegevensgroeptype wacht op verduidelijking in MIM

| | | |
|-|-|-|
| **id** | R2 |
| **Stelling** | Gebruik van het MIM gegevensgroeptype wacht op verduidelijking in MIM |
| **Status** | Vastgesteld |
| **Rationale** | De toepassing van het MIM gegevensgroeptype kan momenteel op verschillende manieren gelezen worden. Aan de ene kant geeft de definitie aan dat de <a>gegevens</a> in een gegevensgroep nog altijd over het <a>object</a> zelf gaan, aan de andere kant worden er voorbeelden <a>gegeven</a> waaruit het lijkt alsof een gegevensgroeptype gebruikt wordt om een <a>object</a> zonder identificatie toe te voegen. Totdat dit in MIM aangscherpt is maken we hier geen gebruik van. |
| **Implicaties** | We wachten op verduidelijking in MIM voor het gebruik van MIM gegevengroepttype. In de plaats daarvan gebruiken we voorlopig attribuutsoorten of relatiesoorten wanneer we het over eigenschappen van een object hebben en maken we een nieuw <a>objecttype</a> wanneer het over een ander <a>object</a> gaat.<br>Zodra het gebruik van gegevensgroeptype in MIM is verduidelijkt wordt deze richtlijn verwijderd. |

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
