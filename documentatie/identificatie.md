## Identificatie

Identificatie is een belangrijk aspect van informatiemodellering. Een identificatie is een middel om het onderwerp van gegevens te duiden.
In het kader van de SOR hanteren we de volgende uitgangspunten rondom identificatie.

*Uitgangspunten*

1. Een objectidentificatie binnen Nederland is globaal uniek. [[EMSO]]
1. De SOR kent een functionele objectidentificatie. De functionele objectidentificatie is systeem (implementatie) onafhankelijk.
   Een functionele objectidentificatie kan een of meer technische identificaties hebben. [[EMSO]]
1. Een objectidentificatie mag niet veranderen in de levensloop van het object zodat tijdreizen maximaal wordt gefaciliteerd. [[EMSO]]
1. Tijdens de transitieperiode naar de SOR facilieren we samenhang tussen gebruik van huidige basisregistratie-identificaties en de objectidentificatie van de SOR. [[EMSO]]
1. Alle onderwerpen van gegevens, waar individueel naar verwezen moet kunnen worden, krijgen een identificatie toegewezen.

Een belangrijk punt, gesteund door bovenstaande uitgangspunten, is dat we geen informatieobjecten identificeren, maar objecten. Ofwel, we identificeren de onderwerpen van gesprek (gebouw, weg, brug, etc.) en niet de gegevens over de onderwerpen.

### Modellering van identificatie

Voor de modellering van de functionele identificatie passen we het modelleerpatroon van NEN 3610 ([](#nen-3610-geo-object)).

<figure id="nen-3610-geo-object">
  <img src="media/nen-3610-geo-object.png" alt="nen-3610-geo-object">
  <figcaption>NEN 3610 (ontw 2021) Modelleerpatroon GeoObject</figcaption>
</figure>

Hierin krijgen objecten een attribuut `identificatie` en een attribuut `domein`, waarbij:
* `identificatie` de unieke identificatie van het object is, en
* `domein` de unieke verwijzing naar een registratie van informatieobjecten is.

Ieder informatieobject heeft ook een set metadata genaamd `Registratiegegevens` waarin de gegevens over het informatieobject staan opgenomen, waaronder het gegeven met eigenschap `versie`. Dit is de versie-aanduiding van het informatieobject. Wanneer er een gegevenswijziging is in een informatieobject, zullen de `identificatie` en `domein` nooit wijzigen, maar de `versie` wel.

<aside class="note">
 Er is nog geen keuze gemaakt of een informatieobject zelf ook een identificatie toegewezen moet krijgen. Wanneer een informatieobject in de SOR altijd alleen over één geidentificeerd object gaat is het niet nodig om een identificatie voor een informatieobject te introduceren, gezien deze af te leiden is aan de combinatie van `identificatie`, `domein` en `versie`. Echter, wanneer er gekozen wordt om informatieobjecten te introduceren die meer dan één identificeerbaar object beschrijft, én het noodzakelijk is om naar een geheel informatieobject te kunnen verwijzen, dan is het wel nodig om een identificatie voor informatieobjecten te introduceren. Dit kan op het niveau van `Registratiegegevens`.
</aside>

**Openstaande vragen:**
1. Hoe moet de identificatie er uitzien?
2. Hoet gaat domein werken gegeven dat er momenteel geen register van registraties geidentificeerd door URI's bestaat?

#### Identificatie in Linked Data

De SOR moet compatibel zijn met, en ontsluitbaar zijn als, Linked Data. Linked data gebruikt http(s) URI's om onderwerpen van gegevens te duiden. Het ligt daarom voor de hand om een URI af te kunnen leiden uit de functionele identificatie conform NEN 3610.

Er zijn verschillende URI strategieen in omloop, waaronder:
- [Aanzet tot een nationale URI-Strategie voor Linked Data van de Nederlandse overheid](https://www.geonovum.nl/uploads/documents/D1-2013-09-19_Towards_a_NL_URI_Strategy.pdf)
- NEN 3610 (ontw 2021)
- [API- en URI-strategie Digitaal Stelsel Omgevingswet](https://iplo.nl/digitaal-stelsel/aansluiten/standaarden/api-en-uri-strategie/)

Wat deze URI strategieen gemeen hebben zijn dat ze in ieder geval volgende onderdelen van een URI onderscheiden.

- `http` of `https` - het protocol van de URI
- `domein` - het hoofddomein van de URI
- `type` - het objecttype van het onderwerp
- `referentie` - de referentie naar het specifiek onderwerp

Voor de SOR moet nog bepaald worden welke URI strategie gehanteerd gaat worden, en hoe URIs afgeleid kunnen worden.

### Identificatie in verschillende SOR-transitiescenario's

...
