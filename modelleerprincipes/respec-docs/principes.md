# Principes
In dit hoofdstuk worden de modelleerprincipes, in lijn met de uitgangspunten, geïntroduceerd.

## **P1**. Informatieobjecten zijn herbruikbaar

| | | |
|-|-|-|
|  **id** | P1 |
| **Stelling** | <a>Informatieobjecten</a> zijn (her)bruikbaar in verschillende registraties |
| **Rationale** | Wanneer we <a>samenhang</a> willen moet een objectbeschrijving (<a>informatieobject</a>) vanuit de ene registratie hergebruikt kunnen worden in een andere registratie. Zij het als verwijzing, of omdat de andere registratie ook <a>gegevens</a> beschrijft over hetzelfde <a>object</a>. |
| **Implicaties** | Dit betekent dat objecttypes scherp gedefinieerd moeten zijn. Bij het over elkaar leggen van <a>informatieobjecten</a> betekent het dat de <a>objecten</a> daadwerkelijk gelijk moeten zijn, ofwel de objectbeschrijvingen moeten exact hetzelfde onderwerp hebben. Alleen dan kunnen objectbeschrijvingen vanuit verschillende contexten consistent over elkaar heen gelegd worden. Daarnaast moeten ook alle <a>gegevens</a> in de objectbeschrijvingen hetzelfde onderwerp hebben. |

**Relaties**

invulling van:
* [](#u1-informatiemodel-bevordert-samenhang)
* [](#u3-informatiemodel-bruikbaar-in-object-georienteerde-relationele-en-graaf-gebaseerde-paradigma-s)

<!-- **Voorbeelden**

TODO -->

<aside class="issue">
  <a href="https://github.com/Geonovum/disgeo-imsor/discussions/57">Discussie</a> over dit uitgangspunt loopt.
</aside>

## **P2**. Objecttypes zijn herbruikbaar

| | | |
|-|-|-|
| **id** | P2 |
| **Stelling** | <a>Objecttypes</a> zijn (her)bruikbaar in verschillende registraties. |
| **Rationale** | Om [**P1**](#p1-informatieobjecten-zijn-herkbruikbaar) te realiseren moeten ook <a>objecttypes</a> hebruikbaar zijn in verschillende registraties. |
| **Implicaties** | Dit houdt in dat de <a>gegevens</a> die vastgelegd worden over <a>objecten</a>, op basis van het <a>objecttype</a>, herbruikbaar moeten zijn.|

**Relaties**

afgeleid van:
* [](#p1-informatieobjecten-zijn-herbruikbaar)

<!-- **Voorbeelden**

TODO -->

<aside class="issue">
  <a href="https://github.com/Geonovum/disgeo-imsor/discussions/59">Discussie</a> over dit uitgangspunt loopt.
</aside>

## **P3**. Alleen directe eigenschappen
| | | |
|-|-|-|
| **id** | P3 |
| **Stelling** | Alleen <a>directe eigenschappen</a> komen voor op een <a>objecttype</a>. |
| **Rationale** | Om samenhang te bevorderen moet een <a>objecttype</a> leiden tot objectbeschrijvingen die herkenbaar zijn onafhankelijk van de context van de registratie waarin ze bestaan. Het modelleren van directe eigenschappen (eigenschappen waarbij het onderwerp direct het <a>object</a> is) bevordert dit, omdat deze eigenschappen vaak zonder uitleg te begrijpen zijn. Daarmee zijn deze eigenschappen ook gemakkelijker te verplaatsen naar een andere context waarin hetzelfde onderwerp wordt beschreven. Wanneer eigenschappen aan een <a>object</a> worden toegekend die niet direct het <a>object</a> als onderwerp hebben, maar bijv. een verwant <a>object</a>, waarvan de beschrijving ook is opgenomen in het <a>informatieobject</a> over het eerste <a>object</a>, dan wordt het lastiger of zelfs onmogelijk om deze eigenschappen her te gebruiken buiten de context van de specifieke registratie waarin dat het geval is. Vaak is het onduidelijk wat deze eigenschappen betekenen buiten de context, als je ze al kunt herkennen. Hiervoor moet eerst documentatie gelezen worden, en daarna moeten er bedrijfsregels toegepast worden om gebruik toe te passen. Dit werkt <a>samenhang</a> tegen.|
| **Implicaties** | Het toepassen van dit principe leidt tot een genormaliseerd informatiemodel. Dit kan betekenen dat er meer objecttypes onderscheiden moeten worden dan momenteel (in een gedenormaliseerd model) vaak het geval is. Daarentegen bieden ook die expliciet gemodelleerde objecttypes kansen voor het aanbrengen van samenhang, omdat ze losgeweekt zijn van onherkenbare/onherkbruikbare samengevoegde objecttypes.|

**Relaties**

afgeleid van:
* [](#p2-objecttypes-zijn-herbruikbaar)

gerelateerd aan:
* [](#u3-informatiemodel-bruikbaar-in-object-georienteerde-relationele-en-graaf-gebaseerde-paradigma-s)

**Voorbeelden**

De BAG, de BRT en de BGT beschrijven alle drie informatie over gebouwen. Allen vanuit een specifiek oogpunt en met een specifiek doel. Heel vaak hebben deze datasets het dus over dezelfde <a>objecten</a> in de buitenwereld. Het is daarom interessant om de informatie uit deze datasets in <a>samenhang</a> te gebruiken.

In [](#logisch-imbag-pand), [](#logisch-imbgt-pand) en [](#logisch-imbrt-gebouw) is een representatie van de huidige logische informatiemodellen van de desbetreffende objecttypes uit deze datasets opgenomen.

<figure id="logisch-imbag-pand">
  <img src="media/imbag-pand.drawio.png" alt="IMBAG Pand objecttype" />
  <figcaption>Logisch informatiemodel Pand uit IMBAG</figcaption>
</figure>

<figure id="logisch-imbgt-pand">
  <img src="media/imbgt-pand.drawio.png" alt="BGT Pand objecttype" />
  <figcaption>Logisch informatiemodel Pand uit BGT</figcaption>
</figure>

<figure id="logisch-imbrt-gebouw">
  <img src="media/imbrt-gebouw.drawio.png" alt="BRT Gebouw objecttype" />
  <figcaption>Logisch informatiemodel Gebouw uit BRT</figcaption>
</figure>

Bij het in <a>samenhang</a> gebruiken van informatie over een specifiek <a>object</a> willen we de <a>gegevens</a> uit <a>informatieobjecten</a> over hetzelfde <a>object</a> (in dit geval een bestaand gebouw in de werkelijkheid) kunnen combineren. Dat betekent dat we de objecttypes willen kunnen combineren.

Wanneer we dit doen, zonder verdere aanpassing leidt dat tot een <a>logisch informatiemodel</a> zoals in [](#gebouw-geen-samenhang).

<figure id="gebouw-geen-samenhang">
  <img src="media/gebouw-geen-samenhang.drawio.png" alt="Geen samenhang gebouw" />
  <figcaption>Gebouw in samenhang?</figcaption>
</figure>

Deze samenvoeging roept echter verschillende vragen op. Eenzelfde <a>object</a> kan nu bijvoorbeeld meerdere waardes voor objectBeginTijd hebben, vanuit de BGT en BRT.
Daarnaast zijn er eigenschappen die niet verplaatsbaar zijn naar een andere context, bijvoorbeeld:

* bronactualiteit (brt)
* bronnauwkeurigheid (brt)
* mutatietype (brt)
* bronhouder (bgt)
* inOnderzoek (bgt)
* geconstateerd (bag)

en meer.

Voor deze eigenschappen is het niet gelijk duidelijk wat ze betekenen. Daarvoor moet men in de documentatie van de verschillende informatiemodellen duiken. Wanneer men dat bijvoorbeeld doet voor de eigenschap `bronactualiteit` van de BRT [[Catalogus-BRT]], dan ziet men de volgende definitie:

> De actualiteit van de gebruikte bron.

Deze eigenschap gaat dus klaarblijkelijk niet over een gebouw, maar over een bron. Zo moet men eigenlijk alle eigenschappen langs gaan om te bepalen wat het betekent en waar het precies over gaat. Dit maakt het lastig om automatisch gebruik te maken van deze informatie voor gebruik in samenhang.

Deze informatiemodellen voldoen dus nog niet aan het principe "Gebruik alleen <a>directe eigenschappen</a>". We zien dat dit silo-vormend werkt, omdat per eigenschap bekeken moet worden hoe het geïnterpreteerd moet worden, wat het onderwerp is, en of het gebruikt kan worden gezien relaties met andere <a>gegevens</a>. Het is dan ook niet gemakkelijk om op deze manier de informatie in <a>samenhang</a> te gebruiken.

In [](#logisch-imbag-pand-samenhang), [](#logisch-imbgt-pand-samenhang) en [](#logisch-imbrt-gebouw-samenhang) passen we dit principe wel toe. Daarnaast maken we gebruik van het construct Registratiegegevens uit NEN3610 om de registratiecontext van <a>gegevens</a> op een standaard manier te duiden.

<figure id="logisch-imbag-pand-samenhang">
  <img src="media/imbag-pand-samenhang.drawio.png" alt="IMBAG Pand objecttype voor samenhang" />
  <figcaption>Logisch informatiemodel Pand uit IMBAG voor gebruik in samenhang</figcaption>
</figure>

Voor het logisch informatiemodel van de BAG hebben we de geldigheidsinformatie van de BAG uitgedrukt in termen van Registratiegegevens van NEN3610. Daarnaast hebben we eigenschappen die niet direct over het <a>object</a> gaan verplaatst. Wanneer het <a>gegeven</a> over het <a>informatieobject</a> / voorkomen gaat, hebben we deze verplaatst naar het voorkomen. Wanneer dit over een brondocument gaat, hebben we het verplaatst naar een <a>objecttype</a> Brondocument. Verder hebben we een relatie toegevoegd tussen het voorkomen en een brondocument, met de rationale dat een brondocument een bron is voor een <a>informatieobject</a> / voorkomen in een registratie, en niet een bron is voor het daadwerkelijk <a>object</a> in de buitenwereld. Dit is weergegeven in [](#logisch-imbag-pand-samenhang).

<figure id="logisch-imbgt-pand-samenhang">
  <img src="media/imbgt-pand-samenhang.drawio.png" alt="BGT Pand objecttype voor samenhang" />
  <figcaption>Logisch informatiemodel Pand uit BGT voor gebruik in samenhang</figcaption>
</figure>

Voor het BGT Pand informatiemodel hebben we rondom de geldigheidsinformatie ook de NEN3610 Registratiegegevens toegepast. Vergelijkbaar als met de BAG hebben we ook gegeken welke <a>gegevens</a> als onderwerp het <a>object</a> zelf hebben en welke gaan over het <a>informatieobject</a>. Daarnaast zagen we ook hier dat er <a>gegevens</a> zijn die over de bron van het <a>informatieobject</a> gaan. In het geval van de BGT gaat het specifiek om de bronhouder. De definitie van de eigenschap `bronhouder` in [[Catalogus-BGT]] luidt:

> De bronhoudercode van het object.

Een bronhoudercode is een eigenschap van een bronhouder. Door dit als apart <a>objecttype</a> neer te zetten is dit direct duidelijk. Daarnaast biedt het aanknopingspunten met andere referentiedata rondom bronhouders (vaak overheidsorganisaties).

De eigenschap `inOnderzoek` geeft aan dat er een onderzoek loopt naar de <a>gegevens</a> in het <a>informatieobject</a> en is geen eigenschap die direct over het <a>object</a> zelf gaat.

Alle wijzigingen zijn afgebeeld in [](#logisch-imbgt-pand-samenhang).

<figure id="logisch-imbrt-gebouw-samenhang">
  <img src="media/imbrt-gebouw-samenhang.drawio.png" alt="BRT Gebouw objecttype voor samenhang" />
  <figcaption>Logisch informatiemodel Gebouw uit BRT voor gebruik in samenhang</figcaption>
</figure>

Bij het informatiemodel voor het BRT Gebouw splitsen we ook weer de <a>gegevens</a> voor de geldigheids- en registratietijdlijn af in de vorm van NEN3610 Registratiegegevens.
Ook hier verplaatsen we <a>gegevens</a> die niet direct over het <a>object</a> gaan naar andere <a>objecttypes</a>. Bijvoorbeeld de eigenschap `mutatietype`, met definitie:

> Het soort mutatie dat een [informatie]object als laatste ondergaan heeft.

En waardes:
* kwaliteitsverbetering
* werkelijke verandering
* modelwijziging
* andere bron

Het is duidelijk dat dit <a>gegevens</a> oplevert die niet direct over het <a>object</a> gaan, maar over de informatie over het <a>object</a>.

Daarnaast zijn de eigenschappen die gaan over de bron van <a>informatieobjecten</a> in een <a>objecttype</a> `Bron` geplaatst, vergelijkbaar als voor de BAG en de BGT.

<figure id="gebouw-samenhang">
  <img src="media/gebouw-samenhang-meta.drawio.png" alt="Samenhang gebouw" />
  <figcaption>Gebouw in samenhang</figcaption>
</figure>

Met het introduceren van een standaard manier om <a>gegevens</a> over <a>informatieobjecten</a> in de vorm van NEN3610 Registratiegegevens te modelleren, introduceren we een standaardconstruct om de context van <a>gegevens</a> uit verschillende registraties te vergelijken. Dit vergemakkelijkt het in <a>samenhang</a> gebruiken van deze gegevens, omdat die vertaalslag niet gemaakt hoeft te worden.

Daarnaast, door het toepassen van het principe voor directe eigenschappen kunnen de objecttypes die over het gemeenschappelijke <a>object</a> in de buitenwereld eenvoudiger gecombineerd worden.

In [](#gebouw-samenhang) is afgebeeld hoe een samenhangende set informatie over een gebouw er vervolgens uit zou kunnen zien, gegeven een combinatie van <a>gegevens</a> met een overlappende context. Omdat elk van de eigenschappen daadwerkelijk hetzelfde <a>object</a> als onderwerp heeft, zijn de <a>gegevens</a> gemakkelijker in <a>samenhang</a> te gebruiken. Een afnemer kan dan kiezen welke <a>gegevens</a> hij, uit deze set, interessant vindt voor zijn/haar toepassing.

## **P4**. Ieder informatiemodelelement heeft bijbehorend begrip
| | | |
|-|-|-|
| **id** | P4 |
| **Stelling** | Ieder informatiemodelelement moet verbonden zijn met een bijbehorend begrip in een begrippenkader over dat domein. |
| **Rationale** | Om <a>gegevens</a> in <a>samenhang</a> te kunnen gebruiken moet het eenvoudig zijn om te begrijpen wat een <a>gegeven</a> betekent, en hoe het geïnterpreteerd moet worden binnen een bepaald domein. Door objectypen en kenmerksoorten te duiden met expliciet gekoppelde begrippen, realiseren we dit op systematische wijze. |
| **Implicaties** | Er moet een begrip uitgewerkt worden voor ieder <a>objecttype</a> en voor iedere kenmerksoort. Ieder <a>objecttype</a> en iedere kenmerksoort krijgt een expliciete verwijzing naar een begrip |

<!-- ## **P4**. Onderscheid in verschillende soorten metadata 

Er zijn vier verschillende 'soorten' metadata in de SOR: -->