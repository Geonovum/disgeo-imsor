# Waardelijsten in geo-informatiemodellering
Dit document geeft een overzicht van hoe waardelijsten worden gemodelleerd in informatiemodellen in het geo-domein, zowel internationaal (in INSPIRE context) als nationaal (in IMGeo, dat conform NEN3610 is gemodelleerd). 

## ISO 19103: Geographic information - Conceptual schema language
Deze standaard is het fundament onder de modelleerwijze die wordt gevolgd in het geo-domein bij het maken van informatiemodellen. Denk hierbij onder andere aan de informatiemodellen van INSPIRE. In Nederland is NEN 3610 hier op gebaseerd, waar de Nederlandse sectormodellen in het geo-domein weer op zijn gebaseerd. Een voorbeeld hiervan is IMGeo, het informatiemodel voor de BGT.

We baseren ons op ISO 19103:2015. In ISO 19103 heb je twee modelelementen die je zou kunnen gebruiken voor waardelijsten: `Enumeration` en `Codelist`. 

### Enumeration
Binnen ISO 19103 is een Enumeration een

> list of valid mnemonic identifiers. Attributes of an enumerated type shall take values only from this list.
en 

> As the values of enumerated types are concepts, each value shall have a definition for the value.
> NOTE Values of enumerated types that have overlapping meanings or with some internal structure can be further described in separate tables outside of the UML model.

De toegestane waarden van een enumeratie zijn dus in de ISO 19103 beschouwing concepten, i.e. begrippen. 
- Zie ISO definitie van [concept](https://isotc211.geolexica.org/concepts/64/), [value](https://isotc211.geolexica.org/concepts/489/) en [value domain](https://isotc211.geolexica.org/concepts/490/).

Enumeraties worden cf ISO 19103 gedefineerd in UML als een klasse, waarbij de attributen de toegestane waarden representeren. Daarbij geldt de naamgevingsconventie voor attribuutnamen; de gegeven naam zou 'mnemonic' i.e. goed te herinneren moeten zijn of een naam die breed geaccepteerd is. 

Het wordt aangeraden om geen betekenisloze namen te gebruiken voor de waardelijst waarden, ook niet als de waardes buiten het model nader beschreven worden. Om de concepten begrijpelijk te maken wordt het wel aangeraden om labels en definities in natuurlijke taal aan het concept toe te voegen, ofwel in het UML model, ofwel daarbuiten.

Enumeraties zijn bedoeld voor het specificeren van een set waarden die volledig is. Dit kan gaan om inhoudelijke volledigheid, bv de zeven kleuren van de regenboog; maar ook een enumeratie die stabiel en onveranderlijk is binnen een versie van het model kun je als enumeratie opnemen. 

> If extensions to an enumerated list are expected during the lifetime of the schema version, a code list shall be used.

Als de enumeratie niet stabiel is, moet hiervoor een codelist gebruikt worden. Iets als de MIM Referentielijst kent ISO 19103 niet.

### Code list

Een codelijst is binnen ISO 19103 niet meer dan een open enumeratie. 

> Code lists shall be used if none or only a few of the allowed values are known, like a likely set, or an initial set.

Het wordt aangeraden om de codelijst alleen uit te breiden, en in de uitbreiding niet de al aanwezige waarden te vervangen door de naam of definitie te veranderen. Het uitbreiden kan gebeuren door dezelfde beheerorganisatie die het informatiemodel beheert, maar ook door een andere organisatie of de gebruiker. Dit verschilt per codelijst. Als de hele codelijst inhoud door een externe organisatie wordt beheerd, kan hiernaar worden verwezen via een tagged value `codeList` die refereert naar de externe codelijst. In zo'n geval zijn alleen de waarden van die externe lijst geldige waarden.

Verder wordt aangeraden om een referentie naar de codelijst in de data op te nemen, bij die gegevens die een item uit een codelijst als waarde hebben. Dit helpt gebruikers om de data te interpreteren.

## INSPIRE

De meeste waardelijsten zijn in INSPIRE codelijsten, omdat ze uitgebreid mogen worden door de lidstaten. Alleen als een lijst duidelijk uitputtend is, wordt een enumeratie gebruikt. 

Een waardelijst kan in INSPIRE een eenvoudige set van waarden zijn, maar ook een collectie van waarden met een interne, bijvoorbeeld hiërarchische structuur. In beide gevallen wordt een codelijst gebruikt. 

### Model
In het UML model van elk INSPIRE thema worden de codelijsten gedefinieerd. Ze hebben een naam, definitie en soms ook waardes; maar alle INSPIRE codelijsten worden extern beheerd. In het UML model wordt de URN van de codelijst vastgelegd zodat deze extern beheerde bron bekend is. Dit kan zowel een geversioneerde als een versieloze verwijzing zijn. Waardes worden eventueel (niet altijd) in het UML model bij de codelijst opgenomen, ter ondersteuning voor de lezer.  

Elke waarde heeft een begrijpelijke naam in lowercamelcase en een definitie in het Engels binnen het UML model. 

### Codelijst register
INSPIRE heeft een [codelijst register](https://inspire.ec.europa.eu/codelist) waarin alle codelijsten en hun waarden zijn opgenomen. Elke codelijst, en elke waarde heeft een eigen URI Identifier. De namen en defininities zijn meestal in meerdere talen beschikbaar. Waarden kunnen een hierarchische relatie hebben met een andere waarde.

### Implementatie in GML
Binnen INSPIRE wordt GML gebruikt voor de uitwisseling van gegevens. Uit de UML modellen zijn GML Application Schemas gegenereerd.

In de INSPIRE GML implementatie wordt een gegeven dat als waardetype een codelijst heeft, geïmplementeerd als een XML element van het type `gml:ReferenceType`. 

De GML standaard definieert dit type met als reden:
> In order to support the encoding of properties whose value is provided remotely by-reference

In GML is dit type zo gedefinieerd dat je de waarde moet opnemen als hyperlink, waarbij gebruik gemaakt wordt van de Xlink standaard van het W3C. De waarde van het `xlink:href` attribuut wordt gevuld met een HTTP URI, die verwijst naar het INSPIRE codelist register.

Een voorbeeld van INSPIRE GML data met een codelijst waarde: 

`au:nationalLevel` is in dit voorbeeld een gegeven van een instantie van  `AdministrativeUnit`, vergelijkbaar met het NEN3610 concept Registratief Gebied. Het gaat hier om de administratieve eenheid Nederland. 

`
<au:nationalLevel xlink:href="http://inspire.ec.europa.eu/codelist/AdministrativeHierarchyLevel/1stOrder" xlink:title="1stOrder"></au:nationalLevel>`

Meer lezen: [WeTransform blog over INSIPRE Codelists](https://www.wetransform.to/news/2021/07/26/INSPIRE-codelists/).

## IMGeo

Het IMGeo informatiemodel is ontwikkeld in 2010 - 2012 toen INSPIRE nog niet zo ver was. De werkwijze wijkt daarom op details iets af. 

### Model

In het UML model van IMGeo worden alle waardelijsten als `<<codelist>>` gedefinieerd. De waarden zijn IN het model gedefiniëerd, omdat het belangrijk was om de waardelijsten onder hetzelfde release management / beheer regime te hebben als de rest van het informatiemodel. Als een waardelijst waarde wijzigt, betekent dit een wijziging van het informatiemodel en dus een nieuwe versie van de IMGeo standaard. Omdat er toen nog geen goede manier voorhanden was om waardelijsten buiten het model te beheren, is ervoor gekozen ze onderdeel van het UML model te maken. 

### Implementatie in GML
Uit het informatiemodel wordt een GML Application schema gegenereerd plus een bestand in RDF-XML serialisatie dat alle waardelijsten en -waardes bevat, uitgedrukt in de SKOS vocabulaire. Deze SKOS waardelijsten zijn [gepubliceerd](https://register.geostandaarden.nl/waardelijst/imgeo/20140401/) in het [technisch register van Geonovum](https://register.geostandaarden.nl). 

Er is voor SKOS gekozen omdat de GML werkgroep rond die tijd had bepaald dat externe waardelijsten niet meer als `gml:Dictionary`, maar middels de SKOS vocabulaire moesten worden uitgedrukt. 

Uit GML 3.3: 
> Definition and Dictionary encoding is part of the GML schema as a stop-gap, pending the availability of a suitable general purpose dictionary model. Since the GML Dictionary schema was developed, standards on
this topic within the semantic web community have emerged and matured. In particular best-practice is to
generally use URIs for referring to items in vocabularies, and RDF (OWL, SKOS) for encoding their
descriptions. [...] The GML Schema for definitions and dictionaries was previously used for generic
definitions and code lists but is now deprecated for these purposes.

In de IMGeo GML implementatie wordt een gegeven dat als waardetype een codelijst heeft, geïmplementeerd als een XML element van het type `gml:CodeType`. 

Dit GML type is 
> a generalized type to be used for a term, keyword or name.

Het type specificeert dat je de term als string opneemt met een XML attribuut `codeSpace`, waarin de URI verwijst naar de context van de term (i.e. het begrippenkader of iets vergelijkbaars). 

In IMGeo ziet dat er zo uit in de data: 

`<imgeo:plus-type codeSpace="http://www.geostandaarden.nl/imgeo/def/2.1#TypeBakPlus">afval apart plaats</imgeo:plus-type>`

Uit de tekst van GML 3.3. blijkt dat INSPIRE hierin de juiste keuze heeft gemaakt door `gml:ReferenceType` te gebruiken in plaats van `gml:CodeType`: 
> `gml:CodeType` is a generalized type to be used for assigning a term, keyword or
name.

> NOTE Elements with `type='gml:CodeType'` are used to assign a name to a
feature or other resource. `gml:ReferenceType` is used to hold a reference to
another resource. The use of `CodeType` to reference code list entries is
deprecated.

## Voorlopige conclusie

De correcte werkwijze, volgens de geldende geo-standaarden is: 
- Gebruik een enumeratie of codelist voor het specificeren van waardelijsten. De eerste voor een onveranderlijke lijst (uitputtend of stabiel binnen versie van model), de tweede voor een veranderlijke 'open' lijst. De toegestane waarden van beide vormen van waardelijst zijn in de ISO 19103 beschouwing concepten, i.e. begrippen. 
- Gebruik SKOS voor het publiceren van waardelijsten.
- Neem vanuit de instantiedata een HTTP URI verwijzing naar een SKOS concept op als waarde van gegevens waarvan de waarde een concept is. Bij implementatie in GML gebruik je hiervoor het `gml:ReferenceType`.
