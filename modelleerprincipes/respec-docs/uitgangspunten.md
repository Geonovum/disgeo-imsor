# Uitgangspunten

De gebruikte definities en de modelleerprincipes zijn geformuleerd met een aantal uitgangspunten in gedachten (deze hebben niet alleen betrekking op het modelleren, en zijn van belang voor het project in zijn geheel).

## **U1**. Informatiemodel bevordert samenhang

| | | |
|-|-|-|
| **id** | U1 |
| **Stelling** | Het informatiemodel (IMSOR) bevordert samenhang tussen informatieobjecten in registraties |
| **Status** | Vastgesteld |
| **Rationale** | Het uiteindelijke doel van de SOR is het verbeteren van de samenhang tussen informatieobjecten over de verschillende geo-basisregistraties en aanpalende sectorregistraties. Om dit doel te realiseren moet ook het informatiemodel deze samenhang bevorderen. |
| **Implicaties** | Het model bevat basisobjecttypes die samen te stellen zijn uit alle huidige registraties, maar biedt ook ruimte voor het opnemen van vrijwillige objecttypes vanuit verschillende registraties - dit vereist ook samenhang in de structuur. |

<!-- **Relaties**

TODO

**Voorbeelden**

TODO -->

## **U2**. Informatiemodel maakt gebruik van relevante standaarden

| | | |
|-|-|-|
| **id** | U2 |
| **Stelling** | De gegevensmodellering zal plaatsvinden conform relevante standaarden voor informatiemodellering. |
| **Status** | Vastgesteld |
| **Rationale** | Het uiteindelijke doel van de SOR is het verbeteren van de samenhang tussen informatieobjecten over de verschillende geo-basisregistraties en aanpalende sectorregistraties. Om dit doel te realiseren moet de toegepaste modelleermethodiek conform de hiervoor in gebruik zijnde standaarden zijn. |
| **Implicaties** | Het model maakt gebruik van de in deze standaarden aanwezige middelen om informatie te modelleren. Als deze niet afdoende zijn, kan de SOR een eigen extensie op deze standaarden definiëren. |

De gegevensmodellering zal plaatsvinden conform het Metamodel Informatie Modellering [[MIM]].

<aside class="note">Mochten er modelleerconstructies nodig zijn die nog niet zijn opgenomen in een standaard, of die tegenstrijdig zijn met een van de standaarden, dan zal het modelleerteam dit bespreken met de relevante partijen die de standaarden beheren om te onderzoeken of de betreffende standaard hierop aangepast kan worden.</aside>

Het informatiemodel voor de samenhangende objectenregistratie zal zodanig worden opgesteld dat deze volledig aansluit op de nieuwe versie van het basismodel geo-informatie [[NEN3610-2022]]. 

De ontwikkeling van het informatiemodel wordt daarnaast zoveel als mogelijk afgestemd met de nieuwe versie van de Ordeningsregels voor gegevens in de bouw, deel 1 [[NEN2660-1-2021-ontw]] en 2 [[NEN2660-2-2021-ontw]].

<aside class="note">De geldende versies van zowel het Basismodel geo-informatie [[NEN3610-2011]] als de Ordeningsregels voor gegevens in de bouw [[NEN2660-1996]] zijn verouderd en worden momenteel herzien. De nieuwe versies worden verwacht in de loop van 2021. De SOR zal aansluiten op deze nieuwe versies. Vanuit de SOR zijn aandachtspunten voor deze nieuwe versies aangedragen en ze zijn zoveel mogelijk op elkaar afgestemd. Als er punten zijn waar deze afstemming niet voldoende blijkt te zijn geslaagd, zal vanuit de SOR hierop gewezen worden en een oplossingsrichting gekozen worden.</aside>

De ontwikkeling van het informatiemodel wordt tenslotte zoveel als mogelijk afgestemd met andere relevante nationale, Europese en wereldwijde standaarden, zoals bijvoorbeeld [CityGML](https://www.ogc.org/standards/citygml) en de [INSPIRE standaarden](https://inspire.ec.europa.eu/data-specifications/2892).

## **U3**. Informatiemodel bruikbaar in object-georienteerde, relationele, hiërarchische en graaf-gebaseerde paradigma's

| | | |
|-|-|-|
| **id** | U3 |
| **Stelling** | Het informatiemodel (IMSOR) moet bruikbaar zijn voor het uitdrukken van informatie in in object-georiënteerde, relationele, hiërarchische, en graaf-gebaseerde paradigma's |
| **Status** | Vastgesteld |
| **Rationale** | Het moet mogelijk zijn om de informatie in de SOR op verschillende manieren te toe te passen. Het informatiemodel moet niet tegenwerken dat objecten binnen de genoemde paradigma's gerepresenteerd kunnen worden. Object-georienteerde, relationele en hierarchische (JSON, XML) representatie van informatie wordt al breed toegepast, en graafgebaseerde paradigma's, zoals linked data, zijn sterk in opkomst. Het informatiemodel moet gebruikt kunnen worden in deze paradigma's. |
| **Implicaties** | Informatiemodellen in een graaf-gebaseerd paradigma zijn per definitie genormaliseerd. Met genormaliseerd bedoelen wij dat het een <a>informatieobject</a> over een <a>object</a> alleen <a>directe eigenschappen</a> van het <a>object</a> beschrijft. Ofwel, alle gegevens in het <a>informatieobject</a> gaan direct over het object. In graaf-gebaseerd paradigma's representeert iedere node in een graaf één <a>object</a> in een UoD. Dit is niet altijd het geval in object-georienteerde of relationele modellen, waarin vaak denormalisatie plaatsvindt. |

<aside class="note">
  Gegevensvalidatie is met name een functionele eis bij het registreren van gegevens. Een aandachtspunt is daarom dat de genoemde modelleerparadigma's verschillende mogelijkheden bieden wat betreft validatie.
</aside>

**Relaties**

gerelateerd aan:
* [](#u1-informatiemodel-bevordert-samenhang)

**Voorbeelden**
De BRT kent eigenschappen `brontype`, `bronbeschrijving`, `bronactualiteit`, `bronnauwkeurigheid` die op elk objecttype voorkoment [[Catalogus-BRT]]. Neem bijvoorbeeld het objecttype Gebouw.

<figure id="imbrt-gebouw">
  <img src="media/imbrt-gebouw.png" alt="IMBRT Gebouw objecttype" />
  <figcaption>Het objecttype Gebouw uit IMBRT</figcaption>
</figure>

Het objecttype omvat eigenschappen van een gebouw zoals `hoogte` en `geometrie`, maar ook bovengenoemde eigenschappen zoals `brontype` en `bronnauwkeurigheid`. Wanneer je de definitie van deze eigenschappen gaat opzoeken in de tekstuele documentatie van de BRT, vind je het volgende:

> Het brontype, de bronbeschrijving, bronactualiteit en bronnauwkeurigheid geven informatie over de bron van het geo-object.

Daarnaast kun je de volgende definities vinden van deze eigenschappen:

> brontype - Het type van de gebruikte bron.
>
> bronbeschrijving - De beschrijving van de gebruikte bron.
>
> bronacatualiteit - De actualiteit van de gebruikte bron.
>
> bronnauwkeurigheid - De nauwkeurigheid van de gebruikte bron in meters.

Vergelijk dat met de definitie van een gegeven zoals hoogte:

> hoogte - De hoogte van het object (t.o.v. het maaiveld of t.o.v. NAP).
>
> geometrie - De geometrie van een gebouw object.

Uit bovenstaande definities [[Catalogus-BRT]] wordt duidelijk dat het bij deze attributen om twee verschillende objecten gaat. Aan de ene kant het gebouw-object met hoogte, geometrie etc., en aan de andere kant een bron op basis waarvan de gegevens over het gebouw-object tot stand zijn gekomen. Het combineren van deze twee objecten tot één, levert echter problemen op bij het representeren in een graafgebaseerd paradigma. Dit probleem wordt nog groter wanneer de wens bestaat om informatie uit andere registraties te verbinden aan objecten van dit type. Stel dat we een registratie hebben met nog meer informatie over bronnen (actor, precisie, verantwoordelijke partij, etc.), of registraties met andere informatie over dezelfde gebouwen, maar met een andere brongegevens. Hoe zou je deze informatie in dat geval in samenhang kunnen brengen? Dit zou alleen kunnen door voor elk gegeven handmatig te bepalen wat het onderwerp precies is en vervolgens met maatwerk voor iedere combinatie een oplossing proberen te vinden.<br>Hoewel erin de BRT bedoeld is om deze brongegevens als metadata te beschouwen, is dit niet af te leiden uit het informatiemodel en de resulterende informatie. Daarmee is het ook niet zonder modelaanpassing toe te passen in een graafgebaseerd paradigma.

## **U4**. Informatiemodel is voldoende flexibel

| | | |
|-|-|-|
| **id** | U4 |
| **Stelling** | Het informatiemodel (IMSOR) moet voldoende flexibel, aanpasbaar, uitbreidbaar en inkrimpbaar zijn wat betreft objecttypen, eigenschappen en het al dan niet verplicht zijn hiervan.|
| **Status** | Vastgesteld |
| **Rationale** | De SOR moet geleidelijk en organisch kunnen worden ingevoerd om de transitie soepel te laten verlopen. Objecttypen en eigenschappen moeten kunnen worden toegevoegd, verwijderd, het verplichte karakter ervan moet kunnen wijzigen al naar gelang de behoeften van de gebruikers. |
| **Implicaties** | Het informatiemodel van de SOR moet tot op zekere hoogte een 'levende standaard' karakter krijgen. Bepaald moet worden welke mate van flexibiliteit nog hanteerbaar is voor de bronhouders en afnemers.<br>Dit uitgangspunt impliceert ook dat er een passende versioneringsstrategie moet komen voor het informatiemodel en de informatieproducten die daarbij horen. Wanneer de SOR tot stand komt op basis van mappings op bestaande registraties zullen ook deze aan een passende beheer- en versioneringsstrategie onderhevig moeten zijn. |

**Relaties**
- [Beleidsvisie](#vanuit-beleidsvisie-samenhangende-objectenregistratie) punt 3 en 4.
- [Generiek beheerplan standaarden comform BOMOS - Geonovum](https://www.geonovum.nl/documents/geonovum-generiek-beheerplan-standaarden-v11pdf)

<!-- **Voorbeelden**

TODO -->

## **U5**. Informatiemodel is afgestemd op gebruik door de doelgroepen

| | | |
|-|-|-|
| **id** | U5 |
| **Stelling** | Het informatiemodel (IMSOR) moet zijn afgestemd op het gebruik door de verschillende doelgroepen. |
| **Status** | Vastgesteld |
| **Rationale** | Het informatiemodel moet bruikbaar zijn voor de doelen van de SOR en de belangen van verschillende stakeholders. Als deze belangen onduidelijk of tegenstrijdig zijn biedt dit uitgangspunt handvaten om ze te kunnen afwegen en een richting te kiezen. |
| **Implicaties** | Het informatiemodel wordt opgesteld op basis van functionele behoeften die zijn afgeleid uit use cases en waarbij de belangen van de doelgroepen worden afgewogen. |

De functionele behoeften zijn beschreven in het document Eisen aan model samenhangende objectenregistratie [[EMSO]]. De informatiemodelleurs bepalen niet WAT er in het informatiemodel komt; maar wel HOE het gemodelleerd wordt. Vaak zijn er verschillende oplossingsrichtingen waar voor- en nadelen aan zitten.

Bij zo'n keuze tussen oplossingsrichtingen maken we een afweging tussen de belangen van gebruikers, de belangen van softwareleveranciers, en  de belangen van informatiemodelleurs.

De groep "gebruikers" kan nog verder worden onderverdeeld op basis van de genoemde doelgroepen in de beleidsvisie. We nemen de belangen van de volgende doelgroepen mee:

  - Belang van gebruikers:
    - Overheidsgebruikers, die verplicht gebruik dienen te maken van de geo-basisregistraties voor hun processen;
    - Open data gebruikers, zoals bedrijven die waarde toevoegen aan gegevens in de basisregistraties en nieuwe producten ontwikkelen;
    - Eindgebruikers van de informatie, zoals burgers en bedrijven.
  - Belang van softwareleveranciers, die het informatiemodel moeten implementeren (niet als opslagmodel, maar wel voor uitwisseling).
  - Belang van informatiemodelleurs, die het informatiemodel lezen en delen ervan toepassen in aanpalende domeinen (er op aansluiten).

**Relaties**
- [Beleidsvisie](#vanuit-beleidsvisie-samenhangende-objectenregistratie) punt 5.

<!-- **Voorbeelden**

TODO -->