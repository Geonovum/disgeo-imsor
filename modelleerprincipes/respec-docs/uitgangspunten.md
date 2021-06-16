# Uitgangspunten

De gebruikte definities en de modelleerprincipes zijn geformuleerd met een aantal uitgangspunten in gedachten (deze hebben niet alleen betrekking op het modelleren, en zijn van belang voor het project in zijn geheel).

## **U1**. Informatiemodel bevordert samenhang

| | | |
|-|-|-|
| **id** | U1 |
| **Stelling** | Het informatiemodel (IMSOR) bevordert samenhang tussen informatieobjecten in registraties |
| **Rationale** | Het uiteindelijke doel van de SOR is het verbeteren van de samenhang tussen informatieobjecten over de verschillende geo-basisregistraties en aanpalende sectorregistraties. Om dit doel te realiseren moet ook het informatiemodel deze samenhang bevorderen. |
| **Implicaties** | Het model bevat basisobjecttypes die terug te koppelen zijn aan alle huidige registraties, maar biedt ook ruimte voor het opnemen van vrijwillige objecttypes vanuit verschillende registraties - dit vereist ook samenhang in de structuur. |

<!-- **Relaties**

TODO

**Voorbeelden**

TODO -->

## **U2**. Informatiemodel maakt gebruik van relevante nationale standaarden

| | | |
|-|-|-|
| **id** | U2 |
| **Stelling** | De gegevensmodellering zal plaatsvinden conform relevante standaarden voor informatiemodellering. |
| **Rationale** | Het uiteindelijke doel van de SOR is het verbeteren van de samenhang tussen informatieobjecten over de verschillende geo-basisregistraties en aanpalende sectorregistraties. Om dit doel te realiseren moet de toegepaste modelleermethodiek conform de hiervoor in gebruik zijnde standaarden zijn. |
| **Implicaties** | Het model maakt gebruik van de in deze standaarden aanwezige middelen om informatie te modelleren. Als deze niet afdoende zijn, kan de SOR een eigen extensie op deze standaarden definiëren. |

De gegevensmodellering zal plaatsvinden conform het Metamodel Informatie Modellering [[MIM]].

<aside class="note">Mochten er modelleerconstructies nodig zijn die niet in MIM zijn gestandaardiseerd, dan zal het modelleerteam een MIM uitbreiding hiervoor beschrijven en afstemmen met het MIM beheerteam.</aside>

Het informatiemodel voor de samenhangende objectenregistratie zal zodanig worden opgesteld dat deze volledig aansluit op de nieuwe versie van het basismodel geo-informatie [[NEN3610-2021-ontw]]. 

De ontwikkeling van het informatiemodel wordt daarnaast zoveel als mogelijk afgestemd met de nieuwe versie van de Ordeningsregels voor gegevens in de bouw, deel 1 [[NEN2660-1-2021-ontw]] en 2 [[NEN2660-2-2021-ontw]].

<aside class="note">De geldende versies van zowel het Basismodel geo-informatie [[NEN3610-2011]] als de Ordeningsregels voor gegevens in de bouw [[NEN2660-1996]] zijn verouderd en worden momenteel herzien. De nieuwe versies worden verwacht in de loop van 2021. De SOR zal aansluiten op deze nieuwe versies. Vanuit de SOR zijn aandachtspunten voor deze nieuwe versies aangedragen en ze zijn zoveel mogelijk op elkaar afgestemd. Als er punten zijn waar deze afstemming niet voldoende blijkt te zijn geslaagd, zal vanuit de SOR hierop gewezen worden en een oplossingsrichting gekozen worden.</aside>

De ontwikkeling van het informatiemodel wordt tenslotte zoveel als mogelijk afgestemd met andere relevante nationale, Europese en wereldwijde standaarden, zoals bijvoorbeeld [CityGML](https://www.ogc.org/standards/citygml) en de [INSPIRE standaarden](https://inspire.ec.europa.eu/data-specifications/2892).

## **U3**. Informatiemodel bruikbaar in object-georienteerde, relationele, en graaf-gebaseerde paradigma's

| | | |
|-|-|-|
| **id** | U3 |
| **Stelling** | Het informatiemodel (IMSOR) moet bruikbaar zijn voor het uitdrukken van informatie in in object-georiënteerde, relationele, en graaf-gebaseerde paradigma's |
| **Rationale** | Het moet mogelijk zijn om de informatie in de SOR op verschillende manieren te toe te passen. Het informatiemodel moet niet tegenwerken dat objecten binnen de genoemde paradigma's gerepresenteerd kunnen worden. In het bijzonder moet het informatiemodel ook het gebruik van linked data ondersteunen. |
| **Implicaties** | Informatiemodellen in een graaf-gebaseerd paradigma zijn per definitie genormaliseerd. Met genormaliseerd bedoelen wij dat het een <a>informatieobject</a> over een <a>object</a> alleen <a>directe eigenschappen</a> van het <a>object</a> beschrijft. Ofwel, alle gegevens in het <a>informatieobject</a> gaan direct over het object. In graaf-gebaseerd paradigma's representeert iedere node in een graaf één <a>object</a> in een UoD. Dit is niet altijd het geval in object-georienteerde of relationele modellen, waarin vaak denormalisatie plaatsvindt. |

**Relaties**

gerelateerd aan:
* [](#u1-informatiemodel-bevordert-samenhang)

**Voorbeelden**
Een voorbeeld van een probleemgeval zijn de eigenschappen `documentnummer` en `documentdatum` die in de BAG op elk objecttype voorkomen [[Catalogus-BAG]]. Neem bijvoorbeeld het objecttype Pand.

<figure id="imbag-pand">
  <img src="media/imbag-pand.png" alt="IMBAG Pand objecttype" />
  <figcaption>Het objecttype Pand uit IMBAG</figcaption>
</figure>

Het objecttype beschrijft eigenschappen van Pand zoals `oorspronkelijk bouwjaar` en `geometrie`, maar ook `documentdatum` en `documentnummer`. Echter, wanneer je gaat kijken naar de definitie van deze laatste twee eigenschappen, wordt het duidelijk dat dit geen <a>directe eigenschappen</a> zijn van Pand objecten.

De definitie van `documentdatum` luidt:
> De datum waarop het brondocument is vastgesteld op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een pand heeft plaatsgevonden.

De definitie van `documentnummer` luidt:
> De unieke aanduiding van het brondocument op basis waarvan een opname, mutatie of een verwijdering van gegevens ten aanzien van een pand heeft plaatsgevonden binnen een gemeente.

Terwijl de definitie van `oorspronkelijk bouwjaar` is:
> De aanduiding van het jaar waarin een pand oorspronkelijk als bouwkundig gereed is of zal worden opgeleverd.

Uit bovenstaande definities [[Catalogus-BAG]] wordt duidelijk dat het hier om twee verschillende dingen gaat. Aan de ene kant het pand-object met bouwjaar en aan de andere kant het brondocument op basis waarvan de gegevens over het pand-object tot stand zijn gekomen. Het combineren van deze twee objecten tot één, levert echter problemen op bij het representeren in een graafgebaseerd paradigma. Dit probleem wordt nog groter wanneer de wens bestaat om informatie uit andere registraties te verbinden aan objecten van dit type. Stel dat we een registratie hebben met nog meer informatie over brondocumenten (auteurs, laatste wijziging, etc.), of registraties met andere informatie over dezelfde panden. Waar en hoe moeten er nu relaties mee gelegd worden?

## **U4**. Informatiemodel is voldoende flexibel en uitbreidbaar

| | | |
|-|-|-|
| **id** | U4 |
| **Stelling** | Het informatiemodel (IMSOR) moet voldoende flexibel, uitbreidbaar en inkrimpbaar zijn wat betreft objecttypen, eigenschappen en het al dan niet verplicht zijn hiervan.|
| **Rationale** | De SOR moet geleidelijk en organisch kunnen worden ingevoerd om de transitie soepel te laten verlopen. Objecttypen en eigenschappen moeten kunnen worden toegevoegd, verwijderd, het verplichte karakter ervan moet kunnen wijzigen al naar gelang de behoeften van de gebruikers. |
| **Implicaties** | Het informatiemodel van de SOR moet tot op zekere hoogte een 'permanent BETA' of 'levende standaard' karakter krijgen. Bepaald moet worden welke mate van flexibiliteit nog hanteerbaar is voor de bronhouders en afnemers. |

**Relaties**
- [Beleidsvisie](#vanuit-beleidsvisie-samenhangende-objectenregistratie) punt 3 en 4.

<!-- **Voorbeelden**

TODO -->


## **U5**. Informatiemodel is afgestemd op gebruik door de doelgroepen

| | | |
|-|-|-|
| **id** | U5 |
| **Stelling** | Het informatiemodel (IMSOR) moet zijn afgestemd op het gebruik door de verschillende doelgroepen. |
| **Rationale** |  |
| **Implicaties** | Het informatiemodel wordt opgesteld op basis van functionele behoeften die zijn afgeleid uit use cases en waarbij de prioriteiten van de doelgroepen worden afgewogen. |

De functionele behoeften zijn beschreven in het document Eisen aan model samenhangende objectenregistratie [[EMSO]]. 

Daarnaast maken we gebruik van het principe van de *'priority of constituencies'*, waarbij de belangen van gebruikers boven de belangen van softwareleveranciers gaan, die weer boven belangen van informatiemodelleurs gaan, die weer boven het belang van zuiver modelleren gaat.

De groep "gebruikers" kan nog verder worden onderverdeeld op basis van de genoemde doelgroepen in de beleidsvisie. De prioriteiten van belangen wegen we dan als volgt af: 

  1. Belang van gebruikers:
    1. Overheidsgebruikers, die verplicht gebruik dienen te maken van de geo-basisregistraties voor hun processen;
    1. Open data gebruikers, zoals bedrijven die waarde toevoegen aan gegevens in de basisregistraties en nieuwe producten ontwikkelen;
    1. Eindgebruikers van de informatie, zoals burgers en bedrijven.
  1. Belang van softwareleveranciers, die het informatiemodel moeten implementeren (niet als opslagmodel, maar wel voor uitwisseling).
  1. Belang van informatiemodelleurs, die het informatiemodel lezen en delen ervan toepassen in aanpalende domeinen (er op aansluiten).
  1. Belang van zuiver modelleren.

**Relaties**
- [Beleidsvisie](#vanuit-beleidsvisie-samenhangende-objectenregistratie) punt 5.

<!-- **Voorbeelden**

TODO -->
